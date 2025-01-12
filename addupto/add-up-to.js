const div = document.createElement("div");
const addUp = document.createElement("h2");
const addInput = document.createElement("input");
const finderButton = document.createElement("button");

body.insertBefore(div, grid);
div.appendChild(addUp);
div.appendChild(addInput);
div.appendChild(finderButton);

addUp.textContent = "Add up to:";
finderButton.textContent = "Find to cells that add up";
addInput.value = "179";

div.setAttribute("id", "numbers");
div.style.margin = "10px 0";