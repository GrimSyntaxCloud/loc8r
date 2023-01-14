/**
 * Description: This file imports the controller module for the main page
 */

var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */

// router.get('/', function (req, res, next) { // Where the router will look for the URL
//   res.render('index', { title: 'Express' }); // Controller 
// });

/**
 * Same code as above except, the router and the controller have
 * been separated into a named function and then passed to the
 * controller (router.get) as a callback function.
 */
// const homepageController = (req, res) => {
  /**
   * res.render is an express function for compiling a view template to send as the HTML response
   * that the browser will receive. 
   * The render method takes the name of the view template and a javascript data object.
   * In this case the index part of the method is the name of the template to use which is index.pug in
   * this instance.
   *  The next part containing the title portion is the javascript object containing data for the template to use.
   * 
   */
  // res.render('index', {title: 'Express'});
// };

// router.get('/', homepageController);



/**
 * references the index method of the controllers in the route definition.
 */
router.get('/', ctrlMain.index);

module.exports = router;
