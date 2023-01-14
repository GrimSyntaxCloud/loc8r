/**
 * All requests to the express server run through the middleware defined in the app.js file
 */

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/**
 * tell express to look for the /routes in the app_server directory
 */
const indexRouter = require('./app_server/routes/index');
const usersRouter = require('./app_server/routes/users');

const app = express();

// view engine setup
/**
 * Set express to look for the /views path in the app_server folder
 */
app.set('views', path.join(__dirname, 'app_server','views'));
app.set('view engine', 'pug');

/** MIDDLEWARE
 * The app.use code is known as "middleware" because when a request comes in to the application.
 * it passes through each piece of "middleware" in turn.
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Takes an incoming request, parses out an of the cookie information, and attaches the data to the request
 * in a way that makes it easy to reference in the controller code.
 */
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
