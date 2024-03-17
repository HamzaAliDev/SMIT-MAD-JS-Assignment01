// variables
let num1 = 10;
let num2 = 5;

document.getElementById('varName').onclick = function () {
    let name = "let num1 = " + 10 + "<br /> let num2 = " + 15 ;
    document.getElementById('original-statement').innerHTML = name;
    
}
document.getElementById("camelCase").onclick = function () {
    document.getElementById('original-statement').innerHTML = "";
    document.getElementById('original-statement').innerHTML = "<ul><li>camelCase</li><li>getElementById</li><li>firstName</li><li>lastName</li></ul>";
    
}
document.getElementById('add-number').onclick = function () {
    document.getElementById('original-statement').innerHTML = "";
    document.getElementById('output').innerHTML = "";
   
    let result = num1 + num2;
    let show = "let num1 = " + num1 + "<br />let num2 = " + num2 + "<br />let result = num1 + num2";
    document.getElementById('original-statement').innerHTML = show;
    document.getElementById('output').innerHTML = "Result is = " + result;
}
document.getElementById('sub-number').onclick = function () {
    document.getElementById('original-statement').innerHTML = "";
    document.getElementById('output').innerHTML = "";
   
    let result = num1 - num2;
    let show = "let num1 = " + num1 + "<br />let num2 = " + num2 + "<br />let result = num1 - num2";
    document.getElementById('original-statement').innerHTML = show;
    document.getElementById('output').innerHTML = "Result is = " + result;
}
document.getElementById('mul-number').onclick = function () {
    document.getElementById('original-statement').innerHTML = "";
    document.getElementById('output').innerHTML = "";
   
    let result = num1 * num2;
    let show = "let num1 = " + num1 + "<br />let num2 = " + num2 + "<br />let result = num1 * num2";
    document.getElementById('original-statement').innerHTML = show;
    document.getElementById('output').innerHTML = "Result is = " + result;
}
document.getElementById('div-number').onclick = function () {
    document.getElementById('original-statement').innerHTML = "";
    document.getElementById('output').innerHTML = "";
   
    let result = num1 / num2;
    let show = "let num1 = " + num1 + "<br />let num2 = " + num2 + "<br />let result = num1 / num2";
    document.getElementById('original-statement').innerHTML = show;
    document.getElementById('output').innerHTML = "Result is = " + result;
}
document.getElementById('calculations').onclick = function () {
    document.getElementById('original-statement').innerHTML = "";
    document.getElementById('output').innerHTML = "";
   
    let result = 36 /6*3+2**4-(3+5);
    let show = "let num = 36 / 6 * 3 + 2 ** 4 - (3 + 5)";
    document.getElementById('original-statement').innerHTML = show;
    document.getElementById('output').innerHTML = "Result is = " + result;
}

document.getElementById('clear-original').onclick = function () {
    document.getElementById('original-statement').innerHTML = "";

}

document.getElementById('clear-output').onclick = function () {
    document.getElementById('output').innerHTML = "";
}
