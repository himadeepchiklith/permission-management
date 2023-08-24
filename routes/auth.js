// routes/auth.js
const express = require('express');
const router = express.Router();

// Placeholder for registered users
const registeredUsers = [
  { name: 'Admin 1', email: 'admin1@gmail.com', password: 'password1', role: 'admin' },
  { name: 'Admin 2', email: 'admin2@gmail.com', password: 'password2', role: 'admin' },
  { name: 'Employee 1', email: 'emp1@gmail.com', password: 'password1', role: 'employee' },
  { name: 'Employee 2', email: 'emp2@gmail.com', password: 'password2', role: 'employee' }
];

// POST endpoint for user registration
router.post('/register', (req, res) => {
  // Handle user registration logic here
  // You'll need to validate input and store user data in your database
  // For this example, let's just add the user to the registeredUsers array
  const newUser = req.body;
  registeredUsers.push(newUser);
  res.json({ message: 'User registered successfully' });
});

// POST endpoint for user login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = registeredUsers.find(user => user.email === email && user.password === password);

  if (user) {
    res.json({ role: user.role });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
