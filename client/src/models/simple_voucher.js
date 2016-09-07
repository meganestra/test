var SimpleVoucher = function(){
};

SimpleVoucher.prototype = {

  applyDiscount: function(shoppingBasket, discount, threshold){
    if(shoppingBasket.value > threshold){
      shoppingBasket.value -= discount;
    }
  }

};

module.exports = SimpleVoucher;