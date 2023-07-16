describe: Pizza()
test: It should return Pizza  object with two properties for topping and size
code: function Pizza(topping(s), size) {
this.topping  topping;
this.size = size;
}
const  veggie =  new  Pizza (["veggie"], "medium");
expected output: pizza {toppings: [veggie],size: "medium"}

describe cost()
test: it should take the total cost and add it to a string saying "your total is"
let Cost = {
    price: "",
    sayPrice: function() {
        console.log("Your price today is" + "" + this.price);
    }
}
expected output: "your price today is xx"


describe: pizzaCost()
test: it should take the value of all toppings and size and add them together for a meal cost total
code: let pizzaCost = Object.create(Cost);
pizzaCost.price = (veggie tally * .25) + (meat tally * 1) + price of selected pizza size
pizzaCost.sayPrice();
expected output: Cost of pizza total


Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.


