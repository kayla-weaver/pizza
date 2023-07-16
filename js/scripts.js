//business logic
function Pizza(veggies, meats, size) {
    this.veggies = veggies;
    this.meats = meats;
    this.size = size;
    console.log("Pizzaaaa");
}
let Cost = {
    price: "",
    sayPrice: function () {
        console.log("Your price today is" + "" + this.price);
    },
};

function veggiesTopping() {
    const veggieList = ["artichoke", "bellpepper", "broccoli"];
    var checkboxes = document.querySelectorAll(".veggieCheckbox");
    var count = 0;
    console.log("veggiesTopping");
    document.getElementById("toppingForm").onclick = function () {
        console.log("Something like that");
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].addEventListener("click", function () {
                console.log("Adding event listener");
                if (this.checked == true) {
                    console.log("chegged");
                    count++;
                } else {
                    console.log("Not chegged");
                    count--;
                }
                document.getElementById("veggieCheckbox").innerHTML = count;
            });
        }
    };
}

//ui logic
function displayToppings(event) {
    const selectedToppings = [];
    const toppingsList = document.getElementsByName("toppings");
    toppingsList.forEach(function (toppings) {
        if (toppings.checked) {
            selectedToppings.push(toppings.count);
            console.log("toppings.checked", toppings.checked);
        }
    });
    document.getElementById(
        "result"
    ).innerText = `You selected these kinds of toppings: ${selectedToppings}`;
}

function handleVeggieSubmission(event) {
    event.preventDefault();
    console.log("prevent default");
    const veggiesTotalCost = veggiesTopping();
}

window.addEventListener("load", function () {
    let pizzaCost = Object.create(Cost);
    pizzaCost.price = pizzaCost.sayPrice();
    const form = document.getElementById("toppingForm");
    console.log(form);
    form.addEventListener("submit", handleVeggieSubmission);
});
