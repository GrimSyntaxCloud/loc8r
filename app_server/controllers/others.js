/**
 * Description: Create an about function that contains the controller code for the homepage
 *  expose the about function as a method by exporting it.
 */

/**
 * GET about page
 */

/**
 * Controller 
 */
const about = (req, res) => {
    res.render('generic-text', { title: 'About' });
};

module.exports = {
    about
};