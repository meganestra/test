var Product = function(params){
  this.productName = params.productName;
  this.category = params.category;
  this.price = params.price;
  this.salePrice = params.salePrice;
};

module.exports = Product;