//business logic
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
    this.price = 0;
    console.log("Pizzaaaa");
}
let Cost = {
    price: "",
    sayPrice: function () {
        console.log("Your price today is" + "" + this.price);
    },
};

Pizza.prototype.calculateCost = function(){
    let cost = 0;
    if (this.size === "tiny"){
        cost += 3
    } else if (this.size === "small"){
        cost += 8
    } else if (this.size ===  "medium"){
        cost += 9
    } else if (this.size === "large"){
        cost += 10
    } else if (this.size === "xlarge")
        cost += 25

    cost += this.toppings.length;
    this.price = cost;
};



//ui logic

function handleVeggieSubmission(event) {
    document.querySelector("div#price").removeAttribute("class");
    event.preventDefault();
    const pizzaSizes = document.getElementsByName("sizes")
    let selectedSize = undefined;
    pizzaSizes.forEach(function(size){
        if (size.checked === true){
            selectedSize = size.value; 
        }
    })
    
    const toppings = document.getElementsByName("toppings")
    let selectedToppings = [];
    toppings.forEach(function(topping){
        if (topping.checked === true){
            selectedToppings.push(topping.value)
        }
    })

    let newPizza = new Pizza(selectedToppings, selectedSize)
    newPizza.calculateCost()
}

window.addEventListener("load", function () {
    const form = document.getElementById("toppingForm");
    form.addEventListener("submit", handleVeggieSubmission);
});
