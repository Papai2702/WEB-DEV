/* 1️⃣ Create and Access Elements
👉 Task: Create an array called languages with at least 3 programming languages. Print the second element.
*/
let languages = ["JavaScript", "Python", "C++"];
console.log(languages[1]); // Expected output: Python

/*
2️⃣ Modify an Array
👉 Task: Change the third element of the array to "Java" and print the updated array.
*/
let frameworks = ["React", "Angular", "Vue"];
frameworks[2] = "java";
console.log(frameworks); // Expected output: ["React", "Angular", "Java"]

/*
3️⃣ Add and Remove Elements
👉 Task: Add "Swift" to the end of the array and remove the first element.
*/
let mobileLanguages = ["Kotlin", "Flutter", "Dart"];
mobileLanguages[0] = mobileLanguages[1];
mobileLanguages[1] = mobileLanguages[2];
mobileLanguages[2] = "swift";

console.log(mobileLanguages); // Expected output: ["Flutter", "Dart", "Swift"]
// ======chatgpt soln======
let mobileLanguages = ["Kotlin", "Flutter", "Dart"];
mobileLanguages.push("Swift"); // Adds "Swift" at the end
mobileLanguages.shift();       // Removes the first element "Kotlin"

console.log(mobileLanguages); // Expected output: ["Flutter", "Dart", "Swift"]

/*
4️⃣ Create an Object
👉 Task: Create an object called student with properties name, age, and grade. Print the age.
*/
let student = {
    name: "Amit",
    age: 20,
    grade: "A"
};
console.log( student.age);  // Expected output: 20

/*
5️⃣ Add and Modify Properties
👉 Task: Add a new property city: "Delhi" to the object and change the grade to "A+".
*/
let studentInfo = {
    name: "Priya",
    age: 22,
    grade: "B"
};
studentInfo.grade='A++'
studentInfo.city='Delhi'
console.log(studentInfo);

/*
6️⃣ Loop Through an Object
👉 Task: Use a loop to print all the keys and values of the following object.
*/
let car = {
    brand: "Tesla",
    model: "Model S",
    year: 2022
};
console.log(car);

// Your Code Here

/*
Bonus Challenge 🚀
👉 Task: Create an array of objects representing students. Each student should have name and score. Loop through the array and print the students who scored above 80.
*/
let students = [
    { name: "Rahul", score: 75 },
    { name: "Meera", score: 85 },
    { name: "Sanjay", score: 90 }
];
console.log(score>80? student||continue);

// Your Code Here
