import React, { useState } from 'react';
import {
  TextField, Table, TableBody, TableCell, TableHead, TableRow, Button,
  Paper, IconButton, Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle, Grid
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ScheduleIcon from '@mui/icons-material/Schedule';

// Sample data for job postings
const initialJobPostings = [
  { id: 1, title: 'Software Engineer', department: 'Engineering', status: 'Open' },
  { id: 2, title: 'Marketing Specialist', department: 'Marketing', status: 'Closed' },
  { id: 3, title: 'HR Manager', department: 'Human Resources', status: 'Open' },
  { id: 4, title: 'Financial Analyst', department: 'Finance', status: 'Open' },
];

const RecruitmentManagement = () => {
  const [jobPostings, setJobPostings] = useState(initialJobPostings);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleViewApplications = (job: any) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  const handleManageInterviews = (id: number) => {
    // Placeholder for managing interview schedules logic
    console.log(`Manage interview schedules for job posting with ID: ${id}`);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedJob(null);
  };

  const filteredJobPostings = jobPostings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper style={styles.paper}>
      <TextField
        label="Search Job Postings"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        style={styles.searchField}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={styles.tableCellHeader}>ID</TableCell>
            <TableCell style={styles.tableCellHeader}>Title</TableCell>
            <TableCell style={styles.tableCellHeader}>Department</TableCell>
            <TableCell style={styles.tableCellHeader}>Status</TableCell>
            <TableCell style={styles.tableCellHeader}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredJobPostings.map(job => (
            <TableRow key={job.id}>
              <TableCell style={styles.tableCell}>{job.id}</TableCell>
              <TableCell style={styles.tableCell}>{job.title}</TableCell>
              <TableCell style={styles.tableCell}>{job.department}</TableCell>
              <TableCell style={styles.tableCell}>{job.status}</TableCell>
              <TableCell style={styles.tableCell}>
                <IconButton
                  color="primary"
                  onClick={() => handleViewApplications(job)}
                >
                  <VisibilityIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => handleManageInterviews(job.id)}
                >
                  <ScheduleIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        style={styles.addButton}
      >
        Add New Job Posting
      </Button>

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Job Applications</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Viewing applications for the job posting "{selectedJob?.title}" in the "{selectedJob?.department}" department.
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Job Title"
                type="text"
                fullWidth
                variant="outlined"
                value={selectedJob?.title || ''}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Department"
                type="text"
                fullWidth
                variant="outlined"
                value={selectedJob?.department || ''}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Status"
                type="text"
                fullWidth
                variant="outlined"
                value={selectedJob?.status || ''}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

const styles = {
  paper: {
    padding: '20px',
    backgroundColor: '#f7f7f7',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  searchField: {
    marginBottom: '20px',
  },
  tableCellHeader: {
    fontWeight: 'bold',
    color: '#2c3e50',
    backgroundColor: '#ecf0f1',
  },
  tableCell: {
    color: '#34495e',
  },
  addButton: {
    marginTop: '20px',
  },
};

export default RecruitmentManagement;
