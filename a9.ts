// Pattern printing
function patternPrinting(range:number):void{
    let i:number;
    let j:number;
    let s:string='';
    for(i=1;i<=range;i++){
        s='';
         for(j=1;j<=i;j++){
             s+=j+ " ";
         }
         console.log(s);
    }
}
patternPrinting(5);
