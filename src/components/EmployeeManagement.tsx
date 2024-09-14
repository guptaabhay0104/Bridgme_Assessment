import React, { useState } from 'react';
import {
  TextField, Table, TableBody, TableCell, TableHead, TableRow,
  Button, Paper, IconButton, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Grid
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

// Sample data for employees
const initialEmployees = [
  { id: 1, name: 'John Doe', department: 'Engineering', role: 'Software Engineer' },
  { id: 2, name: 'Jane Smith', department: 'Marketing', role: 'Marketing Manager' },
  { id: 3, name: 'Emily Johnson', department: 'Human Resources', role: 'HR Specialist' },
  { id: 4, name: 'Michael Brown', department: 'Finance', role: 'Financial Analyst' },
];

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = (id: number) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const handleEdit = (employee: any) => {
    setEmployeeToEdit(employee);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEmployeeToEdit(null);
  };

  const handleSave = () => {
    // Placeholder for saving logic, possibly updating state with new employee data
    console.log('Save employee:', employeeToEdit);
    setIsDialogOpen(false);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper style={styles.paper}>
      <TextField
        label="Search Employees"
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
            <TableCell style={styles.tableCellHeader}>Role</TableCell>
            <TableCell style={styles.tableCellHeader}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredEmployees.map(employee => (
            <TableRow key={employee.id}>
              <TableCell style={styles.tableCell}>{employee.id}</TableCell>
              <TableCell style={styles.tableCell}>{employee.name}</TableCell>
              <TableCell style={styles.tableCell}>{employee.department}</TableCell>
              <TableCell style={styles.tableCell}>{employee.role}</TableCell>
              <TableCell style={styles.tableCell}>
                <IconButton color="primary" onClick={() => handleEdit(employee)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleDelete(employee.id)}>
                  <DeleteIcon />
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
        startIcon={<AddIcon />}
        onClick={() => handleEdit(null)}
      >
        Add New Employee
      </Button>

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{employeeToEdit ? 'Edit Employee' : 'Add Employee'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {employeeToEdit ? 'Update the employee details.' : 'Enter details of the new employee.'}
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                label="Name"
                type="text"
                fullWidth
                variant="outlined"
                value={employeeToEdit?.name || ''}
                onChange={(e) => setEmployeeToEdit({ ...employeeToEdit, name: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Department"
                type="text"
                fullWidth
                variant="outlined"
                value={employeeToEdit?.department || ''}
                onChange={(e) => setEmployeeToEdit({ ...employeeToEdit, department: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                label="Role"
                type="text"
                fullWidth
                variant="outlined"
                value={employeeToEdit?.role || ''}
                onChange={(e) => setEmployeeToEdit({ ...employeeToEdit, role: e.target.value })}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
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

export default EmployeeManagement;
