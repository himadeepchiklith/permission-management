const express = require('express');
const cors = require('cors');
const app = express();
const employeesRouter = require('./routes/employees');
const requestsRouter = require('./routes/requests');
const authRouter = require('./routes/auth');
const apiRouter = require('./api/api'); // Import your custom API router

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Use the route files for specific routes
app.use('/api/employees', employeesRouter);
app.use('/api/requests', requestsRouter);
app.use('/api', authRouter); // This handles user registration and login
app.use('/custom', apiRouter); // Use your custom API router

// Serve static files from the public folder
app.use(express.static('public'));

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to my application!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
