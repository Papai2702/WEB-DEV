let box = document.getElementById("box");
let b = document.querySelector("button");

b.addEventListener("click", function () {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
   });
