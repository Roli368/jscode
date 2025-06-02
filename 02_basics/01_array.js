//array
const myArr=[1,2,3,4,5,6,7]
const myHeros=["shaktiman","naagraj"]

const myarr2=new Array(1,5,7,87,2)
//console.log(myArr[2])

// ARRAY METHODS 
//myArr.push(6)
//myArr.pop()       // removes last elem

//myArr.unshift(7)        // add in starting
//myArr.shift()           // removes start
/*console.log(myArr.includes(9));
console.log(myArr.indexOf(2));
const newArr =myArr.join()

console.log(myArr);
console.log(typeof newArr);*/

// slice splice
//console.log("A",myArr);        // original
const myn1 =myArr.slice(1,3)       

//console.log(myn1);      //2,3
//console.log("B",myArr);     // original arr

const myn2=myArr.splice(1,3)
//console.log("C",myArr)             // 1,5,6,7
//console.log(myn2);                  //2,3,4 


const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros)
//console.log(marvel_heros[3][2])

const all_heros= marvel_heros.concat(dc_heros)    // form a new arr by combine two
//console.log(all_heros)

const all_new_heros=[...dc_heros,...marvel_heros]
//console.log(all_new_heros)

const another_arr=[1,2,3,[3,6,7],[9,87,[2,6,7]]]
const real_another_arr= another_arr.flat(Infinity)
console.log(real_another_arr);


console.log(Array.isArray("roli"))
console.log(Array.from("roli"))
console.log(Array.from({name:"roli"}))          // interview cant directly convert so gives empty

let score1=100
let score2 =200
let score3=300
console.log(Array.of(score1,score2,score3));





