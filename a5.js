// find grade 
var percentage = 98;
var grade = "";
if (percentage >= 90) {
    grade = "A";
}
else if (percentage >= 80) {
    grade = "B";
}
else if (percentage >= 70) {
    grade = "C";
}
else if (percentage >= 60) {
    grade = "D";
}
else if (percentage >= 50) {
    grade = "E";
}
else {
    grade = "FAILED";
}
console.log("Grade :: " + grade);
