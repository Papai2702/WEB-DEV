let main = document.querySelector("main");
let crsr = document.getElementById("cursor");
main.addEventListener("mousemove", function (dets) {
  document.querySelector('h1').innerHTML='Premanshu'
  crsr.style.left =dets.x + "px";
  crsr.style.top = dets.y + "px";
});
