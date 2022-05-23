//store the products array in localstorage as "products"


function myData(t, d, p, i) {    // here is the constructor function
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}


let myArray = JSON.parse(localStorage.getItem("products")) || []; //creating myArray to push products here using new and getting into local storage


// document.getElementById("products").addEventListener("submit", myFunction);


function myFunction(event) {  //form function to accept the values 
    event.preventDefault()

    // let type = document.getElementById("type").value;

    // let desc = document.getElementById("desc").value;

    // let price = document.getElementById("price").value;

    // let image = document.getElementById("image").value;
    
    let form = document.getElementById("products")  // using this to shorten the repeatation of document.getElementById 
    window.location.reload()

    let type = form.type.value;             //calling from form for the value
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let p1 = new myData(type, desc, price, image)
    
    console.log("p1:", p1)

    myArray.push(p1)
    console.log(myArray)

    localStorage.setItem("products", JSON.stringify(myArray))    // setting products into localstorage
}
