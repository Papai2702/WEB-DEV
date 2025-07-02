const projects = [
  {
    location: "full.html",
    id: "0",
    photoId: "ph6",
    photo:
      "https://i.pinimg.com/736x/fe/c7/55/fec755106d991e0c60b6e560a2a6c3c1.jpg",
    title: "Task Management App",
    description:
      "An application for managing tasks with features like task creation, prioritization, and deadlines.",
  },
  {
    location: "",
    id: "1",
    photoId: "ph1",
    photo:
      "https://i.pinimg.com/736x/47/7c/dd/477cdd6c593c3d6fdd04caebf2057616.jpg",
    title: "Interactive Dashboard",
    description:
      "A dynamic dashboard with real-time data updates and user interaction features.",
  },
  {
    location: "",
    id: "2",
    photoId: "ph2",
    photo:
      "https://i.pinimg.com/736x/d9/c9/ca/d9c9ca3071f052121f8c70ccd8b0e89b.jpg",
    title: "E-commerce Platform",
    description:
      "A fully functional e-commerce site with product listings, shopping cart, and checkout process.",
  },
  {
    location: "",
    id: "3",
    photoId: "ph3",
    photo:
      "https://i.pinimg.com/736x/b3/9f/b1/b39fb175d35f21f64926f6a84cf6cc68.jpg",
    title: "Portfolio Website",
    description:
      "A personal portfolio site showcasing my work, skills, and experience.",
  },
  {
    location: "",
    id: "4",
    photoId: "ph4",
    photo:
      "https://i.pinimg.com/736x/35/64/66/35646647724384bc141899240ae3f606.jpg",
    title: "Data Visualization Tool",
    description:
      "A tool for visualizing complex data sets with interactive charts and graphs.",
  },
  {
    location: "",
    id: "5",
    photoId: "ph5",
    photo:
      "https://i.pinimg.com/736x/cf/fc/be/cffcbec4c5d20014a18466b1f0c0354d.jpg",
    title: "Blog Application",
    description:
      "A blog platform With authentication, post creation, and commenting features.",
  },

  {
    location: "",
    id: "6",
    photoId: "ph7",
    photo:
      "https://i.pinimg.com/736x/42/dd/53/42dd53bf0d9cc5e5bdd62f490b8d0624.jpg",
    title: "Weather App",
    description:
      "A weather application displaying current weather conditions and forecasts for different locations.",
  },
  {
    location: "",
    id: "7",
    photoId: "ph8",
    photo:
      "https://i.pinimg.com/736x/e0/34/ec/e034ece03dfbfe928b91676173d22214.jpg",
    title: "Reciepe Finder",
    description:
      "A tool for finding recipes based on ingredients or dietary preferences.",
  },
];

let s = ``;
let card = document.querySelector("#showcase");
projects.forEach((e, i) => {
  s += `
  <div id="${e.id}" class="proj">
               <div class="photo" id="${e.photoId}">
              <img src="${e.photo}" alt="">
               </div>
                <div class="about">
                <h3>${e.title}</h3>
                <p>${e.description}</p>
                </div>
            </div>`;
});
card.innerHTML = s;

let proj = document.querySelectorAll(".proj");
let full = document.querySelectorAll(".full");
let home = document.querySelector("#feature");
let bck = document.querySelectorAll("#back_btn");
// console.log(full);

/* ----------open project section----------  */
function open_section() {
  proj.forEach((e, id) => {
    // console.log(e,id);
    e.addEventListener("click", () => {
      // console.log(full[e.id]);
      full[e.id].style.display = "block";
      home.style.display = "none";
    });
    bck.forEach((el, idx) => {
      el.addEventListener("click", () => {
        console.log(full[id]);
        full[e.id].style.display = "none";
        home.style.display = "block";
      });
    });
  });
}
open_section(); //calling function to open project section

/*  -------------------------TASK MANAGER------------------------- */
/* -------- date & time -------- */
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
const themeToggle = document.getElementById("themeToggle");

function updateDateTime() {
  const now = new Date();
  dateEl.textContent = now.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  timeEl.textContent = now.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
}
updateDateTime();
setInterval(updateDateTime, 60_000);

/* -------- dark / light switch -------- */
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.classList.toggle("fa-sun");
  themeToggle.classList.toggle("fa-moon");
});
/* ---------------add-btn-------------- */
let addbtn = document.querySelector(".add-btn");
let inp = document.querySelector("#input");
addbtn.addEventListener("click", () => {
  inp.style.display = "flex";
  // console.log('clicked');
});
let cancel_add = document.querySelector("#b1");
cancel_add.addEventListener("click", () => {
  inp.style.display = "none";
});

/* ------------form handeling------------------ */
let add_new_tsk = document.querySelector("#b2");
let form = document.querySelector("#input");
let title = document.querySelector("#input input");
let desc = document.querySelector("#input textarea");
let prior = document.querySelector("#prior");
let radio = document.querySelectorAll("#prior input");
// console.log(radio);
let allTasks = [
  {
    title: "Lorem ipsum 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    priority: "high",
    id: "1",
  },
  {
    title: "Lorem ipsum 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    priority: "medium",
    id: "2",
  },
  {
    title: "Lorem ipsum 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    priority: "low",
    id: "3",
  },
];
console.log(title, desc);
form.addEventListener("submit", (det) => {
  det.preventDefault();
  console.log("HELLOOOWWWW");
});
add_new_tsk.addEventListener("click", () => {
  console.log(title.value);
  console.log(desc.value);
  radio.forEach((e) => {
    if(e.checked)
      console.log(e);
        
  });
});
// console.log(radio);
function render_task() {
  let content = ``;
  allTasks.forEach((e, i) => {
    console.log(e, i);
    content += `<div class="target_task">
                <div class = 'details'>
                  <h3>${e.title}</h3>
                  <p id='priority'>[ ${e.priority} ]</p>
                  <p>${e.description}</p>
                </div>
          <div class="btns">
          <button class="done">Mark as Done</button>
          </div>
            </div>
 `;
  });

  let task_list = document.querySelector(".task_list");
  task_list.innerHTML = content;
}
render_task();
