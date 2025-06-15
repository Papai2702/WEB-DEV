// 4 pillars of DOM
/*
 - Selection of Element✔️
 - Changing Html✔️
 - Changing css✔️
 - Event Listener✔️
 */
//-Selection of Element.
let x = document.querySelector("h1");  //selects only fiirst one.
let y = document.querySelectorAll("h1");  //selects all with same tag in form of nodeList.
x.addEventListener("click", function () {
  console.log("Hey Guys");
  x.innerHTML = "Papai"; //to change in  html
  x.style.color = "yellow"; //to change in css by using .style
});

let a=document.getElementById("ID")
a.style.height="20px"
a.style.border="2px solid"
a.addEventListener('click',function(){
  a.style.backgroundColor='black'
  a.style.color='pink'
})

let but=document.querySelector('button');
but.addEventListener('click',function(){
  a.style.backgroundColor= 'green'
  a.style.color = 'aqua'
})

function change(){
  console.log('Function Running......');
  
}

but.addEventListener('click',change)