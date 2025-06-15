let img1 = document.getElementById("i1");
let img2 = document.getElementById("i2");
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let ai1 = img1.getAttribute("src");
  let ai2 = img2.getAttribute("src");
  img1.setAttribute("src", ai2);
  img2.setAttribute("src", ai1);
});
// =================EVENTLISTENER==========================
let bx = document.getElementById("box");
bx.style.color = "white";
bx.addEventListener("click", function () {
  bx.innerHTML = "Single Clicked";
});
bx.addEventListener("dblclick", function () {
  bx.innerHTML = "Double Clicked";
});
bx.addEventListener("mouseenter", function () {
  bx.innerHTML = "Mouse Hover...";
});
bx.addEventListener("mouseleave", function () {
  bx.innerHTML = "Mouse Left...";
  g = 0;
});
let g = 0;
bx.addEventListener("mousemove", function (det) {
  bx.innerHTML = det; //displays details of activities in form of object in console
  // bx.innerHTML=`mouse moving ${g++}`
});
document.addEventListener('keydown',function(){
   bx.innerHTML='Key Down'
})
document.addEventListener('keyup',function(){
   bx.innerHTML='Key Up'
})
document.addEventListener('wheel moving',function(){
   bx.innerHTML='Mouse Wheel'
})
document.addEventListener('scroll',function(){
   bx.innerHTML='Scroll'
})

