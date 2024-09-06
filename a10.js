//Swap values of 2 arrays
function swapValuesOfArray(first, second) {
    var n1 = first.length;
    var n2 = second.length;
    var i;
    if (n1 != n2) {
        console.log("Arrays are different size !!");
        return;
    }
    var temp;
    for (i = 0; i < n1; i++) {
        temp = first[i];
        first[i] = second[i];
        second[i] = temp;
    }
}
var n1 = [2, 4, 5, 7, 8, 9, 10];
var n2 = [12, 14, 15, 17, 18, 19, 24];
swapValuesOfArray(n1, n2);
console.log("AFTER SWAPPING");
console.log("First Array :" + n1);
console.log("SEcond Array ::" + n2);
n1 = ['abc', 'def', 'ghi', 'jkl'];
n2 = ['pqr', 'stu', 'vwx', 'yza'];
swapValuesOfArray(n1, n2);
console.log("AFTER SWAPPING");
console.log("First Array :" + n1);
console.log("SEcond Array ::" + n2);
