function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  function modulus(a, b) {
    return a % b;
  }


function calculate() {
    var a = parseInt(prompt("Enter first number"));
    var b = parseInt(prompt("Enter second number"));
    var operator = prompt("choose your operator: +, -, *, /, %")
    var result;
    switch (operator) {
      case "+":
        result = add(a, b);
        break;
      case "-":
        result = subtract(a, b);
        break;
      case "*":
        result = multiply(a, b);
        break;
      case "/":
        result = divide(a, b);
        break;
      case "+":
        result = add(a, b);
        break;
    
      default:
        break;
    }
    alert(result);
  }
  calculate()