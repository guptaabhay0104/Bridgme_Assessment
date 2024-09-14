import React from 'react';
import { Card, CardContent, Typography, Grid, Paper } from '@mui/material';

const Dashboard = () => {
  return (
    <Paper sx={styles.paper}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={styles.card}>
            <CardContent sx={styles.cardContent}>
              <Typography variant="h6" sx={styles.cardTitle}>Total Employees</Typography>
              <Typography variant="h4" sx={styles.cardValue}>150</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={styles.card}>
            <CardContent sx={styles.cardContent}>
              <Typography variant="h6" sx={styles.cardTitle}>Pending Leave Requests</Typography>
              <Typography variant="h4" sx={styles.cardValue}>10</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={styles.card}>
            <CardContent sx={styles.cardContent}>
              <Typography variant="h6" sx={styles.cardTitle}>Upcoming Interviews</Typography>
              <Typography variant="h4" sx={styles.cardValue}>5</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

const styles = {
  paper: {
    padding: 3,
    backgroundColor: '#f5f5f5',
  },
  card: {
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: 2,
  },
  cardContent: {
    textAlign: 'center',
  },
  cardTitle: {
    color: '#555',
    fontWeight: 'bold',
  },
  cardValue: {
    color: '#000',
    fontWeight: 'bold',
  },
};

export default Dashboard;
