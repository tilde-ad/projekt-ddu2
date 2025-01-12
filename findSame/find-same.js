const div = document.createElement("div");
const pickNumber = document.createElement("h2");
const resetButton = document.createElement("button");

body.insertBefore(div, grid);
div.appendChild(pickNumber);
div.appendChild(resetButton);
div.setAttribute("id", "numbers");
div.style.margin = "10px 0";
pickNumber.textContent = "Click on a number to find copies";
resetButton.textContent = "Reset";

