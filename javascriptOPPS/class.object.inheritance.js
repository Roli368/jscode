

/*let car = {
    make:"Toyoto",
    model:"crazy",
    year:2020,
    start: function () {
        return `${this.make} car got started in ${this.year}`
    }
}
//console.log(car.start())
*/
Array.prototype.hitesh = function () {
    return `custom method ${this}`
}
let myarray = [1, 2, 3, 4, 5]
//console.log(myarray.hitesh())
let myNewarray = [1, 2, 3, 4]
//console.log(myNewarray.hitesh())

//*****************************CLASS*********************** */

// functions goes inside the class called methods
class vehicle {
    constructor(model, make) {
        this.model = model
        this.make = make
    }
    start() {
        return `this ${this.model} is from ${this.make}`
    }
}
//********************INHERITANCE************************ */
class car extends vehicle {
    drive() {
        return `${this.make}: this is an inheritance example`
    }
}
let mycar = new car("toytata", "corola")          // these are object which start with let in each type
console.log(mycar.start())
console.log(mycar.drive())
let vehicleOne=new vehicle("torato","corola")
console.log(vehicleOne)


/* Key Features of JavaScript Classes:
Declaration:
Classes are declared using the class keyword, followed by the class name.
Constructor:
The constructor() method is a special method that is automatically called when a new object (instance) of the class is created. It is used to initialize the object's properties.
Methods:
Classes can have methods, which are functions defined within the class. These methods operate on the object's data.
Inheritance:
Classes can inherit properties and methods from other classes using the extends keyword. This allows for code reuse and the creation of hierarchical relationships between classes.
this Keyword:
Inside a class, the this keyword refers to the instance of the class on which the method is called.
Example:
JavaScript

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log("Woof!");
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Breed: ${this.breed}`);
  }
}

// Creating an instance of the Dog class
const myDog = new Dog("Buddy", "Golden Retriever");

// Calling methods on the instance
myDog.bark(); // Output: Woof!
myDog.displayInfo(); // Output: Name: Buddy, Breed: Golden Retriever
Class Expressions:
Classes can also be defined using class expressions, which can be named or unnamed.
JavaScript

// Named class expression
const MyClass = class MyClassName {
  constructor() {
    console.log("Class expression");
  }
};

// Unnamed class expression
const AnotherClass = class {
  constructor() {
    console.log("Unnamed class expression");
  }
};

new MyClass(); // Output: Class expression
new AnotherClass(); // Output: Unnamed class expression */




// geegs for geegs inheritance  is with class with prototype etc