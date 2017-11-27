function unlock() {
  var name = "";
  var pass = "";
  var b = "What is Life?";
  var x = document.getElementById('password');
  if(x.value.toLowerCase() == b.toLowerCase()) {
    window.location.href = 'welcome.html';
  }else {
    name = prompt('What is your name?');
    if(name.toLowerCase() == 'Irel Nave'.toLowerCase() || name.toLowerCase() == 'Atomnus'.toLowerCase()) {
      pass = prompt('VIP passcode?');
      if(pass == "283679908444") {
        window.location.href = 'welcome.html';
      } else {
        alert('nope');
      }
    }else{
      alert('Na Beech');
    }
  }
}
