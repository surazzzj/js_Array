/* -------------------------------------------- Minimum val -------------------------------------------- */ 

const arr = [4, 2, 8, 9];
let elem = arr[0];  

for(let val of arr){
    if(val < elem){
        elem = val;
    }
}   
console.log(elem); 




/* ____________________________ using Math.min ____________________________ */  

const arr2 = [4, 2, 8, 9];
const minElem = Math.min(...arr2);
console.log(minElem); 