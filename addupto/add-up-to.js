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

finderButton.addEventListener("click", function () {
    let target = parseInt(addInput.value);
    let cells = document.querySelectorAll(".cell");
    let found = false;

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
    }

    for (let i = 0; i < cells.length; i++) {
        for (let j = i + 1; j < cells.length; j++) {
            let num1 = parseInt(cells[i].textContent);
            let num2 = parseInt(cells[j].textContent);
            if (num1 + num2 === target) {
                cells[i].style.backgroundColor = "darkblue";
                cells[j].style.backgroundColor = "darkblue";
                found = true;
                break;
            }
        }
        if (found) break;
    }
});
