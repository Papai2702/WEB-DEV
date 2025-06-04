// ## **1️⃣ Console & Basic Operations (5 Questions)**

// 1.   Log "Hello World" in 3 different ways:
console.log("Hello World");
console.warn("hello world");
console.error("Hellow world");

// 2.    Perform 35 * 2 - (10 / 2) + 7 and log the result.
console.log(`${35 * 2 - 10 / 2 + 7}`);

// 3.    Log the data type of "123", 123, true, and null using typeof.
console.log(typeof "123", typeof 123, typeof true, typeof null);

// 4.    Write a program that swaps the values of two variables.
let a = 12,
  b = 23;
console.log("a=", a, "b=", b);
a = a + b;
b = a - b;
a = a - b;
console.log("a=", a, "b=", b);
// Using array destructuring (modern JS)
let [c, d] = [34, 45];
console.log("c=", c, "d=", d);
[c, d] = [d, c];
console.log("c=", c, "d=", d);
// we can also use 3rd temporary variable to swap;
// 5.    Use console.group() to organize logs into a group.
console.group("Group1");
console.log(12);
console.log(13);
console.log(14);
console.groupEnd();
console.groupCollapsed("Group2");
console.log(12);
console.log(13);
console.log(14);
console.groupEnd();

// ## **2️⃣ Variables & Data Types (5 Questions)**

// 6.Declare a const object, modify its properties, and log the updated object.
const obj = {
  name: "papai",
  age: 18,
  city: "keshiary",
  country: "india",
  p_no: 2345678901,
  is_married: false,
  is_student: true,
  is_employed: false,
  is_retired: false,
  is_disabled: false,
  is_dead: false,
};
console.log(obj);
obj.name = "Prem";
obj.age = 19;
obj.city = "kgp";
console.log(obj);
// we can not change value of const but yes we can update the value.  Example:
/*
const p=[1,2,3,4,5]
p=23;  // this will throw an error
p[0]=23; // this will not throw an error
console.log(p);  //this will not throw any error.
p.pop();  //this will not throw any error.
console.log(p);  //this will not throw any error.
p.push(6);  //this will not throw any error.
console.log(p);  //this will not throw any error.
p.shift();  //this will not throw any error.
console.log(p);  //this will not throw any error.
p.unshift(0);  //this will not throw any error.
console.log(p);  //this will not throw any error.
*/
// if we want that my bjects value should not be changed then we can use Object.freeze()
Object.freeze(obj);
obj.p_no = 1234567890;
console.log(obj); //this will not throw any error but the value will not be changed.

// 7.    Convert "50" (string) into a number using 3 different methods.
let s = "50";
console.log(s);
s = Number(s);
console.log(s);
s = parseInt(s);
console.log(s);
s = parseFloat(s);
console.log(s);
s = +s;
console.log(s);

// 8. Check if "JavaScript" contains "Script" without using .includes().
let j = "JavaScript";
console.log(j.indexOf("Script")); //it gives the starting index number of starting string. if there is no matched string this will return -1 index.
console.log(j.indexOf("js")); //this will return -1 as ther is no match.
if (j.indexOf("Script") != -1) {
  console.log("yes it is present");
}
else{
    console.log('no it is not present');
}
//Method 2:
if (j.search('aScript')!=-1)
{
        console.log('yes it is present');
        
}

// 9.  we will discuss it in next class. as it is not yet covered in the class.



//10. Explain the difference between undefined, null, and NaN with examples.
let u;
console.log(u); //this is undefined because it exists but no value is assigned to it.
let n=null;
console.log(n); //this is null because it is an **empty** value. means ham jo dhund rahe hai vo nhi mila toh null return karega.
let nan=NaN;
console.log(nan); //this is NaN because it is not a number. matlab mathemetical invalid operation will return NaN.
// this null,NaN,undefined are values of the variables.
// but not defined is means that the variable is not declared. it has no existance. Example:
console.log(papai); //this will throw an error of not defined because papai is not declared in the entire code.


// -----0-----