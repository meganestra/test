var assert = require('assert');
var Transaction = require('../transaction');
var Stock = require('../stock');
var Product = require('../product');
var ShoppingBasket = require('../shopping_basket');
var DiscountVoucher = require('../discount_voucher');

beforeEach(function(){

  stock = new Stock();

  shoppingBasket = new ShoppingBasket();

  transaction = new Transaction({
    "shoppingBasket": shoppingBasket,
    "stock":stock
  });

  product1 = new Product({
    "productName": "Almond Toe Court Shoes, Patent Black",
    "department": "Women's",
    "category": "Footwear",
    "price": 99.00,
    "salePrice": null,
    "quantityInStock": 5
  });

  product2 = new Product({
    "productName": "Flip Flops, Blue",
    "department": "Men's",
    "category": "Footwear",
    "price": 19.00,
    "salePrice": null,
    "quantityInStock": 0
  });

  product3 = new Product({
    "productName": "Fine Stripe Short Sleeve Shirt, Grey",
    "department": "Men's",
    "category": "Casualwear",
    "price": 49.99,
    "salePrice": null,
    "quantityInStock": 9
  });

  product4 = new Product({
    "productName": "Fine Stripe Short Sleeve Shirt, Green",
    "department": "Men's",
    "category": "Casualwear",
    "price": 49.99,
    "salePrice": 39.99,
    "quantityInStock": 3
  });

  product5 = new Product({
    "productName": "Flip Flops, Red",
    "department": "Men's",
    "category": "Footwear",
    "price": 19.00,
    "salePrice": null,
    "quantityInStock": 6
  });

});

describe('Transaction', function(){

  it('should move the product from stock to the basket', function(){
    stock.addProduct(product3);
    transaction.moveProductFromStockToBasket(product3, 1);
    assert.equal(product3.quantityInStock, 8);
    assert.equal(shoppingBasket.value, 49.99);
    assert.equal(shoppingBasket.numberOfProducts(), 1);
  })

});













