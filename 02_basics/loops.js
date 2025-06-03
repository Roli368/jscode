// loops 6 types [while; dowhile,for ,forin,forout,foreach]

const { forwardRef } = require("react")

// sum of numbers from 1 to 5 by while loop   , first check consition then exicute 
let sum =0
let i=1
while (i<=5) {
    sum+=i
    i++  
}
console.log(sum)

//  write a while loop that countdown from 5 to 1 and store in a array countdown 
let countdown=[]
let j=5
while (j>0) {
    countdown.push(j);
    j--
}
console.log(countdown)

// take tea manually by prompt  untill take stop and push them into a array
// let tea;
// let teacollection =[];
// do {
//   tea=  prompt(` give your favourite tea name ,type "stop" to finish`);
// if (tea!="stop") {
//     teacollection.push(tea)
// }
// } while (tea!="stop");


// multiply array=[2,4,5] by  2 and store in a array named multiplearray  using for loop
let multipliedarray=[]
let numbers=[2,3,4]
for (let l = 0; l < numbers.length; l++) {
    newarray=numbers[l]*2;
 multipliedarray.push(newarray)
    
}
console.log(multipliedarray)

 
// move the cities of a list to anew array
let newcityList=[]
let cityList=["mumbai","kolkata","agra","delhi"]
for (let l = 0; l < cityList.length; l++) {
    newcityList.push(cityList[l])
}
console.log(newcityList)

// write a for loop that takes teas from array=["Black tea", "green tea", "chai","milk tea"] and stop when finds "chai" . 
// store allin a new array before " chai" named `selectedTeas
let selectedTeas=[]
let array=["Black tea", "green tea", "chai","milk tea"]
for (let l = 0; l < array.length; l++) {
    s

}
