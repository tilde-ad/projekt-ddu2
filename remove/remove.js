const divRemove = document.createElement("div");
const newRandomNumber = document.createElement("button");
const removeButton = document.createElement("button");
const numberBox = document.createElement("div");
const removeBox = document.createElement("div");
let randomNum
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
    randomNum = randomNumber();
    numberBox.textContent = randomNum;
    highlightMatchingCells(randomNum);
    removeBox.textContent = " - ";
});

function highlightMatchingCells(number) {
    let cells = document.querySelectorAll("#grid .cell");
    cells.forEach(cell => {
        if (cell.textContent === "X") {
            cell.style.backgroundColor = "darkblue";
        }
        else if (parseInt(cell.textContent) === number) {
            cell.style.backgroundColor = "blue";
        } else {
            cell.style.backgroundColor = "";

        }
    });
}


removeButton.addEventListener("click", function () {
    let numberToRemove = parseInt(numberBox.textContent);
    let count = replaceMatchingCells(numberToRemove);
    removeBox.textContent = `${randomNum} removed: ${count} times`;
    if (removeBox.textContent === `${randomNum} removed: 0 times`) {
        removeBox.textContent = "Nothing to remove";
    }
});

function replaceMatchingCells(number) {
    let cells = document.querySelectorAll("#grid .cell");
    let count = 0;
    cells.forEach(cell => {
        if (parseInt(cell.textContent) === number) {
            cell.textContent = "X";
            cell.style.backgroundColor = "darkblue";
            count++;
        }
    });
    return count;
}