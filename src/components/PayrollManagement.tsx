import React, { useState } from 'react';
import {
  TextField, Table, TableBody, TableCell, TableHead, TableRow, Button,
  Paper, IconButton, Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle, Grid
} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import PaymentIcon from '@mui/icons-material/Payment';

// Sample data for payrolls
const initialPayrolls = [
  { id: 1, name: 'John Doe', department: 'Engineering', salary: 7000, status: 'Processed' },
  { id: 2, name: 'Jane Smith', department: 'Marketing', salary: 6500, status: 'Pending' },
  { id: 3, name: 'Emily Johnson', department: 'Human Resources', salary: 6000, status: 'Processed' },
  { id: 4, name: 'Michael Brown', department: 'Finance', salary: 7200, status: 'Pending' },
];

const PayrollManagement = () => {
  const [payrolls, setPayrolls] = useState(initialPayrolls);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPayroll, setSelectedPayroll] = useState(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleProcessPayroll = (id: number) => {
    setPayrolls(payrolls.map(payroll =>
      payroll.id === id ? { ...payroll, status: 'Processed' } : payroll
    ));
  };

  const handleViewHistory = (payroll: any) => {
    setSelectedPayroll(payroll);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedPayroll(null);
  };

  const filteredPayrolls = payrolls.filter(payroll =>
    payroll.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payroll.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper style={styles.paper}>
      <TextField
        label="Search Payrolls"
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
            <TableCell style={styles.tableCellHeader}>Name</TableCell>
            <TableCell style={styles.tableCellHeader}>Department</TableCell>
            <TableCell style={styles.tableCellHeader}>Salary</TableCell>
            <TableCell style={styles.tableCellHeader}>Status</TableCell>
            <TableCell style={styles.tableCellHeader}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredPayrolls.map(payroll => (
            <TableRow key={payroll.id}>
              <TableCell style={styles.tableCell}>{payroll.id}</TableCell>
              <TableCell style={styles.tableCell}>{payroll.name}</TableCell>
              <TableCell style={styles.tableCell}>{payroll.department}</TableCell>
              <TableCell style={styles.tableCell}>${payroll.salary}</TableCell>
              <TableCell style={styles.tableCell}>{payroll.status}</TableCell>
              <TableCell style={styles.tableCell}>
                <IconButton
                  color="primary"
                  onClick={() => handleProcessPayroll(payroll.id)}
                  disabled={payroll.status === 'Processed'}
                >
                  <PaymentIcon />
                </IconButton>
                <IconButton
                  color="default"
                  onClick={() => handleViewHistory(payroll)}
                >
                  <HistoryIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        style={styles.generateButton}
      >
        Generate Payroll Report
      </Button>

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Payroll History</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Viewing payroll history for {selectedPayroll?.name}. Detailed history will be shown here.
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                label="Employee Name"
                type="text"
                fullWidth
                variant="outlined"
                value={selectedPayroll?.name || ''}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                label="Department"
                type="text"
                fullWidth
                variant="outlined"
                value={selectedPayroll?.department || ''}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                label="Salary"
                type="text"
                fullWidth
                variant="outlined"
                value={`$${selectedPayroll?.salary}` || ''}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                label="Status"
                type="text"
                fullWidth
                variant="outlined"
                value={selectedPayroll?.status || ''}
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
  generateButton: {
    marginTop: '20px',
  },
};

export default PayrollManagement;
