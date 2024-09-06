// Using Type for defining
// type UserDetails ={
//      name:string;
//      age:number;
// }
// // Extend properties of one type to another type
// type AdminDetails = UserDetails & {
//      role:string;
// }
// const userDetails : UserDetails ={
//      name:" Veena Vinayan",
//      age:35,
// }
// const adminDetails : AdminDetails={
//     name:"Shivadh Pradheesh",
//     age:5,
//     role:"Admin",
// }
var userDetails = {
    name: " Veena Vinayan",
    age: 35,
};
var adminDetails = {
    name: "Shivadh Pradheesh",
    age: 5,
    role: "Admin",
};
function getDetails(details) {
    return details;
}
var getUserValue = getDetails(userDetails);
console.log("User Values ::" + getUserValue.name + getUserValue.age);
var getAdminValue = getDetails(adminDetails);
console.log("Admin DEtails ::" + getAdminValue.name, getAdminValue.age, getAdminValue.role);
