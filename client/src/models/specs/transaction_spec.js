var assert = require('assert');
var Transaction = require('../transaction');
var Stock = require('../stock');
var Product = require('../product');
var ShoppingBasket = require('../shopping_basket');
var DiscountVoucher = require('../discount_voucher');

beforeEach(function(){

  stock = new Stock();

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
    "voucher": fiveVoucher,
    "stock": stock
  });

  transactionWithTenVoucher = new Transaction({
    "shoppingBasket": shoppingBasket,
    "voucher": tenVoucher,
    "stock": stock
  });

  transactionWithFifteenVoucher = new Transaction({
    "shoppingBasket": shoppingBasket,
    "voucher": fifteenVoucher,
    "stock": stock
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

  it('should check if a basket contains the special items', function(){
    shoppingBasket.addProduct(product1);
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

  it('should apply a discount to a basket', function(){
    shoppingBasket.addProduct(product1);
    transactionWithFifteenVoucher.applyDiscountVoucher();
    assert.equal(shoppingBasket.value, 84.00);
  });

  it('should refuse to apply a discount to a basket', function(){
    shoppingBasket.addProduct(product3);
    transactionWithFifteenVoucher.applyDiscountVoucher();
    assert.equal(shoppingBasket.value, 49.99);
  });

  it('should move the product from stock to the basket', function(){
    stock.addProduct(product3);
    transaction = new Transaction({"shoppingBasket": shoppingBasket, "voucher": fiveVoucher, "stock":stock});
    transaction.moveProductFromStockToBasket(product3, 1);
    assert.equal(product3.quantityInStock, 8);
    assert.equal(shoppingBasket.value, 49.99);
    assert.equal(shoppingBasket.numberOfProducts(), 1);
  })

});













