// Pattern printing
function patternPrinting(range) {
    var i;
    var j;
    var s = '';
    for (i = 1; i <= range; i++) {
        s = '';
        for (j = 1; j <= i; j++) {
            s += j + " ";
        }
        console.log(s);
    }
}
patternPrinting(5);
