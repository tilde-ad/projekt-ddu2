const homebutton = document.querySelector(".home-button");
const a = document.createElement("a");
homebutton.appendChild(a);
a.setAttribute("class", "home-links");
a.setAttribute("href", "index.html");
a.textContent = "Home"
