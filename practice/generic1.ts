//Generics sample
function createPair<S,T>(v1:S,v2:T):[S,T]{
     return [v1,v2];
} 
console.log(createPair<string,number>('hello',42));
console.log(createPair<boolean,number>(true,52));
console.log(createPair<string,string>("Veena","Vinayan"));
console.log(createPair<string,boolean>('Veena',false));