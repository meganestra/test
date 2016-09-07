// var assert = require('chai').assert;
var assert = require('assert');
var ShoppingBasket = require('../shopping_basket');
var Product = require('../product');

beforeEach(function(){
  shoppingBasket = new ShoppingBasket();
  product1 = new Product({
    "productName": "Almond Toe Court Shoes, Patent Black",
    "category": "Women’s Footwear",
    "price": 99.00,
    "quantityInStock": 5
  });
  product2 = new Product({
    "productName": "Flip Flops, Blue",
    "category": "Men’s Footwear",
    "price": 19.00,
    "quantityInStock": 0
  });
  product3 = new Product({
    "productName": "Fine Stripe Short Sleeve Shirt, Grey",
    "category": "Men’s Casualwear",
    "price": 49.99,
    "quantityInStock": 9
  });
});

describe('ShoppingBasket', function(){

  it('should begin with no products', function(){
    assert.equal(0, shoppingBasket.numberOfProducts());
  });

  it('should begin with a value of zero', function(){
    assert.equal(0, shoppingBasket.value);
  });

  it('should be able to receive a product and add to value', function(){
    shoppingBasket.addProduct(product1);
    assert.equal(99.00, shoppingBasket.value);
    assert.equal(1, shoppingBasket.numberOfProducts());
  });

  // it('should be able to check if an item is in stock', function(){

  // });

  // it('should be able to check if an item is out of stock', function(){

  // });

  it('should be able to remove a product and deduct from the value', function(){
    shoppingBasket.addProduct(product1);
    shoppingBasket.addProduct(product2);
    shoppingBasket.removeProduct(product1);
    assert.equal(19.00, shoppingBasket.value);
    assert.equal(1, shoppingBasket.numberOfProducts());
  });

  it('should be able to calculate the total value of all products added', function(){
    shoppingBasket.addProduct(product1);
    shoppingBasket.addProduct(product2);
    assert.equal(118.00, shoppingBasket.value);
  });

  it('should be able to empty', function(){
    shoppingBasket.addProduct(product1);
    shoppingBasket.addProduct(product2);
    shoppingBasket.addProduct(product2);
    
  });


});










