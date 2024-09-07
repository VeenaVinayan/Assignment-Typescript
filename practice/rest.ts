function sum(...numbers:number[]):number{
     return numbers.reduce((acc,num) => acc+num,0);
}
console.log("Sum ::"+sum(1,2,3,5,4,6,7,8,10));