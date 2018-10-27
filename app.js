const express = require('express');
const app = express();

const errorHandler = require('./middlewares/error-handler');
const router = require('./controllers/index');

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use('/', router);

// error handler
app.use(errorHandler);

app.listen(5000, () => {
    console.log('Server is running on port 5000 :)');
})