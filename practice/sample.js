function getAge(age) {
    return age;
}
console.log(getAge(20));
console.log(getAge("20"));
var userDetail = {
    name: "Veena Vinayan",
    age: 30,
};
var adminDetail = {
    name: "Shivadh Pradeesh",
    role: "Admin",
};
function getDetails(details) {
    return details;
}
var userValue = getDetails(userDetail);
var adminValue = getDetails(adminDetail);
console.log("User Value " + userValue.age, userValue.name);
console.log("Admin Value ::" + adminValue.name, adminValue.role);
