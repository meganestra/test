var _ = require('lodash');

var Transaction = function(){

};

Transaction.prototype = {

  checkSpecialItemPresent: function(shoppingBasket, voucher){
    var matchedItems = [];
    _.forEach(voucher.specialItems, function(specialItem){
      matchedItems = _.filter(shoppingBasket.basket, _.matches(specialItem));
    });
    return (matchedItems.length === voucher.specialItems.length);
  },

  checkEligibleDiscountValueReached: function(shoppingBasket, voucher){
    return (shoppingBasket.value >= voucher.eligibleValue);
  }


  // checkForSpecialItemPurchase: function(shoppingBasket, specialItem){
  //   var inBasket = false;
  //   _.forEach(shoppingBasket.basket, function(product){
  //     if(product.category === specialItem){
  //       inBasket = true;
  //     }
  //   })
  //   return inBasket;
  // },

  // checkSimpleDiscountEligibility: function(shoppingBasket, discountVoucher){
  //   if(shoppingBasket.value >= discountVoucher.eligibleValue){
  //     return true
  //   };
  // },

  // checkAdvancedDiscountEligibility: function(shoppingBasket, discountVoucher){
  //   if(shoppingBasket.value >= discountVoucher.eligibleValue && checkForSpecialItemPurchase(shoppingBasket, discountVoucher.specialItem)){
  //     return true
  //   };
  // }

  // applyEligibleDiscount: function(shoppingBasket, discountVoucher){
  //   if(this.checkDiscountEligibility()){
  //     return shoppingBasket.value - discountVoucher.discountValue;
  //   }
  // }

};

module.exports = Transaction;