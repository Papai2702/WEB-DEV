// 16. Remove duplicate values from an array. let arr = [1, 2, 3, 2, 4, 3, 5];
let arr=[1,1,12,3,3,4,424,5,4123,54,235,13,12423,52344,.3,1,42,43,5,35,1,4,53,645,66,77,,67867,2,23,3,3,3,3,3,]
let ans =[...new Set(arr)];

// Find the second largest number in an array. 
let arr2=[1,2,2,2,2,3,4,4,5,6,7,8,8,8,3,4,5,6,7,8,9,10]

/*Steps:
1. Unique
2.Sort in descending order
3. 1st index.*/
let ans2=[...new Set(arr2)]
let Lsort=ans2.sort(function(a,b)
{
    return b-a;
})
console.log(Lsort[1]);

//or

console.log([...new Set(arr2)].sort(function(a,b)
{
return b-a;
})[1])

// 18. Sort an array in descending order.
arr2.sort(function(a,b){
    return b-a;  //for descending order.  and for asc use a-b;
})
//or
console.log(arr2.sort((a,b)=> b-a));

//19.Reverse an array without using .reverse().
let arr3=[]
for(let i=Lsort.length-1;i>=0;i--)
{
//    console.log(arr3.push(Lsort[i])); //this will print one by one value in different lines
arr3.push(Lsort[i]);
}
console.log(arr3); //this will print all values in one line.
//or
console.log(Lsort.reverse());  //this is not according to  the question.

//20. Find the most frequent element in an array.
let arr4=[1,2,3,5,6,8,5,6,4,2,3,6,4,8,5,9,7,5,1,32,5,5,6,4,3,2,1,5,6,8,7,4,9,2,1,85,56,4,3,2,1,4,7,985,4,63,2,6,4,3,5,3,2,1,4,7,9,52,6]
let obj={}
arr4.forEach(function(value){
    obj[value]===undefined?obj[value]=1:obj[value]++;   //if value is not present in obj then add it and if present then increment the value.
})
let l=0;
for(let i in obj)
{
    if (obj[i]>l)
    {
        l=obj[i];
        ans=i; // i is the value of the most frequent element.

    }
}
console.log(ans); //ans is the value of the most frequent element.

let arrr=[10,20,30,40]
console.log(arrr.slice(1,3)); //this will print the elements from index 1 to 3.
