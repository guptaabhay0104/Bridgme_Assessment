import React, { useState } from 'react';
import { TextField, Table, TableBody, TableCell, TableHead, TableRow, Button, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Sample data for employee performance reviews
const initialPerformanceReviews = [
  { id: 1, name: 'John Doe', department: 'Engineering', rating: 'Excellent', review: 'Outstanding performance' },
  { id: 2, name: 'Jane Smith', department: 'Marketing', rating: 'Good', review: 'Met all expectations' },
  { id: 3, name: 'Emily Johnson', department: 'Human Resources', rating: 'Satisfactory', review: 'Satisfactory performance' },
  { id: 4, name: 'Michael Brown', department: 'Finance', rating: 'Needs Improvement', review: 'Needs to work on accuracy' },
];

const EmployeePerformancePage = () => {
  const [reviews, setReviews] = useState(initialPerformanceReviews);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleEdit = (id: number) => {
    // Placeholder for editing logic
    console.log(`Edit review with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    setReviews(reviews.filter(review => review.id !== id));
  };

  const filteredReviews = reviews.filter(review =>
    review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper style={{ padding: '20px' }}>
      <TextField
        label="Search Reviews"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px' }}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Review</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredReviews.map(review => (
            <TableRow key={review.id}>
              <TableCell>{review.id}</TableCell>
              <TableCell>{review.name}</TableCell>
              <TableCell>{review.department}</TableCell>
              <TableCell>{review.rating}</TableCell>
              <TableCell>{review.review}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(review.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(review.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Add New Review
      </Button>
    </Paper>
  );
};

export default EmployeePerformancePage;
