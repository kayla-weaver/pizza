//business logic
function Pizza (topping, size){
    this.topping = topping;
    this.size = size;
}



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
      selectedToppings.push(toppings.value)
    }
  })
  document.getElementById("result").innerText =`You selected these kinds of toppings: ${selectedToppings}`
}