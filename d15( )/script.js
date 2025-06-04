/* The commented code you provided covers various topics in JavaScript such as data types, type
conversion, hoisting, conditionals, loops, and operators. It includes examples and explanations for
each topic. */
// data types
// -premitive & reference.

// -premitive:
//      -Number(10.2,20,65,...........)
//      -String ('a),'papai,"premanshu")
//      -Boolean (true,false)
//      -undefined
//      -null
//      -symbol
//      -BigInt

// -reference
//      -Array
//      -Object
//      -Function
// -----------------------------------------------------------------------------------

/*
var a=10,b=10.90
console.log(a,b);
var a='papai'
console.log(a,b);
var b=true
console.log(a,b);
*/

// -----------------------------------------------------------------------------------
/*
var age=prompt('enter age:')
console.log(age);  //prompt mai jo bhi answer milta hai woh sab string hota hai
var rem=prompt('Enter name:')
console.log(age+rem);  //this will give result like(agerem)
console.log(age-rem);  //this will give u NaN because except '+' all mathematical operators used to operate arithmatic operation. but '+' this can be used for addition along with it can be used as ~concatination~(add two string)

// +: addition,concatination
// -: substraction
// *: multiplication
// /: division
// %: modulus
// **: power

// typeconversion:
var age=Number(age)   //this will convert string into number
console.log(age)
//or
var roll=Number(prompt('enter roll:'))
console.log(roll);

*/

// -----------------------------------------------------------------------------------

/*


var a;
console.log(a);  //undefined :var is decleared but not initialized
a=null
console.log(a);  //null :var is decleared and initialized with null(nothing) console.log(x);  //not defined: var is not defined anywhere

*/

/*
var p=123456777788885675463456    //this is a normal int which range upto [2^53-1]
console.log(p);    //this will print something another value because it is out of range
var q=123456777788885675463456n    //n is used to define BigInt
console.log(q);

console.log(p+q);   //error: different datatypes
*/

// -----------------------------------------------------------------------------------
/*
// hoisting:
console.log(w);
var w = "women"; //this is hoisting: this breaks the statement into var q; and q=women;   then it moves the var q; part into the top of the code. thats why it show undefined bcz its value is not defined before console.log(w) statement.
// this basically says that w is declerede but not initialized.
console.log(w);
//but now w is initialized.
*/

/*
//conditionals:
if (10 > 5) {
    //condition
    // condition agr true ho haye to kya karna hai
    console.log("yes");
}
var e = 12;
var r = 23;
if (r > e) {
    console.log(true);
} else {
    console.log(false);
}
r = 10;
if (r > e) {
    console.log(true);
} else {
    console.log(false);
}
*/

//que:
/*
//ask a user his age and check if he / she is adult or not.
var realAge=Number(prompt('Enter ur age:'))
if(realAge>=18)
{
    console.log('U R Adult');
    
}
else{
    console.log('Ghar Ja Bhai....');
    
}
*/
/*
//ask auser his marks and define his grade.
var marks= Number(prompt('Enter ur Marks:'))
if(marks<40)
{
    console.log('U R Fail \n Grade:F');
    
}
else if(marks>=40 && marks<50){
    console.log('Grade:D');
    
}
else if(marks>=50 &&marks<60){
    console.log('Grade:C');
    
}
else if(marks>=60 && marks<70){
    console.log('Grade:B');
    
}
else if(markss>=70 && marks<80){
    console.log('Grade:A');
    
}
else if(marks>=80 && marks,90)
{
    console.log('Grade:E');
    
}
else{
    console.log('Grade:O');
    
}
*/
/*
//increment and decrement
var i=10;
console.log(i);
console.log(i++); //ffirst print then increment
console.log(++i); //first increase then print
//same for decrement
*/

/*
//== vs ===
// ==: only checks the value
// ===: checks the value as well as datatype
var g = 10;
var h = "10.0";
if (g == h) {
    console.log("== checks values only");
}
if (g === h) {
    console.log("===checks datatypes also along with values");
}
h = 10.0;
if (g == h) {
    console.log("== checks values only");
}
if (g === h) {
    console.log("===checks datatypes also along with values");
}
*/

/*
//Q. ask a user his bijli ki unit and if unit>100 calculate his bill with 10rs/unit and if >10 then 8rs/unit and if <10 then 5rs/u.
var unit = Number(prompt("Enter ur unit:"));
if (unit < 0) {
  console.log("Invalid Input");
} else if (unit < 10) {
  console.log("Bill:", unit * 5);
} else if (unit >= 10 && unit < 100) {
  console.log("Bill:", unit * 8);
} else {
  console.log("Bill:", unit * 10);
}
*/

/*
//ternary operator
var x=10;
var y=5;
x>y?console.log('x is greater'):console.log('y is greater');
//or
y=20
x>y?console.log('x is greater'):console.log('y is greater');
*/

//loops
/*
//while
while(condition)
{
    //code
    //increment/decrement
}
*/
/*
//do while
do{
    //code
    //increment/decrement
}
while(condition)
*/
/*
//for
for(initialization;condition;increment/decrement)
{
    //code
}
*/
