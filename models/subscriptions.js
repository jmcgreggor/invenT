const db = require('../interfaces/db_conn.js');

class Subscription {

  constructor(id, product_id, quantity) {
    this.id = id;
    this.product_id = product_id;
    this.subscription = subscription;
    this.quantity = quantity;
    this.notes = notes;
  }

  static newSubscription(product_id, quantity) {
     return db.one(`
      INSERT INTO subscriptions (product_id, quantity)
      VALUES (${product_id}, ${quantity})
      returning id
      `)
  }
}

module.exports = Subscription;
