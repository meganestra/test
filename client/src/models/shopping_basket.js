var _ = require('lodash');

var ShoppingBasket = function(){
  this.basket = [];
  this.value = 0;
};

ShoppingBasket.prototype = {

  numberOfProducts: function(){
    return this.basket.length;
  },

  addProduct: function(product){
    // TO DO: add a guard against out of stock items
    // TO DO: check if in sale and if true, use sale price
    this.basket.push(product);
    this.value += product.price;
  },

  removeProduct: function(product){
    var index = this.basket.indexOf(product);
    this.basket.splice(index, 1);
    this.value -= product.price;
  },

  emptyBasket: function(){
    this.basket = [];
    this.value = 0;
  }

};

module.exports = ShoppingBasket;
