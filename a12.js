// Sort Array DEscending Order
function sortDescending(arr) {
    var i = 0;
    var j;
    for (i = 1; i < arr.length; i++) {
        var key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] < key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
var array = [5, 6, 1, 8, 10, 14, 3, 100, 90];
sortDescending(array);
console.log("Sorted List " + array);
array = ["Anu", "Zari", "Shiva", "Vasudev", "Parth", "Vsiahnav"];
sortDescending(array);
console.log("Sorted List " + array);
