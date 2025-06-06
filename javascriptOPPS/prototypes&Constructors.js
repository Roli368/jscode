// prototype is properties 
let computer = { cpu: 12, ram: 2, rom:90}
let lenovo = { screen : "HD",__proto__: computer}
let chaitom= {}
//console.log(computer)
//console.log(`lenovo`, lenovo.__proto__);        // in browser it will so more properties //


let car= {model: 12}
let tata= {
    driver :"AI",
    sheet : 34
}
Object.setPrototypeOf(car,tata)

//console.log(Object.getPrototypeOf(tata))

function   data(name,age){
    this.name=name
    this.age=age
}
let mydata = new data("roli",12)  // hre new is very that make link bn this and new // if not write new give undefined
//console.log(mydata)


function tea(type){
    this.type= type
    this.describe= function(){
        return `this is a tea named ${type}`
    }
}
let lemonate = new tea("lemonate")
//console.log(lemonate.describe())

// prototype + constructor
function animal(species){
    this.species= species
    animal.prototype.sound=function(){
            return `${this.species} makes sound`;
    }
}
let dog= new animal("dog")
//console.log(dog.sound())

// ************************ ERROR***************************8

function coldring(name){
    if (!new.target) {
        throw new Error(" plzz enter witth a word new")
      
        
    }
    this.name= name
}
let sprite= new coldring("sprite")

console.log(sprite)

