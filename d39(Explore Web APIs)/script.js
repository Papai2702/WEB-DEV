let per = document.getElementById("percent");
let btn = document.getElementById("btn");
let fill = document.getElementById("fill");
let i = 0,
  t;
  t = Math.ceil(Math.random() * 50);
  console.log(t);
  
btn.addEventListener("click", function () {
  btn.innerHTML = "Downloading";
  // console.log('hello');
  let prg = setInterval(() => {
    if (i <= 100) {
      per.innerHTML = `${i++}%`;
      fill.style.width = `${i}%`;
    } else {
      clearInterval(prg);
      btn.innerHTML = "Downloaded";
      btn.style.opacity = "50%";
      btn.style.cursor = "not-allowed";
    }
  }, t);
});
