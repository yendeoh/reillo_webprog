import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart } from '@mui/x-charts/BarChart';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Gauge } from '@mui/x-charts/Gauge';
import { Typography, Card, CardContent, Button } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function DashboardPage() {
  const location = useLocation();

  return (
    <Box sx={{ background: '#faf8f5', minHeight: '100vh', py: 4, px: { xs: 1, sm: 2, md: 3 } }}>
      <Box sx={{ maxWidth: '90rem', mx: 'auto' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#3f2211', fontWeight: 700, mb: 3 }}>
          Dashboard
        </Typography>

        {/* Summary Section */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }} display="flex">
          <Card sx={{ background: '#f0e6d8', border: 'none', borderRadius: '1.75rem', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#8b6f47', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', mb: 1 }}>Total Users</Typography>
              <Typography variant="h4" sx={{ color: '#3f2211', fontWeight: 700 }}>{rows.length}</Typography>
            </CardContent>
          </Card>
          <Card sx={{ background: '#f0e6d8', border: 'none', borderRadius: '1.75rem', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#8b6f47', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', mb: 1 }}>Average Age</Typography>
              <Typography variant="h4" sx={{ color: '#3f2211', fontWeight: 700 }}>
                {(
                  rows.reduce((sum, row) => sum + (row.age || 0), 0) /
                  rows.filter((row) => row.age !== null).length
                ).toFixed(1)}
              </Typography>
            </CardContent>
          </Card>
        </Stack>

        {/* Gauges */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 4 }}>
          <Card sx={{ background: '#f0e6d8', border: 'none', borderRadius: '1.75rem', boxShadow: 'none', flex: 1 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Gauge width={100} height={100} value={50} />
            </CardContent>
          </Card>
          <Card sx={{ background: '#f0e6d8', border: 'none', borderRadius: '1.75rem', boxShadow: 'none', flex: 1 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Gauge width={100} height={100} value={50} valueMin={0} valueMax={100} />
            </CardContent>
          </Card>
        </Stack>

        {/* Charts */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 4 }}>
          <Card sx={{ background: '#f0e6d8', border: 'none', borderRadius: '1.75rem', boxShadow: 'none', flex: 1 }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#3f2211', fontWeight: 600, mb: 2 }}>Quarterly Sales</Typography>
              <BarChart
                series={[
                  { data: [35, 44, 24, 34], label: 'Series 1' },
                  { data: [51, 6, 49, 30], label: 'Series 2' },
                ]}
                height={290}
                xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band', label: 'Quarters' }]}
              />
            </CardContent>
          </Card>
          <Card sx={{ background: '#f0e6d8', border: 'none', borderRadius: '1.75rem', boxShadow: 'none', flex: 1 }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#3f2211', fontWeight: 600, mb: 2 }}>Data Distribution</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 10, label: 'Series A' },
                        { id: 1, value: 15, label: 'Series B' },
                        { id: 2, value: 20, label: 'Series C' },
                      ],
                    },
                  ]}
                  width={280}
                  height={200}
                />
              </Box>
            </CardContent>
          </Card>
        </Stack>

        {/* DataGrid */}
        <Card sx={{ background: '#f0e6d8', border: 'none', borderRadius: '1.75rem', boxShadow: 'none', mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ color: '#3f2211', fontWeight: 600 }}>
              Users Overview
            </Typography>
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                experimentalFeatures={{ newEditingApi: true }}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </CardContent>
        </Card>

        {/* React Leaflet Map */}
        <Card sx={{ background: '#f0e6d8', border: 'none', borderRadius: '1.75rem', boxShadow: 'none' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ color: '#3f2211', fontWeight: 600 }}>
              Location Map
            </Typography>
            <Box sx={{ height: 500, width: '100%', borderRadius: '1rem', overflow: 'hidden' }}>
              <MapContainer center={[14.604253, 120.994314]} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[14.604253, 120.994314]}>
                  <Popup>
                    National University-Manila <br />
                    551 F Jhocson St, Sampaloc, Manila, 1008 Metro Manila
                  </Popup>
                </Marker>
              </MapContainer>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default DashboardPage;