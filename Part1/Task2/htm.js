calculator(
  prompt("Enter num1 : "),
  prompt("Enter operation : "),
  prompt("Enter num2 : ")
);

function calculator(num1, op, num2) {
  num1 = checkInInputNumber(num1);
  num2 = checkInInputNumber(num2);
  if (num1 != false && num2 != false) {
    res = checkOperation(num1, num2, op);
    if (res != false) document.write(`Result = ${res}`);
    else document.write("incorrect operation");
  } else document.write("incorrect numbers");
}

function checkOperation(num1, num2, op) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    default:
      return false;
  }
}

function checkNull(_str) {
  return _str != null;
}

function checkInInputNumber(_str) {
  if (checkNull(_str)) {
    let str = _str.trim();
    if (Number(str)) return Number(str);
    else return false;
  }
  return false;
}
