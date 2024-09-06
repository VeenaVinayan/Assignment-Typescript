function getAge<T>(age:T):T{
    return age;
}
console.log(getAge<number>(20));
console.log(getAge<string>("20"));
type UserDetail ={
     name:string;
     age:number;
}
type AdminDetail={
    name:string,
    role:string,
}
const userDetail: UserDetail= {
    name:"Veena Vinayan",
    age:30,
}
const adminDetail:AdminDetail={
    name:"Shivadh Pradeesh",
    role:"Admin",
}
function getDetails<T>(details:T):T{
    return details;
}
const userValue = getDetails<UserDetail>(userDetail);
const adminValue=getDetails<AdminDetail>(adminDetail);
console.log("User Value "+ userValue.age,userValue.name);
console.log("Admin Value ::"+adminValue.name,adminValue.role);