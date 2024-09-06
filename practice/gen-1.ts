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

// Using Interface to define
interface UserDetails{
     name:string;
     age:number;
}
// Extend properties of one type to another type
interface AdminDetails extends UserDetails  {
     role:string;
}
const userDetails : UserDetails ={
     name:" Veena Vinayan",
     age:35,
}
const adminDetails : AdminDetails={
    name:"Shivadh Pradheesh",
    age:5,
    role:"Admin",
}
function getDetails<T>(details:T): T {
      return details;
}

const getUserValue= <UserDetails>getDetails(userDetails);
console.log("User Values ::"+getUserValue.name+getUserValue.age);
const getAdminValue=<AdminDetails>getDetails(adminDetails);
console.log("Admin DEtails ::"+getAdminValue.name,getAdminValue.age,getAdminValue.role);

