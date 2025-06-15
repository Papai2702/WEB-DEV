let button = document.querySelector("button");
let check = 0;
let dp=document.getElementById('dp')
button.addEventListener("click", function () {
  if (check == 0) {
    document.querySelector("p").innerHTML = "Friends";
    document.querySelector("p").style.color = "green";
    button.innerHTML = "Remove Friend";
    button.style.border = "1px solid red";
    dp.style.border='2px solid green'
    // button.style.backgroundColor='rgb(3, 172, 229)'
    check = 1;
} else {
    // button.style.backgroundColor='aqua'
    document.querySelector("p").innerHTML = "Stranger !";
    document.querySelector("p").style.color = "red";
    dp.style.border='2px solid red'
    button.style.border = "1px solid green";
    
    button.innerHTML = "Add Friend";
    check = 0;
  }
});
