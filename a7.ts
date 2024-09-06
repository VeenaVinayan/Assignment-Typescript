// Multiplication of a number 
function multiplicationTable(num:number,range:number){
    let i:number;
    console.log("Multiplication Table !!");
    for(i=1;i<=range;i++){
        console.log(i +" * " + num + " = "+ (num*i));
    }   
}

multiplicationTable(8,10);