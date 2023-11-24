// document.getElementById('data').innerHTML="Dynamic Value";
function fun() {
    // alert("Hello World");
    var a=document.getElementById('value1').value;
    var b=document.getElementById('value2').value;
    var c=document.getElementById('col').value;
    // var d=document.getElementById('inp3').value;
    a=parseInt(a)
    b=parseInt(b)
    console.log(a+b);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    // alert(a+b);
    document.getElementById('result').innerHTML=a+b;
    document.getElementById("mydiv").style.backgroundColor=c;
}
// variable demo 
// const x=10;
// console.log(x);
// var x;
// x=20;
// console.log(x);