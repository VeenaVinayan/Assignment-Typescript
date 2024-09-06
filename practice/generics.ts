function getFirstElement(array: (number | string)[]){
     return array[0];
}
const nums=[1,2,3,4,5,6];
const firstNum=getFirstElement(nums);
console.log("First number ::"+firstNum);
const names=["Shiva","Siddhi","Vasudev"];
console.log("Name :"+getFirstElement(names));