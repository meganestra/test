var _ = require('lodash');

var Transaction = function(params){
  this.shoppingBasket = params.shoppingBasket;
  this.voucher = params.voucher;
};

Transaction.prototype = {

  checkSpecialItemPresent: function(){
    var matchedItems = [];
    _.forEach(this.voucher.specialItems, function(specialItem){
      matchedItems = _.filter(this.shoppingBasket.basket, _.matches(specialItem));
    });
    return (matchedItems.length === this.voucher.specialItems.length);
  },

  checkEligibleDiscountValueReached: function(){
    return (this.shoppingBasket.value >= this.voucher.eligibleValue);
  },

  checkEligibleForDiscountVoucher: function(){
    return (this.checkSpecialItemPresent() && this.checkEligibleDiscountValueReached());
  }

};

module.exports = Transaction;