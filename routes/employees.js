// routes/employees.js
const express = require('express');
const router = express.Router();

// Placeholder for employee data
const employees = [
  { id: 1, name: 'Employee 1', email: 'emp1@gmail.com', phone: '1234567890' },
  { id: 2, name: 'Employee 2', email: 'emp2@gmail.com', phone: '9876543210' }
];

// GET endpoint to retrieve employee data
router.get('/', (req, res) => {
  res.json(employees);
});

module.exports = router;
