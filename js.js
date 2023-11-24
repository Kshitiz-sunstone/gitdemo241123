console.log(this);
function validation(t) {
    console.log(t);
    let data = document.getElementById('inp').value
    if (data == "") {
        document.getElementById('err').innerHTML = "Enter Value"
    }
}