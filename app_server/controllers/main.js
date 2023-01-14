/**
 * Description: Create an index function that contains the controller code for the homepage
 *  expose the index function as a method by exporting it.
 */

/**
 * GET homepage
 */

/**
 * Controller 
 */
const index = (req, res) => {
    /**
 * res.render is an express function for compiling a view template to send as the HTML response
 * that the browser will receive. 
 * The render method takes the name of the view template and a javascript data object.
 * In this case the index part of the method is the name of the template to use which is index.pug in
 * this instance.
 *  The next part containing the title portion is the javascript object containing data for the template to use.
 * 
 */
    res.render('index', { title: 'Express' });
};

module.exports = {
    index
};