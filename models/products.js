const db = require('../interfaces/db_conn.js');

class Product {

  constructor(id, name, sku, version, blueprint) {
    this.id = id;
    this.name = name;
    this.sku = sku;
    this.version = version;
    this.blueprint = blueprint; //Optional value
  }

  static inventoryChange(product_id, quantity) {

    console.log(`Product ID: ${product_id}`);

    return db.result(`
      UPDATE orders
      SET quantity = quantity + ${quantity}
      WHERE id=${product_id}
      `)
  }
}

module.exports = Product;
