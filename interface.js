"use strict";
// Interface method
// interface Details{
//     name: String;
//     age:number;
//     salary:number;
//     getName : () => void;
// }
let p1 = { name: "Vasude",
    age: 24,
    salary: 30000,
    getName() {
        console.log(this.name);
    }
};
//union operator
let skills = ["JS", "CSS", "TS", 10, 10, true];
//optional operator
// Functions
function getUserName(userDetail) {
}
getUserName(p1);
// create inline
function getUser({ name, age }) {
    return name;
}
getUser({ name: "Veena", age: 35 });
let currentStatus = "Completed";
