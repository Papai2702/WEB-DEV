// for-each
let pr=[1,2,3,4]
pr.forEach(function(value)  // array k har ek value k liye function run karega jaha function k -value- mai array ki ek ek element ayega sequencially end uske liye function chalega
{
    console.log(value);
    
}
)

// map : yeh ek naya array baata hai and us array mein har bar element leke aata ha jo map ke andar se return hoga.
let ar=[1,2,3,4]
let ans=ar.map(function(value)
{
    return 12; //isme jo hi hoga ar name ka array ka har element k liye yeh return hoga,...
})

// filter:
// filter ka kam exact same hai map k tarah bass isme return hota hai Boolean(true/false). Example:
let n_ans=ar.filter(function(value)
{
    return true;  // jab bhi -true- return hota hai to new array mai purane array ka element set hota jayega. or agr -false- hota hai to void array rahega.
    // in this return we actually checks condition which sets true or false accordingly.
})

// reduce: 
let final= ar.reduce(function(accumulator,key)  //in this case, in console final=10 
{
    // console.log(key);  //bar bar array k har ek ek value return ho raha
    return accumulator+key   //isme return hone wali value accumulator mai wapis set hota hai and yeh loop array k last element tak chalta hai. or final mai ek hi value return hota hai
    
},0)  //iha jo bhi value hoga by default woh value le lega accumulator



// map=>naya array mai returned value daaalo 
// filter=>naya array mai true returned value daaalo
// reduce=> ek array se final ek hi value ayega and woh hi return hoga(example: add of all elem or multiply of all)
// ===================== Question & Answer ====================== //

//  sheet 1 remaining quetion:
// 9. create an array of 5 number and log the sum using .reduce().
let array=[2,4,6,8,10]
let answer= array.reduce(function(acc,value)
{
    return acc+val;
},0)
console.log(answer);

// 3️⃣ Loops (5 Questions)
// 11. Write a for loop to print numbers from 10 to 1 in reverse.
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// 12. Use a while loop to print multiples of 3 from 3 to 30.
let i = 3;
while (i < 30) {
  if (i % 3 == 0) {
    console.log(i);
  }
  i++;
}

// 13. Write a program to calculate the sum of numbers from 1 to 100 using a loop.
let s = 0;
for (let i = 1; i <= 100; i++) {
  s += i;
}
console.log(s);

// 14. Create a nested loop to print a star pattern.
/*
let row= Number(prompt("Enter rows o pattrn:"))
for(let l=1;l<=row;l++)
{
    for(let s=1;s<=l;s++)
    {
        console.log('*')
    }
    console.log('\n')
}
*/ //this is not printing repeatedly. this showing how many time it is printing ..although logic is correct.
// let row= Number(prompt("Enter rows o pattrn:"))
let row = 5;
for (let l = 1; l <= row; l++) {
  let st = "";
  for (let s = 1; s <= l; s++) {
    st += "*";
  }
  console.log(st);
}

// 15. Use a for...of loop to iterate over the string "JavaScript".
let str = "JavaScript";
for (let ch of str) {
  console.log(ch);
}

// 4️⃣ Arrays (5 Questions)
// 16. Remove duplicate values from an array.
let arr = [
  1, 2, 3, 2, 5, 6, 7, 4, 5, 7, 8, 9, 0, 12, 34, 4, 90, 65, 56, 56676, 76, 676,
  436, 4, 34, 23, 41, 23, 23,
];
console.log(arr);
let na = [...new Set(arr)];  //Set: ignores duplicate values but it becomes object. so to transform it into an array we have to write [...new Set()]. new used to create new one.
// ... operator is spread operator which means that spread all elements of previous array to latest one.
// this actualy used to copy an array to another . if we use this way like arr2=arr and then we perform any operation on arr2 it will effect also on arr ass array is a reference type value. thats why we use this spread operator to copy an array to another and in this case operation on arr2 will not hamper arr.
console.log(na);

// 17. Find the second largest number in an array.
