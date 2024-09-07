// //Intersection Type 
// type Person={
//     name:String;
//     age:Number;
// }
// type Employee={
//     eid:Number;
//     department:"IT";
// }
// type PersonEmployee = Person & Employee;
// const personEmloyee : PersonEmployee = {
//     name:"Veena",
//     age:35,
//     eid:854,
//     department:"IT"
// }
// console.log("Employee Details ::"+personEmloyee.age,personEmloyee.department);

interface Person{
    name:string;
    age:number;
};
interface Employee extends Person{
    eid:number ;
    deparment:string;
}
const employee: Employee ={
    name:"Veena",
    age:35,
    eid:546,
    deparment:"IT",
}
console.log("Data ::",employee.age,employee.eid,employee.name)
