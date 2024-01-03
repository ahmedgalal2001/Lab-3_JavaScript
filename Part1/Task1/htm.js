var username = prompt("Enter your username : ");
var passwd = prompt("Enter your password : ");
document.write(checkLogin(username, passwd));

function checkLogin(username, passwd) {
  username = checkString(username);
  passwd = checkString(passwd);
  var msg = "";
  var flag = true;
  if (username != false && passwd != false) {
    if (username != "admin") {
      msg = `${msg} Incorrect Username`;
      flag = false;
    }
    if (passwd != "421$$") {
      msg = `${msg} Incorrect Password`;
      flag = false;
    }
    if (flag) msg = `${msg} Welcome login success`;
    return msg;
  } else return "Invaild Username and Password";
}

function checkNull(_str) {
  return _str != null;
}

function checkString(_str) {
  if (checkNull(_str)) {
    let str = _str.trim();
    if (str == "") return false;
    else return str;
  }
  return false;
}
