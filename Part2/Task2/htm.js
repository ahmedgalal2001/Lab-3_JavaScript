var contacts = [];

do {
  var flag = true;
  var op = checkString(prompt("Enter operation : "));
  if (op) {
    switch (op.toLowerCase()) {
      case "add":
        addContact();
        break;
      case "search":
        searchContact();
        break;
      case "exit":
        flag = false;
        break;
    }
  }
} while (flag);

function addContact() {
  var name = checkString(prompt("Enter his name : "));
  var flag = true;
  for (const key in contacts) {
    // let res = contacts[key].search(`${search}/ig`);
    if (contacts[key].name.search(name) != -1) {
      alert(`the name = ${name} is found`);
      flag = false;
      break;
    }
  }
  if (flag) {
    var phone = checkString(prompt("Enter his phone : "));
    if (name && phone) {
      let contact = {
        name: name,
        phone: phone,
      };
      contacts.push(contact);
      alert("Add it");
    }
  } else alert("WARRING: Not Add it");
}

function searchContact() {
  alert("Note: I will search by name");
  var flag = true;
  var search = checkString(prompt("Enter search : "));
  if (search) {
    for (const key in contacts) {
      // let res = contacts[key].search(`${search}/ig`);
      if (contacts[key].name.search(search) != -1) {
        alert(`Name : ${contacts[key].name}\nPhone : ${contacts[key].phone}`);
        flag = false;
        break;
      }
    }
    if (flag) alert("WARRING : Not Found");
  } else alert("WARRING: Not Vaild");
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
