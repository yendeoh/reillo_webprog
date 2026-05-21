import { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { createUser, fetchUsers, updateUser } from '../../../UserService.js';

// Assume usersSeed is imported or defined as the JSON string from your assets
// import usersSeed from '../../assets/users.json?raw';
const usersSeed = '[]'; 

// --- Constants & Helpers ---
const roles = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female', 'other'];

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  type: 'viewer',
  username: '',
  password: '',
  address: '',
  isActive: true,
};

const labelize = (value) => 
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

const parseUserSeed = () => {
  try {
    const parsed = JSON.parse(usersSeed);
    return {
      users: parsed.map((user, index) => ({
        id: Number(user.id) || index + 1,
        firstName: String(user.firstName ?? '').trim(),
        lastName: String(user.lastName ?? '').trim(),
        age: String(user.age ?? '').trim(),
        gender: genders.includes(String(user.gender ?? '').trim().toLowerCase())
          ? String(user.gender ?? '').trim().toLowerCase()
          : '',
        type: roles.includes(String(user.type ?? user.role ?? '').trim().toLowerCase())
          ? String(user.type ?? user.role ?? '').trim().toLowerCase()
          : 'viewer',
        username: String(user.username ?? '').trim().toLowerCase(),
        password: String(user.password ?? ''),
        address: String(user.address ?? '').trim(),
        isActive: typeof user.isActive === 'boolean' ? user.isActive : true,
      })),
      error: '',
    };
  } catch (e) {
    return { users: [], error: 'Unable to read users from data source.' };
  }
};

const seed = parseUserSeed();

// --- Main Component ---
const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const currentUserType = typeof window !== 'undefined' ? (localStorage.getItem('type') || 'viewer') : 'viewer';
  if (currentUserType === 'viewer') {
    return (
      <Box sx={{ p: 4 }}>
        <Alert severity="warning">Access denied: viewers cannot access the Users page.</Alert>
      </Box>
    );
  }
  
  const [users, setUsers] = useState(seed.users);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const filteredUsers = users.filter((user) => {
    const query = searchQuery.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(query) ||
      user.lastName.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
    );
  });

  const resetForm = () => {
    setForm(blankForm);
    setErrors({});
  };

  const loadUsers = async () => {
    setLoading(true);
    setApiError('');

    try {
      const { data } = await fetchUsers();
      const loaded = Array.isArray(data?.users) ? data.users : Array.isArray(data) ? data : [];
      setUsers(loaded.map((user) => ({
        ...user,
        type: user.type || user.role || 'viewer',
        id: user._id || user.id,
      })));
    } catch (fetchError) {
      console.error('Error fetching users:', fetchError);
      setApiError('Unable to load users from the server. Showing local data.');
      setUsers(seed.users);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const openModal = (user) => {
    setModal({ open: true, id: user?.id || null });
    setForm(user ? { ...blankForm, ...user } : blankForm);
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    const email = form.email.trim().toLowerCase();
    const username = form.username.trim().toLowerCase();

    ['firstName', 'lastName', 'email', 'type', 'password'].forEach((key) => {
      if (key === 'password' && modal.id) {
        return;
      }

      if (!String(form[key]).trim()) {
        nextErrors[key] = 'This field is required.';
      }
    });

    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!nextErrors.email && users.some((u) => u.id !== modal.id && u.email === email)) {
      nextErrors.email = 'Email address already exists.';
    }

    if (!nextErrors.username && users.some((u) => u.id !== modal.id && u.username === username)) {
      nextErrors.username = 'Username already exists.';
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const payload = { ...form };
    if (modal.id && !payload.password) {
      delete payload.password;
    }

    try {
      if (modal.id) {
        await updateUser(modal.id, payload);
      } else {
        await createUser(payload);
      }
      await loadUsers();
      closeModal();
    } catch (saveError) {
      console.error('Error saving user:', saveError);
      setApiError('Unable to save user. Please try again.');
    }
  };

  const toggleStatus = async (id) => {
    const user = users.find((u) => u.id === id);
    if (!user) {
      return;
    }

    try {
      await updateUser(id, { isActive: !user.isActive });
      await loadUsers();
    } catch (statusError) {
      console.error('Error toggling user status:', statusError);
      setApiError('Unable to update user status. Please try again.');
    }
  };

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    ...extra,
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'fullName',
      headerName: 'Full Name',
      flex: 1,
      minWidth: 170,
      valueGetter: (p, row) => `${row.firstName} ${row.lastName}`.trim(),
    },
    { field: 'username', headerName: 'Username', minWidth: 150 },
    { field: 'age', headerName: 'Age', width: 90 },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 110,
      valueGetter: (p, row) => labelize(row.gender),
    },
    { field: 'contactNumber', headerName: 'Contact Number', minWidth: 160 },
    { field: 'email', headerName: 'Email', flex: 1.1, minWidth: 220 },
    {
      field: 'type',
      headerName: 'Type',
      width: 120,
      valueGetter: (p, row) => labelize(row.type),
    },
    {
      field: 'isActive',
      headerName: 'Status',
      width: 120,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? 'Active' : 'Inactive'}
          color={row.isActive ? 'success' : 'default'}
          variant={row.isActive ? 'filled' : 'outlined'}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 220,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button size="small" variant="outlined" onClick={() => openModal(row)}>Edit</Button>
          <Button
            size="small"
            variant="contained"
            color={row.isActive ? 'warning' : 'success'}
            onClick={() => toggleStatus(row.id)}
          >
            {row.isActive ? 'Disable' : 'Activate'}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ background: '#faf8f5', minHeight: '100vh', py: 4, px: { xs: 1, sm: 2, md: 3 } }}>
      <Box sx={{ maxWidth: '90rem', mx: 'auto', width: '100%', minWidth: 0 }}>
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Typography variant="h4" sx={{ color: '#3f2211', fontWeight: 700 }}>Users</Typography>
          <Button variant="contained" onClick={() => openModal()} sx={{ background: '#8b6f47', color: '#faf8f5', '&:hover': { background: '#6b4423' }, width: { xs: '100%', sm: 'auto' } }}>
            Add User
          </Button>
        </Box>

        {/* Search Bar */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            placeholder="Search by first name, last name, email, or username..."
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              background: '#f0e6d8',
              borderRadius: '0.75rem',
              '& .MuiOutlinedInput-root': {
                color: '#3f2211',
                '& fieldset': { borderColor: '#f0e6d8' },
                '&:hover fieldset': { borderColor: '#8b6f47' },
              }
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    🔍
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        {apiError && <Alert severity="error" sx={{ mb: 2 }}>{apiError}</Alert>}
        {seed.error && <Alert severity="error" sx={{ mb: 2 }}>{seed.error}</Alert>}

        <Paper sx={{ p: { xs: 1.5, sm: 2 }, minWidth: 0, overflow: 'hidden', background: '#f0e6d8', border: 'none', borderRadius: '1.75rem', boxShadow: 'none' }}>
        {filteredUsers.length ? (
          <Box sx={{ height: { xs: 400, sm: 520 }, width: '100%' }}>
            <DataGrid
              rows={filteredUsers}
              columns={columns}
              getRowId={(row) => row._id || row.id}
              loading={loading}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10]}
              initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
            />
          </Box>
        ) : users.length === 0 ? (
          <Alert severity="info">No users found. Use Add user to create your first record.</Alert>
        ) : (
          <Alert severity="info">No users match your search query. Try different keywords.</Alert>
        )}
        </Paper>

      <Dialog open={modal.open} onClose={closeModal} fullWidth fullScreen={isMobile} maxWidth="md">
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>{modal.id ? 'Edit User' : 'Add User'}</DialogTitle>
          <DialogContent dividers sx={{ px: { xs: 2, sm: 3 } }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('firstName', 'First Name')} />
                <TextField {...fieldProps('lastName', 'Last Name')} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('age', 'Age')} />
                <TextField {...fieldProps('gender', 'Gender', { select: true })}>
                  {genders.map((g) => <MenuItem key={g} value={g}>{labelize(g)}</MenuItem>)}
                </TextField>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('contactNumber', 'Contact Number')} />
                <TextField {...fieldProps('email', 'Email Address', { type: 'email' })} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('type', 'Type', { select: true })}>
                  {roles.map((r) => <MenuItem key={r} value={r}>{labelize(r)}</MenuItem>)}
                </TextField>
                <TextField {...fieldProps('username', 'Username')} />
              </Stack>
              <TextField
                {...fieldProps('password', 'Password', {
                  type: showPassword ? 'text' : 'password',
                  slotProps: {
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  },
                })}
              />
              <TextField {...fieldProps('address', 'Address', { multiline: true, rows: 3 })} />
              <FormControlLabel
                control={<Switch name="isActive" checked={form.isActive} onChange={handleChange} />}
                label={`User status: ${form.isActive ? 'Active' : 'Inactive'}`}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, py: 2 }}>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained">{modal.id ? 'Save User' : 'Add User'}</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
    </Box>
  );
};

export default UsersPage;