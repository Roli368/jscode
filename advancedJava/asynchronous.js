/*function sayHello(){
    console.log("I want to say hello")
}
console.log("roli")
setTimeout(() => {
    sayHello()
}, 4000);

console.log("roli")
*/

//**********************************closure****************************************** */

/*function outer(){
    let count=0
    return function(){
        count++;
        return count;
    }
  
}
let increment= outer();
console.log(increment())
*/

/* *************    promises and promise chaining*************************************/ 
/*function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let success =true;
            if(success){
                resolve("fetched data successfully")              
            }
            else{
                reject("error occured")
            }
        }, 2000);
    })
}
//let response=fetchdata()
//console.log(response)
fetchdata()
    .then((data)=>console.log(data))
    .then((error)=>console.log(error))*/

    /// inheritence prototype
   /* function Person(name){
        this.name=name;
    }
    Person.prototype.greet=function(){
        console.log(`hello i am ${this.name}`);
    };
    let roli= new Person("roli");
    roli.greet();

*/
// this and binding Context
const person={
    name: "roli",
    greet(){
        console.log(`Hi,I am ${this.name}`)
    }
}
person.greet()


const greetFunction=person.greet
greetFunction()


const boundgreet=person.greet.bind({name:"poli"})
boundgreet()
