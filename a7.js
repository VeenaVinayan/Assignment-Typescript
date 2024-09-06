// Multiplication of a number 
function multiplicationTable(num, range) {
    var i;
    console.log("Multiplication Table !!");
    for (i = 1; i <= range; i++) {
        console.log(i + " * " + num + " = " + (num * i));
    }
}
multiplicationTable(8, 10);
