/**
 * Description: This file imports the controller module for the main page
 */

var express = require('express');
var router = express.Router();

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* GET home page. */

/**
 * references the index method of the controllers in the route definition.
 */
router.get('/', ctrlMain.index);

module.exports = router;
