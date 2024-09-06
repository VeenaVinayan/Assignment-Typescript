// Pattern Printing
let limit:number = 5;
let i,j,k:number;
let r:string;
for(i=0,k=1;i<limit;i++){
    r=' ';
    for(j=0;j<=i;j++){
       r+=k+" ";
       k++;
    }
    console.log(r);
}