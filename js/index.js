const random = require('random-seed');
var KEY = "foobar"
var input = document.getElementById('input');
var output = document.getElementById('output');


function encrypt(s) {
  var generator = random.create(KEY);
  var string = "";
  for (var i = 0; i < s.length; i++) {
    var charCode = s.charCodeAt(i);
    charCode += generator.intBetween(-5, 5);
    charCode += generator.intBetween(-6, 6);
    charCode += generator.intBetween(-7, 7);
    string += String.fromCharCode(charCode);
  }
  return string;
}
function decrypt(s) {
  var generator = random.create(KEY);
  var string = "";
  for (var i = 0; i < s.length; i++) {
    var charCode = s.charCodeAt(i);
    charCode -= generator.intBetween(-5, 5);
    charCode -= generator.intBetween(-6, 6);
    charCode -= generator.intBetween(-7, 7);
    string += String.fromCharCode(charCode);
  }
  return string;
}

input.addEventListener("keyup", function () {
  var i = input.value;
  output.value = encrypt(i);
});

output.addEventListener("keyup", function () {
  var i = output.value;
  input.value = decrypt(i);
});
