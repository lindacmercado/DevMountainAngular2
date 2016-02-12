angular.module('app')
  .service("service", function (){

    this.data = "data";

    this.check = function() {
      return data;
    }
    
    this.set = function(x) {
      data = x;
    }
)};
