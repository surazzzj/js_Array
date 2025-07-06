/* -------------------------------------------- Remove Duplicates -------------------------------------------- */

const arr = [1, 2, 2, 3, 4, 4];
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
    }
}   
console.log(uniqueArr);



/* ____________________________ using Set ____________________________ */

const arr1 = [1, 2, 2, 3, 4, 4];
let uniqueArr1 = new Set(arr1);
uniqueArr1 = [...uniqueArr1];
console.log(uniqueArr1);

/* ____________________________ using filter ____________________________ */

const arr2 = [1, 2, 2, 3, 4, 4];
const uniqueArr2 = arr.filter((val, index) => arr.indexOf(val) === index);
console.log(uniqueArr2);
