const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// POST route to add a new employee with validation
router.post('/employees', [
  check('name').isString().withMessage('Name must be a string'),
  check('department').isString().withMessage('Department must be a string')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Handle valid request here
  const { name, department } = req.body;
  // Add logic to save the employee to the database
  res.status(201).json({ message: 'Employee added successfully', employee: { name, department } });
});

// Example GET route to fetch employees
router.get('/employees', (req, res) => {
  // Add logic to fetch employees from the database
  res.status(200).json({ employees: [] }); // Example response
});

module.exports = router;
