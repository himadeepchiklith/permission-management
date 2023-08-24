// api/api.js
const express = require('express');
const data = require('./data');
const router = express.Router();

router.get('/employees', (req, res) => {
  res.json(data.employees);
});

router.get('/requests', (req, res) => {
  res.json(data.requests);
});

module.exports = router;
