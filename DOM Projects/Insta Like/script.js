let bx = document.getElementById("box");
let like = document.getElementById("like");
let i = 0;
bx.addEventListener("dblclick", function () {
  // console.log('Liked');

  let img = document.createElement("img");
  img.setAttribute("src", "like.png");
  img.style.height = "50px";
  img.style.width = "50px";
  img.style.position = "absolute";
  img.style.top = `${50}%`;
  img.style.left = `${50}%`;
  img.style.transform = `translate(${-50}%,${-50}%)`;
  img.style.opacity = `.8`;
  bx.appendChild(img);
  i = 1;
  like.innerHTML = `${i}`;
  like.style.fontWeight = "900";
  like.style.color = "red";
  setTimeout(() => {
    img.style.opacity = "0";
  }, 500);
});
like.style.cursor = "pointer";
like.addEventListener("click", function () {
  if (i == 0) {
    let img = document.createElement("img");
    img.setAttribute("src", "like.png");
    img.style.height = "50px";
    img.style.width = "50px";
    img.style.position = "absolute";
    img.style.top = `${50}%`;
    img.style.left = `${50}%`;
    img.style.transform = `translate(${-50}%,${-50}%)`;
    img.style.opacity = `.8`;

    bx.appendChild(img);
    i = 1;
    like.innerHTML = `${i}`;
    like.style.fontWeight = "900";
    like.style.color = "red";

    setTimeout(() => {
      img.style.opacity = "0";
    }, 500);
  } else if (i == 1) {
    i = 0;
    like.innerHTML = `${i}`;
    like.style.fontWeight = "100";
    like.style.color = "black";
    // like.style.display='None'
  }
});
