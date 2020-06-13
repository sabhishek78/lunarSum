function lunarSum(num1,num2){
let resultArray=[];
num1Array=num1.toString().split('').reverse();
num2Array=num2.toString().split('').reverse();
if(num1Array.length>num2Array.length){
 [num1Array,num2Array]=makeArraysEqualLength(num1Array,num2Array);
}
else if(num1Array.length<num2Array.length){
 [num2Array,num1Array]=makeArraysEqualLength(num2Array,num1Array);
}
for(let i=0;i<num1Array.length;i++){
  if(num1Array[i]>num2Array[i]){
    resultArray.push(num1Array[i]);
  }
  else if(num1Array[i]<num2Array[i]){
    resultArray.push(num2Array[i]);
  }
  else{
    resultArray.push(num1Array[i]);
  }
}
return parseInt(resultArray.reverse().join(''));
}
function makeArraysEqualLength(greaterArray,smallerArray){
 let diff=greaterArray.length-smallerArray.length;
  while(diff>0){
    smallerArray.push('0');
    diff--;
  } 
  return [greaterArray,smallerArray];
}
console.log(lunarSum(246, 317));
console.log(lunarSum(134, 54));
console.log(lunarSum(20, 140));

// When two numbers are added together, the strange Lunar arithmetic is used on the Moon. The Lunar sum of two numbers is not determined by the sum of their individual digits, but by the highest digit of the two taken into account at each step, in columnar form.

// 2  4  6  +
// 3  1  7  =
// --------
// 3  4  7

// // 3 > 2 | 4 > 1 | 7 > 6

// 1  3  4  +
//    5  4  =
// --------
// 1  5  4

// //  1 > 0 | 5 > 3 | 4 == 4
// // Blank spots in the columnar form are equals to 0

//    2  0  +
// 1  4  0  =
// -------
// 1  4  0

// // 1 > 0 | 4 > 2 | 0 == 0
// Given two positive integers number1 and number2, implement a function that returns their sum as a new integer.