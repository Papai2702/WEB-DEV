/* This code snippet provides an explanation and examples of creating arrays and objects in JavaScript
using different methods. */

// array ; 
// Methode 1: var arr=[]
var a = [100]; // this does not mean that it created a array of length 100. it stores value 100 at index 0. indexing defult starts from 0.
console.log(a);

// example
let fruits = ["apple", "banana", "Mango"]; // this is a variable  which stores 3 string value
// Methode 2: let numb=new
let nu = new Array(); //this also create a array
console.log(nu);
let arr=new Array(100) //this create 100 length array
console.log(arr);

// difference:
// we use methode 1, when we have to directly store value. and we use methode 2, when we have
// we can store multiple datatype in an array.

// object;
// this also has 2 methode of declearing object in js
// Methode 1:
let person = {
    // key:value,
  name: "papai",
  age: 18.7,
  country: "India",
  planet: "Earth",
  no_of_cars: 12,
  isMaried: false,
  salary: 1234567,
}; //this is a object.
console.log(person);


// Methode 2:
let man = new Object();
man.name = 'Premanshu';
man.age = 19;
man.marry = true;
console.log(man);

//calling object data:
console.log("data calling");

console.log("this is person details");

console.log(person.name);
console.log(person.salary);
console.log(person.isMaried);
console.log(person.age);
console.log("this is man details");

console.log(man.name);
console.log(man.age);
console.log(man.marry);



// difference:
// ========================
// Array==> Ordered collection(List like). & Object==> Unordered collection(key-value pairs)
// for accessing, Array==>index 0(arr[0]); Object==> uses keys(obj.key), 
// Array==> Best for store similar type of data; Object==>Best for related data.