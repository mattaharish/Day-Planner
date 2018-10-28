const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');

// const errorHandler = require('./middlewares/error-handler');
const router = require('./controllers/index');


// Intialize Express App
let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use('/api/v1', router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.send({
    'error': 'Error'
  });
  // render the error page
  res.status(err.status || 500);

});

module.exports = app;