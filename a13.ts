// Check palindrome string
function checkPalindrome(str:string):boolean{
    let n:number=str.length;
    for(let i=0,j=n-1;i<=j;i++,j--){
         if(str[i]!=str[j]){
             return false;
         }
    }
    return true;
}

let s:string='malayalam';
let values:boolean = checkPalindrome(s);
console.log(s+"  Is palindrome ::"+values);
s='English';
values = checkPalindrome(s);
console.log(s+" Is palindrome ::"+values);