var assert = require('assert');
var StockManager = require('../stock_manager');
// var Product = require('../product');

beforeEach(function(){

  stockManager = new StockManager();

  // product1 = new Product({
  //   "productName": "Almond Toe Court Shoes, Patent Black",
  //   "department": "Women's",
  //   "category": "Footwear",
  //   "price": 99.00,
  //   "inSale": false,
  //   "quantityInStock": 5
  // });

  // product2 = new Product({
  //   "productName": "Flip Flops, Blue",
  //   "department": "Men's",
  //   "category": "Footwear",
  //   "price": 19.00,
  //   "inSale": false,
  //   "quantityInStock": 0
  // });

  // product3 = new Product({
  //   "productName": "Fine Stripe Short Sleeve Shirt, Grey",
  //   "department": "Men's",
  //   "category": "Casualwear",
  //   "price": 49.99,
  //   "inSale": false,
  //   "quantityInStock": 9
  // });

});

describe('StockManager', function(){

  it('should begin with no stock', function(){
    assert.equal(0, stockManager.countTotalInStock());
    assert.equal(0, stockManager.calculateTotalStockValue());
  });


});










