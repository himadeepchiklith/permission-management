// routes/requests.js
const express = require('express');
const router = express.Router();

// Placeholder for requests data
const requests = [
  { id: 1, employeeId: 1, item: 'Item 1', permission: false, fileLink: 'link_to_file_1' },
  { id: 2, employeeId: 2, item: 'Item 2', permission: true, fileLink: 'link_to_file_2' }
];

// GET endpoint to retrieve requests data
router.get('/', (req, res) => {
  res.json(requests);
});

module.exports = router;
