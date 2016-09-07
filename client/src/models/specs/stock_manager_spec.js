var assert = require('assert');
var StockManager = require('../stock_manager');
var Product = require('../product');

beforeEach(function(){

  stockManager = new StockManager();

  product1 = new Product({
    "productName": "Almond Toe Court Shoes, Patent Black",
    "department": "Women's",
    "category": "Footwear",
    "price": 99.00,
    "inSale": false,
    "quantityInStock": 5
  });

  product2 = new Product({
    "productName": "Flip Flops, Blue",
    "department": "Men's",
    "category": "Footwear",
    "price": 19.00,
    "inSale": false,
    "quantityInStock": 0
  });

  product3 = new Product({
    "productName": "Fine Stripe Short Sleeve Shirt, Grey",
    "department": "Men's",
    "category": "Casualwear",
    "price": 49.99,
    "inSale": false,
    "quantityInStock": 9
  });

});

describe('StockManager', function(){

  it('should be able to count the number of items in stock', function(){
    stockManager.addProduct(product1);
    assert.equal(stockManager.countTotalItemsInStock(), 5);
  });

  it('should be able to count the number of products in stock', function(){
    stockManager.addProduct(product1);
    assert.equal(stockManager.countTotalProductsInStock(), 1);
  });

  it('should begin with no stock', function(){
    assert.equal(stockManager.countTotalItemsInStock(), 0);
    assert.equal(stockManager.calculateTotalStockValue(), 0);
  });

  it('should be able to populate stock', function(){
    stockManager.addProduct(product1);
    assert.equal(stockManager.countTotalItemsInStock(), 5);
    assert.equal(stockManager.calculateTotalStockValue(), 495);
  });

  it('should be able to check if an item is in stock', function(){
    stockManager.addProduct(product1);
    assert.equal(stockManager.checkIfItemInStock(product1, 4), true);
  });

  it('should be able to check if an item is not in stock', function(){
    stockManager.addProduct(product2);
    assert.equal(stockManager.checkIfItemInStock(product2, 1), false);
  });

  it('should be able to remove an item from the stock', function(){
    stockManager.addProduct(product1);
    stockManager.removeItemFromStock(product1, 2);
    assert.equal(stockManager.countTotalItemsInStock(), 3);
    assert.equal(stockManager.calculateTotalStockValue(), 297);
  });


});










