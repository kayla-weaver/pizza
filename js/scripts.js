//business logic
function Pizza (veggies, meats, size){
    this.veggies = veggies;
    this.meats = meats;
    this.size = size;
    console.log("Pizzaaaa");
}
let Cost = {
    price: "",
    sayPrice: function() {
        console.log("Your price today is" + "" + this.price);
    }
}
let pizzaCost = Object.create(Cost);
pizzaCost.price = 
pizzaCost.sayPrice();



//ui logic
window.addEventListener("load", function(){
    const form = document.getElementById("toppingForm");
    form.addEventListener("submit", displayToppings)
})
    function displayToppings(event){
    event.preventDefault();
    const selectedToppings = []
    const toppingsList = document.getElementsByName("toppings");
    toppingsList.forEach(function(toppings){
    if (toppings.checked){
    selectedToppings.push(toppings.count)
    console.log("toppings.checked", toppings.checked);
    }
  })
  document.getElementById("result").innerText =`You selected these kinds of toppings: ${selectedToppings}`
  }
