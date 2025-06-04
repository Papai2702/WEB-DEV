//  Topics:

// --what is a function
// > kuch block of code jo hume baad mai use karna hai usko ek hi set mai likh kar rakh dete hai wohi function hai. and ham function ko kabhi bhi call kar sakte hai. 

// --why do we need functions
//> jab hame block of code turant nhi chalana hai and usko reuse bhi karna pare tab ham baar baar code likhne k jagah ek function use kr lete hai usi specific block k liye.
 
/*
// --how to define a function
function papai(){   //defining a function.
    console.log("This ia a function");
    
}
*/
/*
// --how to call a function
papai();     //calling a function.
*/
/*
// --pass a parameters
function n(params) {  //params is a parameter.
    console.log("My name is " + params);    
}
*/
/*
// --pass an argument to a function
n("Parna");  //passing a Arguments.
n("Papai");  //passing a Arguments.
n("Rahul");  //passing a Arguments.

function f(a,b,c,d)    //a,b,c,d is parameters.
{
    console.log(a,b,c,d);
}
f(1,2,3,4);  //passes 4 arguments.
f(5,6,7,8);  //passes 4 arguments.
f(9,10,11,12);//passes 4 arguments.
// Types of function declaration
*/
/* 1. function statement
function n() {
    // codes block
} 
*/
/* 2. function expression
var n=function(){   //variable mai agr fn store hota hai toh usko name nhi dena padhta hai.
    // codes block
}
*/
/*3. anonymous function
function(){
    // codes block
}
*/
/*4. fat arrow function
()=>{
    // codes block
}
*/
/*5. fat arrow function with parameter
(a,b)=>{
    // codes block
}
*/
/*6. fat arrow function with implicit return
var abcd=()=>12   //  >iske baad jo bhi value hoti hai woh return hoti hai. no need to type return keyword.(implicit return)



var abcd=()=>12;
console.log(abcd());
*/

/*return statement
function n(){
    // return "Hello";
    // return 0;
    return true;

}



var ans=n();
console.log(ans);
*/
/*rest operator
function a(a,b,c,...rest)   //rest operator   // we can give any name inspite of rest(i.e. nalle)
{
    console.log(a,b,c,rest);
}
a(1,2,3,4,5,6,7,8,9,10);
*/