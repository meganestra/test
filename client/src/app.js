var StockManager = require('./models/stock_manager');

window.onload = function(){

  console.log("App has started");

  var stockManager = new StockManager();

  var request = new XMLHttpRequest();
  request.open("GET", "http://localhost:3000/products");
  request.onload = function() {
    if(request.status === 200){
      var sampleProducts = JSON.parse(request.responseText);
      for(product of sampleProducts){
        stockManager.addProduct(product);
      };
    };
  };
  request.send(null);
  console.log(stockManager.stock);

};