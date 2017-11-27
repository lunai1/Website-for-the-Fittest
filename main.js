function unlock() {
  var name = "";
  var pass = "";
  var b = "What is Life?";
  var x = document.getElementById('password');
  if(x.value.toLowerCase() == b.toLowerCase()) {
    window.location.href = 'welcome.html';
  }else {
    name = prompt('What is your name?');
    pass = prompt('VIP passcode?');
    if(name == 'Atomnus' && pass == "283679908444") {
      window.location.href = 'welcome.html';
    } else if(name == 'Irel Nave' && pass == '283679908444') {
      window.location.href = 'welcome.html';
    } else{
      alert('Na beesh');
    }
  }
}
