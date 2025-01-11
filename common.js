function randomNumber() {
    Number = Math.ceil(99 * Math.random());
    return Number;
}

const body = document.querySelector("body");
const homebutton = document.querySelector(".home-button");
const a = document.createElement("a");
const numbers = document.createElement("div");
const input = document.createElement("input");
const h2 = document.createElement("h2");
const createButton = document.createElement("button");
const script = document.querySelector("script");
let array = [];

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

input.value = "95";
function startGrid() {
    let grid = document.createElement("div");
    grid.setAttribute("id", "grid"); body.insertBefore(grid, script);
    for (let i = 0; i < 95; i++) {
        let cell = document.createElement("div");
        let randomNumbers = randomNumber();
        array.push(randomNumbers);
        grid.appendChild(cell);
        cell.setAttribute("class", "cell");
        cell.textContent = randomNumbers;
    }
}
startGrid();



createButton.addEventListener("click", function () {
    const inputText = input.value;
    let grid = document.getElementById("grid");
    array = [];

    if (grid) {
        grid.innerHTML = "";
    } else {
        let grid = document.createElement("div");
        body.insertBefore(grid, script);
        grid.setAttribute("id", "grid");
    }

    for (let i = 0; i < input.value; i++) {
        let cell = document.createElement("div");
        let randomNumbers = randomNumber();
        array.push(randomNumbers);
        grid.appendChild(cell);
        cell.setAttribute("class", "cell");
        cell.textContent = randomNumbers;

    }

})






