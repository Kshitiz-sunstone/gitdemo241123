let products = [
    {
        id: 1,
        name: "T-Shirt",
        price: 100
    },
    {
        id: 2,
        name: "jeans",
        price: 500
    },
    {
        id: 3,
        name: "Shoe",
        price: 1500
    },
    {
        id: 4,
        name: "Watch",
        price: 1200
    },
]
let cart=[]
function add(x) {
    // console.log(x.id);
    products.forEach(element => {
        if(element.id==x.id)
        {
            cart.push(element)
        }
    });
    console.log(cart);
}
let result = ''
function display() {
    products.forEach(element => {
        result += "<tr><td>" + element.id + "</td><td>" + element.name + "</td><td>" + element.price + "</td><td><button onclick='add(this)' id="+element.id+">Add</button></td></tr>"
    });
    document.getElementById('prod').innerHTML=result
}
display()
console.log('hello')