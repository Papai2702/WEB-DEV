// 1.   HOFS:: A dunction which takes another function as an argument or returns an other function.
// EXAMPLE:= A function taking another function (callback)

function greet(calbacks) {
  console.log("Hellow");
  calbacks();
}
function SayBye() {
  console.log("Bye!!!");
}

greet(SayBye); //callback function is SayBye. and greet function is higher order function.
// Explanation:- suppose tu kisi frnd ko call kartahai and bolta hai ki "'Hello' bolne k baad 'Bye' bolde. so is case main greet function bolta hai 'Hellow' and SayBye function bolta hai 'Bye!!!' and when we are using the line greet(SayBye); this means first greet functon chalega and uske argument mai callback mai SayBye function run hoga ."

// 2.   Callbacks:: A function is passed through another function as an parameter is called callbcks function .
// EXAMPLE:= Callbacks Example.
function delayed(callbacks2) {
  setTimeout(callbacks2, 3000);
}
delayed(() => {
  console.log("Late is Better than Never....");
}); // this means delayed function is called and in this functin an callback function is there for print the statement but in the delayed function declearation  we are taking an argument named callbacks2 which runs after 3sec or 3000 milisec. Actually here the un named function which contains the log statement is passing to callbacks2 and that will run after 3 sec delay.

// 3.   Closure:: Ek inner function apne parent function k variables ko yad rakhta even after the parent functions execution is done.
// EXAMPLE:=
function makecount() {
  let count = 0;
  return function () {
    // count++;
    return count++;
  };
}
let counter = makecount();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

