// // var assert = require('chai').assert;
// var assert = require('assert');
// var ShoppingBasket = require('../shopping_basket');
// var Product = require('../product');
// var SimpleVoucher = require('../simple_voucher');

// beforeEach(function(){
//   shoppingBasket = new ShoppingBasket();
//   product1 = new Product({
//     "productName": "Almond Toe Court Shoes, Patent Black",
//     "category": "Women’s Footwear",
//     "price": 99.00,
//     "quantityInStock": 5
//   });
//   product2 = new Product({
//     "productName": "Flip Flops, Blue",
//     "category": "Men’s Footwear",
//     "price": 19.00,
//     "quantityInStock": 0
//   });
//   product3 = new Product({
//     "productName": "Fine Stripe Short Sleeve Shirt, Grey",
//     "category": "Men’s Casualwear",
//     "price": 49.99,
//     "quantityInStock": 9
//   });
//   voucher1 = new SimpleVoucher();
// });

// describe('SimpleVoucher', function(){

//   it('should apply £5.00 discount to basket value of over £0.00', function(){
//     shoppingBasket.addProduct(product1);
//     voucher1.applyDiscount(shoppingBasket, 5.00, 0.00);
//     assert.equal(94.00, shoppingBasket.value);
//   });

//   it('should apply £10.00 discount to basket value of over £50.00', function(){
//     shoppingBasket.addProduct(product1);
//     voucher1.applyDiscount(shoppingBasket, 10.00, 50.00);
//     assert.equal(89.00, shoppingBasket.value);
//   });
// });