var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

var result = function(number1, number2, operator) {
if (operator === "add") {
  return add(number1, number2);

} else if (operator === "subtract") {
  return subtract(number1, number2);

} else if (operator === "multiply") {
  return multiply(number1, number2);

} else if (operator === "divide") {
  return divide(number1, number2);

}
};

$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();

    $("#output").text(result(number1, number2, operator));
  });
});
