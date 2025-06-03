//  declare an array named `teaflavors` that contains the strings `"green tea "` ,`"black tea "`,and `"oolong tea"`.
//  access  first element of array an store it in a variable name `"firstTea"`

let teaflavors=[" green Tea","Black Tea","oolong tea"]
let firstTea =teaflavors[0]
console.log(firstTea)

// use push method
let cities = ["lmp","mitauli", "sitapur","lakhimpur"]
cities.push("mumbai")
console.log(cities)

// remove last and store rest in a in variable last order
let Orders= ["chai","paratha","samosa","laddu"]
let lastOrders=Orders.pop()
console.log(lastOrders)

// creat shoft copy of an array
let popular_cities=["lmp","mitauli", "sitapur","lakhimpur"]
let shoftcopy_cities= popular_cities
popular_cities.pop()                                        // changing in original also chnages shoftcopy
console.log(popular_cities)
console.log(shoftcopy_cities)

// create hardcopy 
let topcities=["lmp","mitauli", "sitapur","lakhimpur"]
let hardcopyCities= [...topcities]
//let hardcopyCities=topcities.slice()                               // method 2
topcities.pop()                                                     //no change in hard copy
console.log(hardcopyCities)

// merge two arry
 let arr1 = ["roi","anupum","akash","himalaya"]
let arr2=["nope","yes","hi"]
let arr3=[...arr1,...arr2]
//let arr3= arr2.concat(arr1)
console.log(arr3)








