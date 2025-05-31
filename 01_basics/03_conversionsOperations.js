let score="33"
console.log(typeof score);
console.log(typeof (score)); // both return string //string

let valueInNumber=Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //33


let value ="yu89 "
console.log(typeof value);
console.log(typeof (value)); // both return string //string

let valueInNum=Number(value)
console.log(typeof valueInNum); //number
console.log(valueInNum); //NaN     thats why typescript is used

// NaN ka type number hai     

let isLoggedIn="roli"
let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=>true; 0=> false
//""=> false
//"roli"=> true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


