var Product = function(params){
  this.productName = params.productName;
  this.department = params.department;
  this.category = params.category;
  this.price = params.price;
  this.inSale = params.inSale;
  this.quantityInStock = params.quantityInStock;
};

module.exports = Product;