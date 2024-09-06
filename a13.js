// Check palindrome string
function checkPalindrome(str) {
    var n = str.length;
    for (var i = 0, j = n - 1; i <= j; i++, j--) {
        if (str[i] != str[j]) {
            return false;
        }
    }
    return true;
}
var s = 'malayalam';
var values = checkPalindrome(s);
console.log(s + "  Is palindrome ::" + values);
s = 'English';
values = checkPalindrome(s);
console.log(s + " Is palindrome ::" + values);
