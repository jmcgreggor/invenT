const Product = require('../models/products.js')
const Order = require('../models/orders.js')


async function createOrder(req, res) {
  console.log(req.body);

  //Create order by ID
  const orderId = await Order.newOrder(req.body.product_id, req.body.quantity);

  //Update the inventory
  await Product.inventoryChange(req.body.product_id, -req.body.quantity);

  res.send(`Order ID: ${orderId.id}`);

}

async function listAllOrders(req, res) {
  try {

  const orderList = await Order.allOrders();

  console.log(orderList);

  res.send(orderList);

} catch (error) {

  res.send(error)
}

}

module.exports = {
  createOrder,
  listAllOrders
}
