var add = function(number1, number2) {
  return number1 + number2;
};

var substract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(divide(number1, number2));


var Weight = parseInt(prompt("Enter your Weight in Pounds:"));
var Height = parseFloat(prompt("Enter your Height in Inches: (1 foot = 12 inches)"));

var bmi = function (Weight, Height) {
  return (Weight / (Height * Height)) * 703;
};

alert(bmi(Weight, Height));
