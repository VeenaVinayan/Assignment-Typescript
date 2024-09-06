// find simple Interst
function simpleInterest(p, n, r) {
    var si;
    si = (p * n * r) / 100;
    return si;
}
var result;
result = simpleInterest(15000, 2, 12);
console.log("Simple Interest ::" + result);
