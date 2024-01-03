var nums = [];
var num_of_nums = checkInInputNumber(prompt("Enter num of Numbers : "));

for (let i = 0; i < num_of_nums; i++) {
  var num = checkInInputNumber(prompt(`Enter num${i + 1} : `));
  if (num) nums.push(num);
  else continue;
}
var sum = sumArray(nums);
var avg = avgArray(sum, nums.length);

document.write(`Sum Of Array = ${sum}  </br>`);
document.write(`Average Of Array = ${avg}  </br>`);

function sumArray(nums) {
  var sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

function avgArray(sum, len) {
  return sum / len;
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
