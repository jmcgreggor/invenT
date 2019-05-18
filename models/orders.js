const db = require('../interfaces/db_conn.js');

class Order {

  constructor(id, product_id, quantity) {
    this.id = id;
    this.product_id = product_id;
    this.license = license;
    this.quantity = quantity;
    this.notes = notes;
  }

  static newOrder(product_id, quantity) {

    console.log(product_id, quantity);

     return db.one(`
      INSERT INTO orders (product_id, quantity)
      VALUES (${product_id}, ${quantity})
      returning id
      `)
  }

  static async allOrders() {

    const findAllQuery = 'SELECT * FROM orders;';

      return db.query(findAllQuery)

    }
}

module.exports = Order;
