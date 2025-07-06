/* ----------------------------------- Reverse array ----------------------------------- */

const arr = [4, 2, 8, 9];
const reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}

console.log(reversedArr); 





/* ____________________________ using reverse ____________________________ */

const arr2 = [4, 2, 8, 9];
const reversedArr2 = [...arr].reverse(); 
console.log(reversedArr2); 
