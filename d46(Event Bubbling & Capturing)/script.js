const p = [
  // Development
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Arjun Mehta",
    role: "Software Engineer",
    location: "Bangalore, India",
    email: "arjun.mehta@example.com",
    category: "Development"
  },
  {
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Priya Sharma",
    role: "UI/UX Designer",
    location: "Delhi, India",
    email: "priya.sharma@example.com",
    category: "Development"
  },
  {
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Karan Desai",
    role: "Frontend Developer",
    location: "Surat, India",
    email: "karan.desai@example.com",
    category: "Development"
  },
  {
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    name: "Sneha Reddy",
    role: "Data Scientist",
    location: "Hyderabad, India",
    email: "sneha.reddy@example.com",
    category: "Development"
  },

  // Security
  {
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Amit Singh",
    role: "DevOps Engineer",
    location: "Mumbai, India",
    email: "amit.singh@example.com",
    category: "Security"
  },
  {
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    name: "Vikram Joshi",
    role: "Cybersecurity Analyst",
    location: "Pune, India",
    email: "vikram.joshi@example.com",
    category: "Security"
  },
  {
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    name: "Ritika Nair",
    role: "HR Manager",
    location: "Chennai, India",
    email: "ritika.nair@example.com",
    category: "Security"
  },

  // Database
  {
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Ravi Patel",
    role: "Product Manager",
    location: "Ahmedabad, India",
    email: "ravi.patel@example.com",
    category: "Database"
  },
  {
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    name: "Neha Gupta",
    role: "Marketing Lead",
    location: "Kolkata, India",
    email: "neha.gupta@example.com",
    category: "Database"
  },
  {
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    name: "Anjali Verma",
    role: "AI Researcher",
    location: "Jaipur, India",
    email: "anjali.verma@example.com",
    category: "Database"
  }
];


let s = ``;
let card=document.getElementById('cards')
p.forEach((e, i) => {
  s+=`<div id="c">
            <div id="dp">
              <img
                src="${p[i].image}"
                alt=""
              />
            </div>
            <div id="name">
              <h1>${p[i].name}</h1>
              <h2>${p[i].role}</h2>
              <h2>${p[i].location}</h2>

              <div id="contact">
                <div id="links">
                  <a href="#"> <i class="fa-brands fa-github"></i> </a>
                  <a href="#"> <i class="fa-brands fa-linkedin"></i></a>
                  <a href="#"> <i class="fa-solid fa-envelope"></i></a>
                </div>
              </div>
            </div>
          </div>`
});

console.log(s);
card.innerHTML=s
let nav=document.getElementById('nav')
let bar=document.querySelector('i')
let m=document.getElementById('menue')
let click=0;
bar.addEventListener('click',function(){
    if(click==0){

        m.style.display='block'
        // bar.style.display='none'
        bar.setAttribute('class',"fa-solid fa-x")
        click=1
    }
    else{
        bar.setAttribute('class',"fa-solid fa-bars")
        m.style.display='none'

        click=0;
    }
})









