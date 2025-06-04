/*
 Age Category Message – Ask the user for their age. If they are
under 18, print “You are a minor.” If they are between 18 and 60,
print “You are an adult.” If they are above 60, print “You are a
senior citizen.”
---------------------------------------------------------
var age = Number(prompt('Enter ur Age'))
age<18?console.log('U R Minor'):age>=18 && age<=60?console.log('U R Adult'):console.log('U R Senior Citizen');
*/

/*Even or Odd Sum – Take two numbers from the user using
prompt(). If the sum of both numbers is even, print “Even Sum”;
otherwise, print “Odd Sum.”
---------------------------------------------------------
var n1=Number(prompt('Enter 1st Number:'))
var n2=Number(prompt('Enter 2nd Number:'))
// (n1+n2)%2==0?console.log('Even Sum'):console.log('Odd Sum');
if((n1+n2)%2==0)
{
console.log('Even Sum');
}
else console.log('Odd Sum');
*/

/*
Character Case Checker – Ask the user for a single character.
Check if it's uppercase, lowercase, or neither (not a letter).
---------------------------------------------------------
var c=prompt('Enter a Character:')
if(c>='A' && c<='Z')
{
    console.log('Uppercase');
}
else if(c>='a' && c<='z')
{
    console.log('LowerCase');
}
else{
    console.log('Not a Letter');
}
*/

/*
Largest of Three Numbers – Take three numbers as input and
print the largest number among them without using
Math.max().
---------------------------------------------------------
var n1 = Number(prompt("Enter 1st Number"));
var n2 = Number(prompt("Enter 2nd Number"));
var n3 = Number(prompt("Enter 3rd Number"));
if (n1 > n2 && n1 > n3) {
    console.log(n1);
}
if (n2 > n1 && n2 > n3) {
    console.log(n2);
}
if (n3 > n2 && n3 > n1) {
    console.log(n3);
}
*/

/*
Leap Year Checker – Ask the user for a year and determine if
it's a leap year or not.
---------------------------------------------------------
var y=Number(prompt('Enter the Year :'))
if(y%4==0)
{
if(y%100==0)
{
if(y%400==0)
{
console.log("Leap Year");
} else
console.log("Not a Leap Year");
} else
console.log("Leap Year");
} else  console.log("Not a Leap Year");   
*/

/*
Leap Year Checker – Ask the user for a year and determine if
it's a leap year or not.
---------------------------------------------------------
var n1=Number(prompt('Enter 1st Number:'))
var n2=Number(prompt('Enter 2nd Number:'))

console.log('Addition=' + (n1+n2));
console.log('Substraction='+ (n1-n2));
console.log('Multiplication='+ (n1*n2));
console.log('Division='+ (n1/n2));
*/

/*
Positive, Negative, or Zero – Take a number input and check if it is positive, negative, or zero.
---------------------------------------------------------
var a=Number(prompt('Enter a Number:'))
if(a>0)
{
    console.log('+ve');
    
}
else if(a<0)
{
    console.log('-ve');
}
else
{
    console.log('Zero');
}
 */

/*
User Greeting – Ask for the user's name and time (24-hour
format). Greet them accordingly:

5 AM–12 PM: "Good Morning, [Name]!"
12 PM–5 PM: "Good Afternoon, [Name]!"
5 PM–9 PM: "Good Evening, [Name]!"
9 PM–5 AM: "Good Night, [Name]!"
---------------------------------------------------------

var n = prompt("Enter ur Name:");
var t = Number(prompt("Enter the time in 24-hour format:"));
if (t > 5 && t < 12) {
  console.log("Good Morning, " + n + "!");
} else if (t > 12 && t < 17) {
  console.log("Good Afternoon, " + n + "!");
}
else if(t>17 && t<21)
{
    console.log("Good Evening, " + n + "!");
}
else
{
    console.log("Good Night, " + n + "!");
}
*/

/*
Traffic Light System – Ask the user for a traffic light color (red,
yellow, green). Print appropriate messages:

Red: "Stop!"
Yellow: "Get Ready!"
Green: "Go!"
---------------------------------------------------------
var col = prompt("Enter Color:");
if (col == "red") {
  console.log("Stop!");
} else if (col == "yellow") {
  console.log("Get Ready!");
} else if (col == "green") {
  console.log("Go!");
}
*/

/*
Multiplication Table – Ask the user for a number and print its
multiplication table up to 10.
---------------------------------------------------------

var n = Number(prompt("Enter a Number:"));
for (var i = 1; i <= 10; i++) {
  // console.log(n+'*'+i+'='+n*i);
  console.log(n + "*" + i + "=" + n * i);
}
*/

/*
11. Grade Calculator – Ask the user for their marks (0-100).
Assign grades based on the range:

90-100: A
80-89: B
70-79: C
60-69: D
Below 60: F
----------------------------------------------------------
var m = Number(prompt("Enter ur Marks:"));
if (m > 90 && m <= 100) {
  console.log("Grade:A");
}
if (m >= 80 && m < 90) {
  console.log("Grade:B");
}
if (m >= 70 && m < 80) {
  console.log("Grade:C");
}
if (m >= 60 && m < 70) {
  console.log("Grade:D");
}
if (m < 60) {
  console.log("Grade:F");
}
*/

/*
Simple Login System – Set a predefined username and
password. Ask the user to enter their credentials using
prompt(). If correct, print “Login Successful”; otherwise, print
“Incorrect username or password.”
----------------------------------------------------------
var un = "admin",
  pw = "admin";
var u = prompt("Enter Username:");
var p = prompt("Enter Password:");
if (u == un && p == pw) {
  console.log("Login successful");
}
else {
  console.log("Incorrect username or password");
}
  */

/*
Swapping Without Third Variable – Take two numbers from the user and swap their values without using a third variable.
----------------------------------------------------------
var n1=Number(prompt('Enter 1st Number:'))
var n2=Number(prompt('Enter 2nd Number:'))
n1=n1+n2;
n2=n1-n2;
n1=n1-n2;
console.log('After Swapping n1='+n1+' n2='+n2);
*/

/*
FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if only 5, print “Buzz”; otherwise, print the number itself.
----------------------------------------------------------
var n = Number(prompt("Enter a number:"));
if (n % 3 == 0 && n % 5 == 0) {
  console.log("FizzBuzz");
} else if (n % 3 == 0) {
  console.log("Fizz");
} else if (n % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(n);
}
*/

/*
Number Reversal – Take a three-digit number from the user
and print its reverse. (Example: 123 → 321).
----------------------------------------------------------

var num = Number(prompt("Enter a 3-digit number:"));
var r = 0;
while (num > 0) {
  r = r * 10 + (num % 10);
  num = parseInt(num / 10); //~~~~~~~~~
}
console.log(r);
*/

/*
Sum of Digits – Take a number from the user and print the sum
of its digits. (Example: 123 → 1+2+3 = 6).
----------------------------------------------------------
var num = Number(prompt("Enter a number:"));
var sum = 0;
while (num > 0) {
  sum += num % 10;
  num = parseInt(num / 10);
}
console.log(sum);
*/

/*
Palindrome Checker – Ask the user for a word. Check if it reads the same forward and backward. Print “Palindrome” or “Not a Palindrome.”
----------------------------------------------------------
var s = prompt("Enter a word:");
















*/

/*
Reverse Without String Methods – Ask the user for a number
and reverse it without using .split(), .reverse(), or .join().
-----------------------------------------------------------


















*/

/*
Find Second Largest – Take three numbers as input and find
the second largest number (without using sort() or Math.max()).----------------------------------------------------------
var n1 = Number(prompt("Enter 1st Number"));
var n2 = Number(prompt("Enter 2nd Number"));
var n3 = Number(prompt("Enter 3rd Number"));
if (n1 > n2 && n1 > n3) {
  if (n2 > n3) {
    console.log(n2);
  } else {
    console.log(n3);
  }
} else if (n2 > n1 && n2 > n3) {
  if (n3 > n1) {
    console.log(n3);
  } else {
    console.log(n1);
  }
} else if (n3 > n1 && n3 > n2) {
  if (n2 > n1) {
    console.log(n2);
  } else {
    console.log(n1);
  }
}
  */

/*
Find First Non-Repeating Character – Ask the user for a word
and find the first character that does not repeat. Example: hello
→ h (since e, l, and o repeat).
----------------------------------------------------------












*/

/*
 Even Digit Counter – Take a number from the user and count how many even digits it has
----------------------------------------------------------
var n = Number(prompt("Enter a number:"));
var c = 0,
  ch;
while (n > 0) {
  ch = n % 10;
  if (ch % 2 == 0) {
    c++;
  }
  n = parseInt(n / 10);
}
console.log(c);
*/

/*
 Nested Condition Challenge – Ask the user for their age and
salary. Print a message based on conditions:

 If age is below 18, print “Not eligible”
 If age is 18 or more but salary is less than ₹20,000, print “Low Salary”
 If salary is ₹50,000 or more, print “High Salary”
 Otherwise, print “Medium Salary”
----------------------------------------------------------
var ag = Number(prompt("Enter ur age"));
var sal = Number(prompt("Enter ur Salary"));
if (ag < 18) {
  console.log("Not Eligiblae");
} else if (ag > 18) {
  if (sal < 20000) {
    console.log("Low Salary");
  } else if (sal >= 50000) {
    console.log("High Salary");
  } else {
    console.log("Medium Salary");
  }
}
*/

/*
Toggle Case – Ask the user for a word and toggle the case of
every character. Example: HeLLo → hEllO.
----------------------------------------------------------

















*/

/*
Find the Missing Number in a Sequence – Take a list of consecutive numbers (except one missing) and find the missing number. Example: 1, 2, 3, 5 → Missing number is 4.
----------------------------------------------------------













*/

/*
* Convert Number to Words – Take a single-digit number and print it in words (Example: 1 → One, 2 → Two).
----------------------------------------------------------
var n = Number(prompt("Enter a single digit number:"));
if (n == 0) {
  console.log("Zero");
}
if (n == 1) {
  console.log("One");
}
if (n == 2) {
  console.log("Two");
}
if (n == 3) {
  console.log("Three");
}
if (n == 4) {
  console.log("Four");
}
if (n == 5) {
  console.log("Five");
}
if (n == 6) {
  console.log("Six");
}
if (n == 7) {
  console.log("Seven");
}
if (n == 8) {
  console.log("Eight");
}
if (n == 9) {
  console.log("Nine");
}
*/
