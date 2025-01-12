const sumContainerTop = document.createElement("div");
const sumContainerBottom = document.createElement("div");
const h2All = document.createElement("h2");
const sumAllBox = document.createElement("div");
const h2Marked = document.createElement("h2");
const sumMarkedBox = document.createElement("div");
const resetButton = document.createElement("button");

body.insertBefore(sumContainerTop, grid);
body.insertBefore(sumContainerBottom, grid);
sumContainerTop.appendChild(h2All);
sumContainerTop.appendChild(sumAllBox);
sumContainerBottom.appendChild(h2Marked);
sumContainerBottom.appendChild(sumMarkedBox);
sumContainerBottom.appendChild(resetButton);

h2All.textContent = "Sum of all numbers";
h2Marked.textContent = "Sum of marked";
resetButton.textContent = "Reset";
sumAllBox.textContent = " - ";
sumMarkedBox.textContent = " - ";

sumContainerTop.setAttribute("class", "sum-container");
sumContainerBottom.setAttribute("class", "sum-container");
sumAllBox.setAttribute("class", "boxes");
sumMarkedBox.setAttribute("class", "boxes");

