// Add Function for addition
var add = function(number1, number2)  {
  return  number1+number2;
};

// Add function for subtraction
var subtract  = function(number1, number2) {
  return  number1-number2;
};

//Add Function for Multiplication
var multiply  = function(number1, number2)  {
  return  number1*number2;
};

//Add function for Division
var divide  = function(number1, number2)  {
  return  number1/number2;
}


var number1 = parseInt(prompt("Enter a number:".toUpperCase()));
var number2 = parseInt(prompt("Enter another number:"));

var result = divide(number1, number2);

//Display results in alertbox
alert(result);
