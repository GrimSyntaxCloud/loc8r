/**
 * Description: Create an index function that contains the controller code for the homepage
 *  expose the index function as a method by exporting it.
 */

/**
 * GET homepage
 */

const index = (req, res) => {
    res.render('index', {title: 'Express'});
};

module.exports = {
    index
};