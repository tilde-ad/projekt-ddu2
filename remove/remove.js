const divRemove = document.createElement("div");
const newRandomNumber = document.createElement("button");
const removeButton = document.createElement("button");
const numberBox = document.createElement("div");
const removeBox = document.createElement("div");

body.appendChild(divRemove);
body.insertBefore(divRemove, grid);
divRemove.appendChild(newRandomNumber);
divRemove.appendChild(numberBox);
divRemove.appendChild(removeButton);
divRemove.appendChild(removeBox);

divRemove.setAttribute("id", "divRemove");
removeBox.textContent = " - ";
numberBox.textContent = " - ";

numberBox.setAttribute("class", "boxes");
removeBox.setAttribute("class", "boxes");

newRandomNumber.textContent = "New random number";
removeButton.textContent = "Remove";

newRandomNumber.addEventListener("click", function () {
    numberBox.textContent = randomNumber();
})