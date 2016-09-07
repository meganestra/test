var _ = require('lodash');

var ComplexVoucher = function(params){
  this.discountValue = params.discountValue;
  this.thresholdValue = params.thresholdValue;
  this.specialItemCategory = params.specialItemCategory;
};

ComplexVoucher.prototype = {

  checkForSpecialItem: function(shoppingBasket){
    return _.includes(shoppingBasket.basket, this.specialItemCategory);
  },

  applyDiscount: function(shoppingBasket){
    if(shoppingBasket.value > this.thresholdValue && checkForSpecialItem()){
      shoppingBasket.value -= this.discountValue;
    }
  }

};

module.exports = ComplexVoucher;