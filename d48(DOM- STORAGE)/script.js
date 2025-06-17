let b1 = document.getElementById("btn1");
let b2 = document.getElementById("btn2");
b1.addEventListener("click", function () {
  history.forward();
});
b2.addEventListener("click", function () {
  history.back();
});
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  location.href = "https://www.sheryians.com/";
});
let b3 = document.getElementById("btn3");
b3.addEventListener("click", function () {
  location.reload();
});
console.log(navigator.onLine);
console.log(navigator.userAgent);

// =====================================================================

// localStorage=browser ki Storage(data tabtakrehta hai jabtak user khud usse nah hata de)
// sessionStorage=(reload karne pe rahega lekin agr tab band kr di to gayab)
// cookies=(stores data like local storage but for a time span)

// localStorage.clear()  //clears the local storages
localStorage.setItem("user", "papai"); //if i dlt this line and close the tab and reopen the tab still the info will be stored in local storage.even if i restart the system still it will be present
let user = localStorage.getItem("user");
console.log(user);
localStorage.setItem("age", "19");
localStorage.setItem("Stream", "CSE");
localStorage.removeItem("age");
let arr=[1,2,3,4,5]
localStorage.setItem('arr',arr)
//objects  are not stored in local storage directly.

let obj = [
  {
    user: "papai",
    age: "19",
    stream: "CSE",
  },
  {
    user: "papai",
    age: "19",
    stream: "CSE",
  },
  {
    user: "papai",
    age: "19",
    stream: "CSE",
  },
  {
    user: "papai",
    age: "19",
    stream: "CSE",
  },
  {
    user: "papai",
    age: "19",
    stream: "CSE",
  },
];
localStorage.setItem('obj',obj)
//to resolve this we use json method
// let newObj=JSON.stringify(obj)   //converts object to a string
// localStorage.setItem('NewObj',newObj)
let NewObj= localStorage.getItem('NewObj')
console.log(JSON.parse(NewObj));   //cconverts string to obj

