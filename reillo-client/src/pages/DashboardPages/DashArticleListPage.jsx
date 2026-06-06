import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useArticles } from '../../contexts/ArticleContext.jsx';

const DashArticleListPage = () => {
  const { articles, addArticle, toggleArticlePublished } = useArticles();
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const rows = useMemo(
    () =>
      articles
        .map((article, idx) => ({
          id: idx + 1,
          name: article.name,
          title: article.title,
          description: article.description,
          published: article.published ?? true,
        }))
        .filter((row) => {
          const query = search.toLowerCase();
          return (
            row.title.toLowerCase().includes(query) ||
            row.name.toLowerCase().includes(query) ||
            row.description.toLowerCase().includes(query)
          );
        }),
    [articles, search]
  );

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'name', headerName: 'Slug', width: 180 },
    { field: 'description', headerName: 'Description', flex: 1.5 },
    {
      field: 'published',
      headerName: 'Status',
      width: 120,
      valueGetter: ({ row }) => (row?.published ? 'Published' : 'Unpublished'),
    },
    {
      field: 'action',
      headerName: 'View',
      width: 120,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Link to={`/articles/${row?.name ?? ''}`} style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>
          Open
        </Link>
      ),
    },
    {
      field: 'toggle',
      headerName: 'Publish',
      width: 160,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Button
          variant="contained"
          color={row.published ? 'secondary' : 'primary'}
          onClick={() => toggleArticlePublished(row.name)}
          size="small"
        >
          {row.published ? 'Unpublish' : 'Publish'}
        </Button>
      ),
    },
  ];

  const handleAddArticle = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addArticle({
      title: title.trim(),
      name: name.trim(),
      imageUrl: imageUrl.trim(),
      description: description.trim(),
      content: content.trim(),
    });

    setTitle('');
    setName('');
    setImageUrl('');
    setDescription('');
    setContent('');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Dashboard Articles
      </Typography>

      <Paper component="form" onSubmit={handleAddArticle} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Add New Article
        </Typography>
        <Box sx={{ display: 'grid', gap: 2, mb: 2 }}>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Slug (optional)"
            value={name}
            onChange={(event) => setName(event.target.value)}
            variant="outlined"
            helperText="If empty, the slug will be generated from the title"
          />
          <TextField
            fullWidth
            label="Image URL"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            variant="outlined"
            multiline
            minRows={3}
            required
          />
          <TextField
            fullWidth
            label="Content (optional)"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            variant="outlined"
            multiline
            minRows={4}
            helperText="Optional detailed article content for the article page"
          />
        </Box>
        <Button type="submit" variant="contained">
          Add Article
        </Button>
      </Paper>

      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField
          fullWidth
          label="Search articles"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          variant="outlined"
          size="small"
        />
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Box sx={{ height: 520, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10]}
            initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default DashArticleListPage;
