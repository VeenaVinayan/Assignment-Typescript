// Interface method
// interface Details{
//     name: String;
//     age:number;
//     salary:number;
//     getName : () => void;
// }

// let p1: Details = {name:"Vasude",
//      age:24,
//      salary:30_000,
//      getName(){
//           console.log(this.name);
//      }
// }

// type method
type Details={
    name: String;
    age:number;
    salary ?:number;
    getName ?: () => void; //optional operator
}

let p1: Details = {name:"Vasude",
     age:24,
     salary:30_000,
     getName(){
          console.log(this.name);
     }
}
//union operator
let skills : (string|number|boolean)[]= ["JS","CSS","TS",10,10,true];
//optional operator

// Functions
function getUserName(userDetail:Details){

}
getUserName(p1)

// create inline
function getUser({name,age} : {name:string,age:number}):string{
     return name;
}
getUser({name:"Veena",age:35});

// Named types
type status ="Pending" |"Completed"|"Cancelled";
let currentStatus:status= "Completed";
let user:{name:string,age:number}={
    name :"Veena",
    age:35
}
user.age=30;
