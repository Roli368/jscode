// loops 6 types [while; dowhile,for ,forin,forout,foreach]



// sum of numbers from 1 to 5 by while loop   , first check consition then exicute 
let sum =0
let i=1
while (i<=5) {
    sum+=i
    i++  
}
//console.log(sum)

//  write a while loop that countdown from 5 to 1 and store in a array countdown 
let countdown=[]
let j=5
while (j>0) {
    countdown.push(j);
    j--
}
//console.log(countdown)

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
//console.log(multipliedarray)

 
// move the cities of a list to anew array
let newcityList=[]
let cityList=["mumbai","kolkata","agra","delhi"]
for (let l = 0; l < cityList.length; l++) {
    newcityList.push(cityList[l])
}

//console.log(newcityList)

// write a for loop that takes teas from array=["Black tea", "green tea", "chai","milk tea"] and stop when finds "chai" . 
// store allin a new array before " chai" named `selectedTeas
let selectedTeas=[];
let teas=["Black tea", "green tea", "chai","milk tea"];
for (let l = 0; l < teas.length; l++) {
     if (teas[l]==='chai') {
        break;
     }
    selectedTeas.push(teas[l])
}
//console.log(selectedTeas);

/* write a `for` loop that loops through the array `["London","New Yark","paris","Berlin"]`
and skips 'Paris'. store other cities in anew array named visitedcities */
let visitedcities=[];
 let citiesList=["London","New Yark","Paris","Berlin"];
 for (let i = 0; i < citiesList.length; i++) {
    if (citiesList[i]==='Paris' || citiesList[i]==='paris') {
      //   if (citiesList[i]==='Paris') {
        continue;
       
    }
    visitedcities.push(citiesList[i])
 }
 //console.log(visitedcities)

 /* use a `for-of` loop to iterate through the array [1,2,3,4,5,]and stop when the number 4 is found . 
 store the numbers before 4 in an array named `smallnumbers`*/


 //let number1= [1,2,3,4,5,] 
//  let smallnumbers=[]
//  for (const num of number1) {
//     if (num===4) {
//         break
//     }
//     smallnumbers.push(num)
//  }
//  console.log(smallnumbers)

 //
 let number1= [1,2,3,4,5,] 
 let smallnumbers=[]
 for (const num of number1) {
    if (num===4) {
        continue
    }
    smallnumbers.push(num)
 }
 //console.log(smallnumbers)

 /*Use `for-in` loop to loop through an object containing city populatios.      // imp question
  stop the loop when the population of "Berlin "  is found and store all, previous cities'
   populations in a new object named `cityPopulations */
let citiespolpulation= {
    NewDelhi : 39000,
    Bombay:98888,
    Berlin:678234,
    Agara:865564,
}
let newcityPopulation={}
for (const city in citiespolpulation) {
   if (city== "Berlin") {
    break
   }
   newcityPopulation[city]=citiespolpulation[city]
}
//console.log(newcityPopulation)

/*Use `for-in` loop to loop through an object containing large city populatios.                                        // imp question
 skip the cities which have population less than 3 million ,store rest city
   populations in a new object named `newlargecities`*/

   let largecities={
    NewDelhi : 3000000,
    Bombay:9000000,
    Berlin:1000000,
    Agara:8000000,
   }
 let  newlargecities={}
 for (const city in largecities) {
    if (largecities[city]<3000000) {
        continue
    }
    newlargecities[city]=largecities[city]
 }
 //console.log(newlargecities)

 // write a `for each `loop that takes teas from array=["Black tea", "green tea", "chai","milk tea"] and stop when finds "chai" . 
// store all in a new array before " chai" named `availableTeas
 let ties= ["Black tea", "green tea", "chai","milk tea"] 
 let availableTeas=[]
 ties.forEach(function(tea){
    if (tea==="chai") {                    //return is used in place of break in function
        return;
    }
availableTeas.push(tea)
 } )
// console.log(availableTeas)

/* Write a `foreach` loop that iterates through tha array ["Berlin ","tokyo","Synday","Paris"] .Skip "Sydey" and store the other
 cities  in a new array named `traveledcities`*/
let citynames= ["Berlin ","tokyo","Synday","Paris"]
 let traveledcities=[]
 citynames.forEach(function(city){
    if (city==="Synday") {                    //return is used in place of break in function
        return;
    }
traveledcities.push(city)
 } )
 //console.log(traveledcities)

 

/*Write a `for` loop that iterates through the array [2,5,7,9]. Skip the value `7` and multiply the rest by 2.Store the results in a new a
aray named `doubledNumbers` */

let oldarray=[2,5,7,9]
let doubledNumbers=[]
for (let i = 0; i < oldarray.length; i++) {
    if (oldarray[i]===7) {
        continue
    }
doubledNumbers.push((oldarray[i]*2))
}
//console.log(doubledNumbers)

/* Use a `for-of` loop to iterate though the array ["chai","green tea","black tea ", "jasmin tea","herbal tea"]
 and stop when the length of the current tea name is greater than 10.store the teas iterated over in an array named 'shortTeas` */
let tealist=["chai","green tea","black tea ", "jasmin tea","herbal tea"]
let shortTeas=[]
for (const tea of tealist) {
    if (tea.length>9) {
        break
    }
    shortTeas.push(tea)
}
console.log(shortTeas)