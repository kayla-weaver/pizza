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

function veggiesTopping(){
    var checkboxes= document.querySelectorAll(".veggieCheckbox");
    var count = 0;
console.log("veggiesTopping");
document.getElementById("toppingForm").onclick = function(){
    console.log("Something like that");
    for (var i = 0; i < checkboxes.length; i++){
        checkboxes[i].addEventListener("click",function()  {
            console.log("Adding event listener");
            if (this.checked == true) {
                console.log("chegged");
                count++;
            } else {
                console.log("Not chegged");
                count--;
            }
            document.getElementById("veggieCheckbox").innerHTML= count;
        })
    }
}
}



//ui logic
window.addEventListener("load", function(){
    const form = document.getElementById("toppingForm");
    console.log(form);
    form.addEventListener("submit", veggiesTopping)
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
