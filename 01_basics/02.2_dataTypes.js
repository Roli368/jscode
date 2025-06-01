// primitive   call by value
 //they are 7 number,string,boolean,null,undefined, symbol,BigInt

const score=100
const scoreValue=100.6
const isLoggedIn=false
const outsideTemp=null
let useremail;
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);
const bigNumber=577764534209964356n

// reference (non primitive)
// arrey,object,function

const heros=["salman","naagraj"]
let myobj={
    name:"Roli",
    age:22,
}

const myFunction=function(){
    console.log("hello world");
    
}