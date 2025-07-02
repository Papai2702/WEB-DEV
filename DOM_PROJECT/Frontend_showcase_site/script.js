let rst = document.querySelector("#rst");
rst.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
// localStorage.clear();
let task = [];
let new_i = localStorage.getItem("i");
// console.log(task);
for (let c = 0; c < new_i; c++) {
  // console.log(task[c]);
  
  if(task[c]!=undefined)
  {
    task[c] = localStorage.getItem(`${c + 1}`);
  }
}
let tsk = document.querySelector("#tasks");
let s = ``;
task.forEach((el, id) => {
  // console.log(id);
  // console.log(el);
  s += `
  <p id="${id}" class="task">
    ${task[id]}
    <span class="tick" id="done${id}">✔️</span>
    <span class="edit" id="edit${id}">🔄️</span>
    <span class="del"  id="del${id}">🚮</span>
  </p>`;
});
tsk.innerHTML = s;

let addbtn = document.querySelector("#addbtn");
let ans = ``,
  i;
// localStorage.setItem("i", 0);
// console.log(i);
addbtn.addEventListener("click", function () {
  i = Number(localStorage.getItem("i"));
  console.log(i);
  
  ans = prompt("Enter your Task:");
  i++;
  localStorage.setItem(`${i}`, ans);
  task[i] = ans;
  localStorage.setItem("i", i);
  console.log(task);
  
  s += `<p id="${i-1}" class="task">
    ${task[i]}
    <span class="tick" id="done${i-1}">✔️</span>
    <span class="edit" id="edit${i-1}">🔄️</span>
    <span class="del"  id="del${i-1}">🚮</span>
  </p>`;
  tsk.innerHTML = s;
});

tsk.addEventListener("click", (det) => {
  let idx;
  if (det.target.className == "tick") {
    console.log("CLICKED");
    // det.target.parentElement.classList.toggle("done");
    // console.log(det.target.parentElement.id);
    idx = det.target.parentElement.id;
    console.log(idx);
    idx++;
    console.log(idx);
    localStorage.removeItem(`${idx}`);
    det.target.parentElement.style.display="none";
    task.splice(idx-1,1);
  }
});

console.log(task);
// console.log(task[idx]);