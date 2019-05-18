const express = require('express');
const dbFunctions = require('./catalog.js');


const DashboardRouter = express.Router();

// const {
//     createOrder
// } = require('../controllers/catalog.js');
//
// const {
//     listAllOrders
// } = require('../controllers/catalog.js');

DashboardRouter.post('/order', dbFunctions.createOrder);

DashboardRouter.get('/orders', dbFunctions.listAllOrders);

module.exports = DashboardRouter;
