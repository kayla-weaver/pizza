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
    // all the logic to determine price
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
    this.price = cost;// whatever price has been calculated.
};



//ui logic
// function displayToppings(event) {
//     const selectedToppings = [];
//     const toppingsList = document.getElementsByName("toppings");
//     toppingsList.forEach(function (toppings) {
//         if (toppings.checked) {
//             selectedToppings.push(toppings.count);
//             console.log("toppings.checked", toppings.checked);
//         }
//     });
//     document.getElementById(
//         "result"
//     ).innerText = `You selected these kinds of toppings: ${selectedToppings}`;
// }

// function veggiesTopping() {
//     const veggieList = ["artichoke", "bellpepper", "broccoli"];
//     var checkboxes = document.querySelectorAll(".veggieCheckbox");
//     var count = 0;
//     console.log("veggiesTopping");
//     document.getElementById("toppingForm").onclick = function () {
//         console.log("Something like that");
//         for (var i = 0; i < checkboxes.length; i++) {
//             checkboxes[i].addEventListener("click", function () {
//                 console.log("Adding event listener");
//                 if (this.checked == true) {
//                     console.log("chegged");
//                     count++;
//                 } else {
//                     console.log("Not chegged");
//                     count--;
//                 }
//                 document.getElementById("veggieCheckbox").innerHTML = count;
//             });
//         }
//     };
// }

function handleVeggieSubmission(event) {
    event.preventDefault();
    // grab data from the forms
    // const veggiesTotalCost = veggiesTopping();

    const pizzaSizes = document.getElementsByName("sizes")
    console.log(pizzaSizes);
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
    console.log(newPizza.price)
    // display cost to user 
}

window.addEventListener("load", function () {
    // get form, add event listener for when form submits
    const form = document.getElementById("toppingForm");
    form.addEventListener("submit", handleVeggieSubmission);
});
