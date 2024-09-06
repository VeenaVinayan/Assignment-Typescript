// Find cout of an Even number in an array
function countEvenNumberOfArray(arr:number[]):number{
     let i:number=0;
     let count:number=0;
     while(i<arr.length){
        if(arr[i]%2 === 0){
             count++;
        } 
        i++;
     }
    return count;
}

let list: number[]=[3,4,6,8,9,10,13,15,20,21];
let res:number = countEvenNumberOfArray(list);
console.log("Even Count = "+res);