let arr = [
  {
    dp: "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1600574691453-499962cc0611?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1661387914397-19042d7c67e2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1500757810556-5d600d9b737d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1661311934038-9d9120121808?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1548454782-15b189d129ab?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHlvdW5nJTIwbWFufGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHlvdW5nJTIwbWFufGVufDB8fDB8fHww",
    story:
      "https://plus.unsplash.com/premium_photo-1683121562348-415503cea1fb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHlvdW5nJTIwbWFufGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1536548665027-b96d34a005ae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHlvdW5nJTIwbWFufGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1624797432677-6f803a98acb3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHlvdW5nJTIwbWFufGVufDB8fDB8fHww",
  },
];
let clutter = "";
arr.forEach(function (e, i) {
  // console.log(e.dp);
  clutter += `<div id="s1">
                <img id='${i}' src="${e.dp}" alt="">
            </div>`;
});
let prg=document.getElementById('prg')
let width=0;
let story = document.getElementById("stories");
story.innerHTML = clutter;
story.style.gap = "12px";
story.addEventListener("click", function (d) {
  //   console.log(arr[d.target.id].story);
  let st = arr[d.target.id].story;
  let s = document.getElementById("full-screen");
  s.style.display = "block";
  s.style.backgroundImage = `url(${st})`;
  let loader=setInterval(() => {
    if(width<=100)
    {
        prg.style.width=`${width++}%`
    }
    else{
        clearInterval(loader)
        width=0;
    }
  }, 30);
  setTimeout(() => {
      s.style.display = "none";
      
  }, 3000);
});
