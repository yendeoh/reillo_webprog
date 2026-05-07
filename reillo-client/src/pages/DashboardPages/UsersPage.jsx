import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Paper } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'role', headerName: 'Role', width: 120 },
  { field: 'status', headerName: 'Status', width: 100 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'jon@example.com', role: 'Admin', status: 'Active' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'cersei@example.com', role: 'User', status: 'Active' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'jaime@example.com', role: 'User', status: 'Inactive' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'arya@example.com', role: 'User', status: 'Active' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'daenerys@example.com', role: 'Admin', status: 'Active' },
  { id: 6, lastName: 'Melisandre', firstName: 'Melisandre', email: 'melisandre@example.com', role: 'User', status: 'Active' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'ferrara@example.com', role: 'User', status: 'Inactive' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'rossini@example.com', role: 'User', status: 'Active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'harvey@example.com', role: 'Admin', status: 'Active' },
];

const UsersPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Users Management
      </Typography>

      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Paper>
    </Box>
  );
};

export default UsersPage;