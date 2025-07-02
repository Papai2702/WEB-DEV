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
    /* ---------------back-btn-------------- */
    let bck=document.querySelector('#back_btn')
    bck.addEventListener('click',()=>{
      window.location.href='index.html'
    })
    /* ---------------add-btn-------------- */
let addbtn=document.querySelector('.add-btn')
let inp=document.querySelector('#input')
addbtn.addEventListener('click',()=>{
  inp.style.display='flex'
})
let cancel_add=document.querySelector('#b1')
cancel_add.addEventListener('click',()=>{
  inp.style.display='none'
})
