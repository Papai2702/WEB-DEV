//callBacks  /  hofs  /  closures

// aisa function jo call karte wakt vejte hai woh hota hai callBack function.  Example:
function papai(val) {
  val();
}
papai(function () {}); // this function(){} is the call back function.

//hofs=> ek aisa function jo accept kare dusra function in parameter , ya fir return karee ek aur function , aise fnc ko kehte hai hofs. Example:
function abcd() {
  return function () {}; // yeh jo return ho raha hai isse kehte hai hofs.
}
abcd();

//Closures=> ek aisa fn jo return kare doosra fn and jo fn return hua hai wo use kare parent fn ka koi var.
function abc() {
  var a = 0;
  return function () {
    console.log(a);
  };
} // now this is a closure

//  every closures are always a higher order function but every higher order function is not the closures

//Questions:~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//1. Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).
function caller(fn) {
  setTimeout(fn, 3000);
}
caller(function () {
  console.log("Hellow");
});

// 2. Implement your own version of `.map()` as a higher-order function.
Array = [1, 2, 3, 4, 5, 6];
function mapCopy(arr, fn) {
  var newarr = [];
  for (var i = 0; i <= arr.length; i++) {
    newarr.push(fn(arr[i]));
  }
  return newarr;
}

var pap = mapCopy(Array, function (value) {
  return value + 3;
});

// 3. Write a function that uses closures to create a counter.

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
var makecount = counter();
makecount();
makecount();
makecount();
makecount();
makecount();
makecount();
makecount();

// 4. Implement a function that limits how many times another function can be called (Closure + HOF).
function limit(fn, limit) {
  let calledtimes = 0;
  return function () {
    if (calledtimes < limit) {
      calledtimes++;
      fn();
    }
  };
}

// Example usage
let fn = limit(() => console.log("hello"), 3);
fn(); // "hello"
fn(); // "hello"
fn(); // "hello"
fn(); // (No output, limit reached)
