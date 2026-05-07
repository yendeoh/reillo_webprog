import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography, Paper } from '@mui/material';

const ReportsPage = () => {
  // Sample data for charts
  const lineData = [
    { x: 'Jan', y: 100 },
    { x: 'Feb', y: 150 },
    { x: 'Mar', y: 200 },
    { x: 'Apr', y: 180 },
    { x: 'May', y: 250 },
    { x: 'Jun', y: 300 },
  ];

  const barData = [
    { x: 'Product A', y: 120 },
    { x: 'Product B', y: 200 },
    { x: 'Product C', y: 150 },
    { x: 'Product D', y: 300 },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Reports Dashboard
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Sales Trend (Line Chart)
        </Typography>
        <LineChart
          xAxis={[{ data: lineData.map(d => d.x) }]}
          series={[{ data: lineData.map(d => d.y) }]}
          width={600}
          height={300}
        />
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Product Performance (Bar Chart)
        </Typography>
        <BarChart
          xAxis={[{ data: barData.map(d => d.x), scaleType: 'band' }]}
          series={[{ data: barData.map(d => d.y) }]}
          width={600}
          height={300}
        />
      </Paper>
    </Box>
  );
};

export default ReportsPage;