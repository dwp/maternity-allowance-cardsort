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

// Scenario 1 & 2

router.post('/scenario-1/about-you', function (req, res) {
  res.redirect('work');
});

router.post('/scenario-1/work', function (req, res) {
  res.redirect('test-period');
});

router.post('/scenario-1/test-period', function (req, res) {
  res.redirect('employment-and-earnings');
});

router.post('/scenario-1/employment-and-earnings', function (req, res) {
  res.redirect('periods-abroad');
});

//router.post('/scenario-1/agency-workers', function (req, res) {
//  res.redirect('periods-abroad');
//});

router.post('/scenario-1/periods-abroad', function (req, res) {
  res.redirect('other-benefits');
});

router.post('/scenario-1/other-benefits', function (req, res) {
  res.redirect('payment-details');
});

router.post('/scenario-1/payment-details', function (req, res) {
  res.redirect('other-information');
});

// Scenario 3

router.post('/scenario-3/about-you', function (req, res) {
  res.redirect('work');
});

router.post('/scenario-3/work', function (req, res) {
  res.redirect('test-period');
});

router.post('/scenario-3/test-period', function (req, res) {
  res.redirect('self-employed');
});

router.post('/scenario-3/self-employed', function (req, res) {
  res.redirect('periods-abroad');
});

router.post('/scenario-3/periods-abroad', function (req, res) {
  res.redirect('other-benefits');
});

router.post('/scenario-3/other-benefits', function (req, res) {
  res.redirect('payment-details');
});

router.post('/scenario-3/payment-details', function (req, res) {
  res.redirect('other-information');
});

// Scenario 4

router.post('/scenario-4/about-you', function (req, res) {
  res.redirect('work');
});

router.post('/scenario-4/work', function (req, res) {
  res.redirect('test-period');
});

router.post('/scenario-4/test-period', function (req, res) {
  res.redirect('employment-and-earnings');
});

router.post('/scenario-4/employment-and-earnings', function (req, res) {
  res.redirect('self-employed');
});

//router.post('/scenario-4/agency-workers', function (req, res) {
//  res.redirect('self-employed');
//});

router.post('/scenario-4/self-employed', function (req, res) {
  res.redirect('periods-abroad');
});

router.post('/scenario-4/periods-abroad', function (req, res) {
  res.redirect('other-benefits');
});

router.post('/scenario-4/other-benefits', function (req, res) {
  res.redirect('payment-details');
});

router.post('/scenario-4/payment-details', function (req, res) {
  res.redirect('other-information');
});

// Scenario 5

router.post('/scenario-5/about-you', function (req, res) {
  res.redirect('work');
});

router.post('/scenario-5/work', function (req, res) {
  res.redirect('test-period');
});

router.post('/scenario-5/test-period', function (req, res) {
  res.redirect('employment-and-earnings');
});

router.post('/scenario-5/employment-and-earnings', function (req, res) {
  res.redirect('agency-workers');
});

router.post('/scenario-5/agency-workers', function (req, res) {
  res.redirect('self-employed');
});

router.post('/scenario-5/self-employed', function (req, res) {
  res.redirect('participating-spouse');
});

router.post('/scenario-5/participating-spouse', function (req, res) {
  res.redirect('periods-abroad');
});

router.post('/scenario-5/periods-abroad', function (req, res) {
  res.redirect('other-benefits');
});

router.post('/scenario-5/other-benefits', function (req, res) {
  res.redirect('payment-details');
});

router.post('/scenario-5/payment-details', function (req, res) {
  res.redirect('other-information');
});


module.exports = router
