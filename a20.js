// Pattern Printing
var limit = 5;
var i, j, k;
var r;
for (i = 0, k = 1; i < limit; i++) {
    r = ' ';
    for (j = 0; j <= i; j++) {
        r += k + " ";
        k++;
    }
    console.log(r);
}
