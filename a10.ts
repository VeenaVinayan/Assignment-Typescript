//Swap values of 2 arrays
function swapValuesOfArray(first:(number|string)[],second:(number|string)[]):void{
     let n1:number = first.length;
     let n2:number =second.length;
     let i:number;
     if(n1!=n2){
          console.log("Arrays are different size !!");
          return;
     }
     let temp:number|string;
     for(i=0;i<n1;i++){
         temp=first[i];
         first[i]=second[i];
         second[i]=temp;
     }
}
let n1:(number|string)[]=[2,4,5,7,8,9,10]; // using union oprator
let n2:(number|string)[]=[12,14,15,17,18,19,24];
swapValuesOfArray(n1,n2);
console.log("AFTER SWAPPING")
console.log("First Array :"+n1);
console.log("SEcond Array ::"+n2);
n1=['abc','def','ghi','jkl']; // string array
n2=['pqr','stu','vwx','yza'];
swapValuesOfArray(n1,n2);
console.log("AFTER SWAPPING")
console.log("First Array :"+n1);
console.log("SEcond Array ::"+n2);
