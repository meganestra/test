var assert = require('assert');
var Transaction = require('../transaction');
var StockManager = require('../stock_manager');
var Product = require('../product');
var ShoppingBasket = require('../shopping_basket');
var DiscountVoucher = require('../discount_voucher');

beforeEach(function(){

  transaction = new Transaction();

  stockManager = new StockManager();

  shoppingBasket = new ShoppingBasket();

  fiveVoucher = new DiscountVoucher({
    "discountValue": 5,
    "eligibleValue": 5,
    "specialItems": []
  });

  tenVoucher = new DiscountVoucher({
    "discountValue": 10,
    "eligibleValue": 50,
    "specialItems": []
  });

  fifteenVoucher = new DiscountVoucher({
    "discountValue": 15,
    "eligibleValue": 75,
    "specialItems": [{"category": "Footwear"}]
  });

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

describe('Transaction', function(){

  it('should check if a basket contains the special items', function(){
    shoppingBasket.addProduct(product1);
    assert.equal(transaction.checkSpecialItemPresent(shoppingBasket, fifteenVoucher), true);
  });

  it('should check if a basket does not contain the special items', function(){
    shoppingBasket.addProduct(product3);
    assert.equal(transaction.checkSpecialItemPresent(shoppingBasket, fifteenVoucher), false);
  });

  it('should check if a basket meets the discount voucher threshold', function(){
    shoppingBasket.addProduct(product1);
    assert.equal(transaction.checkEligibleDiscountValueReached(shoppingBasket, tenVoucher), true);
  });

  it('should check if a basket does not meet the discount voucher threshold', function(){
    shoppingBasket.addProduct(product3);
    assert.equal(transaction.checkEligibleDiscountValueReached(shoppingBasket, tenVoucher), false);
  });

  // it('should check if a five pound discount voucher is eligible', function(){
  //   shoppingBasket.addProduct(product1);
  //   shoppingBasket.addProduct(product3);
  //   assert.equal(transaction.checkSimpleDiscountEligibility(shoppingBasket, fiveVoucher), true);
  // });

  // it('should check if a ten pound discount voucher is eligible', function(){
  //   shoppingBasket.addProduct(product1);
  //   shoppingBasket.addProduct(product3);
  //   assert.equal(transaction.checkSimpleDiscountEligibility(shoppingBasket, tenVoucher), true);
  // });

  // it('should check if a fifteen pound discount voucher is eligible', function(){
  //   shoppingBasket.addProduct(product3);
  //   assert.equal(transaction.checkAdvancedDiscountEligibility(shoppingBasket, fifteenVoucher), false);
  // });

});













