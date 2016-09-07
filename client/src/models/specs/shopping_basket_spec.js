var assert = require('assert');
var ShoppingBasket = require('../shopping_basket');
var Product = require('../product');

beforeEach(function(){

  shoppingBasket = new ShoppingBasket();

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
    shoppingBasket.addProduct(product3);
    shoppingBasket.emptyBasket();
    assert.equal(0, shoppingBasket.numberOfProducts());
    assert.equal(0, shoppingBasket.value);

  });

});










