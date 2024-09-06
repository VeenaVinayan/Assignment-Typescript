// find simple Interst
function simpleInterest(p:number,n:number,r:number){
    let si : number;
    si=(p*n*r)/100;
     return si;
}
let result : number;
result=simpleInterest(15000,2,12);
console.log("Simple Interest ::"+result);