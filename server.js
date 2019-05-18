const express = require('express');
const app = express();
const port = 4000;
// var router = express.Router();
// var path = __dirname;
// var viewsPath = __dirname + "/views/"

app.use(express.urlencoded({extended: false}));

const dashboardRouter = require('./controllers/router.js');

app.use('/', dashboardRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
