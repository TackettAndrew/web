
//ENCRYPT

var inputTxt = "";
function encrypt() {
    inputTxt = document.getElementById("input").value;
    
    console.log(inputTxt);
    inputTxt = string2Binary(inputTxt);
    console.log(inputTxt);
    inputTxt = inputTxt.replace(new RegExp("0", "g"), "<");
    console.log(inputTxt);
    inputTxt = inputTxt.replace(new RegExp("1", "g"), ">");
    console.log(inputTxt);
    inputTxt = inputTxt.replace(new RegExp(" ", "g"), dashes);
    console.log(inputTxt);
    inputTxt = inputTxt.replace(new RegExp("-", "g"), spaces);
    console.log(inputTxt);
    
    inputTxt = inputTxt.replace(new RegExp("<", "g"), "a");
    console.log(inputTxt);
    inputTxt = inputTxt.replace(new RegExp(">", "g"), "b");
    console.log(inputTxt);
    
    document.getElementById("output").value = inputTxt;
}

function string2Binary(input) {
    
    var output = "";
    var beginend = " ";
    for (i = 0; i < input.length; i++) {
        var tempOutput = input[i].charCodeAt(0).toString(2);
        if(tempOutput.length <= 6){
            tempOutput = "0" + tempOutput;
        }
        output += tempOutput;
    }
    
    output = output.replace(new RegExp("", "g"), " ").replace(new RegExp("^."), "");
    
    return beginend + output + beginend;
}

function spaces() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 1; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function dashes(){
    var text = "";
    var possible = "-";
    var randomnumber = Math.floor(Math.random()*20);
    for( var i=0; i < randomnumber; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

var bin0 = "";
function bin0Char() {
    var bin0 = inputTxt.charAt(0);
    console.log(bin0);
    return bin0;
}

var bin1 = "";
function bin1Char() {
    var bin1 = inputTxt.charAt(inputTxt.length - 1);
    console.log(bin1);
    return bin1;
}

window.onload = blah;
function blah() {
    document.getElementById("button").onclick = encrypt;
    document.getElementById("buttonD").onclick = decrypt;
}


//DECRYPT

function decrypt() {
    
   var output = document.getElementById("output").value;
    
    //NEW MEHTOD
    var outputD = output.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZcdefghijklmnopqrstuvwxyz0123456789-]/g, "");
    var outputDD = outputD.replace(/a/g, "0");
    var outputDDD = outputDD.replace(/b/g, "1")
    console.log(outputDDD);
    document.getElementById("outputD").value = toascii(outputDDD);
}
function toascii(bin){
    
    return bin.replace(/\s*[01]{7}\s*/g, function(bin) {
      return String.fromCharCode(parseInt(bin, 2))
    });
    
}
