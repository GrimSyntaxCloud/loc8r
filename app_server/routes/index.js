/**
 * Description: This file imports the controller module for the main page
 */

var express = require('express');
var router = express.Router();

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* GET home page. */

/**
 * Locations pages
 * The res.get method declares the url of the path requested
 */

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/**
 * Others pages
 */

router.get('/about', ctrlOthers.about);

module.exports = router;
