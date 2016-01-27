window.onload = button;
function button() {
    document.getElementById("encrypt").onclick = encrypt;
    document.getElementById("decrypt").onclick =  decrypt;
}

var input = "";

function encrypt() {
    input = document.getElementById("input").value;
    console.log(input);
    
    input = reverse(input);
    console.log(input);
    
    var  output = "";
    output.value = "";
    for (i=0; i < input.length; i++) {
     	output.value +=input[i].charCodeAt(0).toString(2);
    }
    
    input = output.value;
    
    console.log(input);
    
}

function reverse() {
  var o = '';
  for (var i = input.length - 1; i >= 0; i--)
    o += input[i];
  return o;
}
