import { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import articles from '../../assets/article-content.js';

const DashArticleListPage = () => {
  const [rows] = useState(
    articles.map((a, idx) => ({ id: idx + 1, name: a.name, title: a.title, description: a.description }))
  );

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'name', headerName: 'Slug', width: 180 },
    { field: 'description', headerName: 'Description', flex: 1.5 },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Articles</Typography>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ height: 520, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10]} initialState={{ pagination: { paginationModel: { pageSize: 5 } } }} />
        </Box>
      </Paper>
    </Box>
  );
};

export default DashArticleListPage;
