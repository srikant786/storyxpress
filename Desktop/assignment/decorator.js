// The constructor to decorate
function Expenses() {
 
  this.rent = function () {
     return 10000; 
    };
 
}
 
// Decorator 1
function electricity( expense ) {
 
  var v = expense.rent();
  expense.rent = function() {
    return v + 1500;
  };
 
}
 
// Decorator 2
function food( expense ){
 
  var v = expense.rent();
  expense.rent = function(){
    return v + 4000;
  };
 
}
 
// Decorator 3
function fuel( expense ){
 
  var v = expense.rent();
  expense.rent = function(){
     return v + 1500;
  };
 
}
 
var ep = new Expenses();
electricity( ep );
food( ep );
fuel( ep );
 
// Outputs: 1522
console.log( ep.rent() );
 