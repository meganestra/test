// var assert = require('chai').assert;
var assert = require('assert');
var ShoppingBasket = require('../shopping_basket');
var Product = require('../product');
var ComplexVoucher = require('../complex_voucher');

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
  voucher1 = new ComplexVoucher({
    "discountValue": 15.00,
    "thresholdValue": 75.00,
    "specialItemCategory": "Women's Footwear"
  });
});

// describe('ComplexVoucher', function(){
//   it('check if the special item category is present in the basket', function(){
//     shoppingBasket.addProduct(product1);
//     assert.equal(voucher1.checkForSpecialItem(shoppingBasket), true);
//   });
// });









