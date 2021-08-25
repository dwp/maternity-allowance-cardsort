const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/', function (req, res) {
  res.redirect('about-you');
});

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

router.post('/agency-workers', function (req, res) {
  res.redirect('self-employed');
});

router.post('/self-employed', function (req, res) {
  res.redirect('participating-spouse');
});

router.post('/participating-spouse', function (req, res) {
  res.redirect('periods-abroad');
});

router.post('/periods-abroad', function (req, res) {
  res.redirect('other-benefits');
});

router.post('/other-benefits', function (req, res) {
  res.redirect('payment-details');
});

router.post('/payment-details', function (req, res) {
  res.redirect('other-information');
});

module.exports = router
