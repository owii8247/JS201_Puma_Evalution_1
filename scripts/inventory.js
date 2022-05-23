
let takeData = JSON.parse(localStorage.getItem("products"))  //stored products of array in local storage as "products"
 
takeData.map(function(el,index){    // extracting products with map or we can use forEach also here

    let div = document.createElement("div")    //creating div to append products into div

    let type = document.createElement("h3")
    type.innerText = `Type : ${el.type}`;

    let desc = document.createElement("h4")
    desc.innerText = `Description : ${el.desc}`;

    let price = document.createElement("h3")
    price.innerText = `Price : Rs ${el.price}`;

    let image = document.createElement("img")
    image.src = el.image;

    let remove = document.createElement("button")   //creating remove button as per question demands
    remove.innerText = "Remove Product";
    remove.setAttribute("id","remove_product")
    remove.addEventListener("click", function(el,index){
        removeProduct(el,index);
    })

    div.append(image,type,desc,price,remove)  // appending data into div
    document.getElementById("all_products").append(div) //as per question says appending div into div with id as "all_products"

})

function removeProduct(el,index){    //created remove function to remove product from DOM as well as from local storage
    takeData.splice(index,1)
    localStorage.setItem("products",JSON.stringify(takeData))
    window.location.reload()
}