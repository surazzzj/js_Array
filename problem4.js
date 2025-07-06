/* --------------------------------------- Find index of an element array --------------------------------------- */

const arr = [4, 2, 8, 9];
let index = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 8) {
        index = i;
        break; 
    }
}
console.log(index);



/* ____________________________ using indexOf ____________________________ */

const arr2 = [4, 2, 8, 9];
const index2 = arr2.indexOf(8);
console.log(index2); 


/* ____________________________ using findIndex ____________________________ */

const arr3 = [4, 2, 8, 9];
const index3 = arr3.findIndex(val => val === 8);
console.log(index3);
