/* ---------------------------------------- Sum of elements in an array ---------------------------------------- */

const arr = [4, 2, 8, 9];
let sum = 0;

for (let val of arr) {
    sum += val;
}
console.log(sum);



/* ____________________________ using reduce ____________________________ */

const arr2 = [4, 2, 8, 9];
const sum2 = arr2.reduce((acc, val) => acc + val, 0
);
console.log(sum2); 


/* ____________________________ using forEach ____________________________ */

const arr3 = [4, 2, 8, 9];
let sum3 = 0;
arr3.forEach(val => {
    sum3 += val;
}); 
console.log(sum3);
