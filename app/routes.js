const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/about-you', function (req, res) {
  res.redirect('work');
});

router.post('/work', function (req, res) {
  res.redirect('test-period');
});

router.post('/test-period', function (req, res) {
  res.redirect('employment-and-earnings');
});

router.post('/employment-and-earnings', function (req, res) {
  res.redirect('agency-workers');
});

module.exports = router
