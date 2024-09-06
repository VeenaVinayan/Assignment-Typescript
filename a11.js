// Find cout of an Even number in an array
function countEvenNumberOfArray(arr) {
    var i = 0;
    var count = 0;
    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            count++;
        }
        i++;
    }
    return count;
}
var list = [3, 4, 6, 8, 9, 10, 13, 15, 20, 21];
var res = countEvenNumberOfArray(list);
console.log("Even Count = " + res);
