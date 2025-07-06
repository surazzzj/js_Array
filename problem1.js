/* ---------------------------------------- Maximum Num ---------------------------------------- */

const arr = [4,2,8,9];
let elem = arr[0];

for(let val of arr){
    if(val > elem){
        elem = val;
    }
}

console.log(elem); // Output: 9



/* ____________________________ using Math.max ____________________________ */

const arr2 = [4, 2, 8, 9];

const maxElem = Math.max(...arr2);
console.log(maxElem); 