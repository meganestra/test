var ShoppingBasket = function(){
  this.value = 0;
  this.basket = [];
};

ShoppingBasket.prototype = {

  numberOfProducts: function(){
    return this.basket.length;
  },

  // checkProductInStock: function(product){
  //   // prevent customer from purchasing out of stock item
  //   // prevent customer from purchasing too many of the same item
  //   return true if (product.quantityInStock > 0)
  // },

  addProduct: function(product){
    this.basket.push(product);
    this.value += product.price;
  },

  removeProduct: function(product){
    var index = this.basket.indexOf(product);
    this.basket.splice(index, 1);
    this.value -= product.price;
  },

  emptyBasket: function(){
    // remove all products from basket
  },

  // calculateBasketValue: function(){

  // },

  applyVoucher: function(){
    // may be handled by voucher class
    // may require many smaller functions such as one to check the type of products in basket
  }

};

module.exports = ShoppingBasket;