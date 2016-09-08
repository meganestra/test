var assert = require('assert');
var Transaction = require('../transaction');
var StockManager = require('../stock_manager');
var Product = require('../product');
var ShoppingBasket = require('../shopping_basket');
var DiscountVoucher = require('../discount_voucher');

beforeEach(function(){

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

  transactionWithFiveVoucher = new Transaction({
    "shoppingBasket": shoppingBasket,
    "voucher": fiveVoucher
  });

  transactionWithTenVoucher = new Transaction({
    "shoppingBasket": shoppingBasket,
    "voucher": tenVoucher
  });

  transactionWithFifteenVoucher = new Transaction({
    "shoppingBasket": shoppingBasket,
    "voucher": fifteenVoucher
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
    assert.equal(transactionWithFifteenVoucher.checkSpecialItemPresent(), true);
  });

  it('should check if a basket does not contain the special items', function(){
    shoppingBasket.addProduct(product3);
    assert.equal(transactionWithFifteenVoucher.checkSpecialItemPresent(), false);
  });

  it('should check if a basket meets the discount voucher threshold', function(){
    shoppingBasket.addProduct(product1);
    assert.equal(transactionWithTenVoucher.checkEligibleDiscountValueReached(), true);
  });

  it('should check if a basket does not meet the discount voucher threshold', function(){
    shoppingBasket.addProduct(product3);
    assert.equal(transactionWithTenVoucher.checkEligibleDiscountValueReached(), false);
  });

  it('should check if a basket is eligible for a five pound discount voucher', function(){
    shoppingBasket.addProduct(product1);
    assert.equal(transactionWithFiveVoucher.checkEligibleForDiscountVoucher(), true);
  });

  it('should check if a basket is eligible for a five pound discount voucher', function(){
    assert.equal(transactionWithFiveVoucher.checkEligibleForDiscountVoucher(), false);
  });

  it('should check if a basket is eligible for a ten pound discount voucher', function(){
    shoppingBasket.addProduct(product1);
    assert.equal(transactionWithTenVoucher.checkEligibleForDiscountVoucher(), true);
  });

  it('should check if a basket is not eligible for a ten pound discount voucher', function(){
    shoppingBasket.addProduct(product3);
    assert.equal(transactionWithTenVoucher.checkEligibleForDiscountVoucher(), false);
  });

  it('should check if a basket is eligible for a fifteen pound discount voucher', function(){
    shoppingBasket.addProduct(product1);
    assert.equal(transactionWithFifteenVoucher.checkEligibleForDiscountVoucher(), true);
  });

  it('should check if a basket is not eligible for a fifteen pound discount voucher', function(){
    shoppingBasket.addProduct(product3);
    assert.equal(transactionWithFifteenVoucher.checkEligibleForDiscountVoucher(), false);
  });

});













