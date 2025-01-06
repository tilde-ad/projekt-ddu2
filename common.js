const body = document.querySelector("body");
const homebutton = document.querySelector(".home-button");
const a = document.createElement("a");
const numbers = document.createElement("div");
const input = document.createElement("input");
const h2 = document.createElement("h2");
const createButton = document.createElement("button");
const script = document.querySelector("script");

let inputText = input.value;

homebutton.appendChild(a);
a.setAttribute("class", "home-links");
a.setAttribute("href", "../index.html");
a.textContent = "Home"
body.insertBefore(numbers, script);
numbers.appendChild(h2);
numbers.appendChild(input);
h2.textContent = "How many numbers in the grid?";
numbers.append(createButton);
createButton.textContent = "Create";
numbers.setAttribute("id", "numbers");


console.log(inputText);


function randomNumber() {
    Number = Math.ceil(100 * Math.random());
    return Number;
}

console.log(randomNumber());


