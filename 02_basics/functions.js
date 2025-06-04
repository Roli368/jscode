/*1== write a function named `makeTea` that takes one paramerter `typeTea` and returns a string like `"Making green tea"` when called with
"green tea" Store the result in a variable named `teaOrder`*/
function makeTea(typeTea){
    return `making${ typeTea}`
}
let teaorder= makeTea("  green tea")
//console.log(teaorder)
/**2== Create a function named `order` that takes one parameter ,`teaType` . Inside this function ,create another function named`confirmOrder`
  that returns a message like`"Order confirmed for chai"`. Call `confirmOrder` from within `ordertea` and return the result
 */
// function order(teatype){   
//     function confirmOrder(teatype){
//         return `order confirmed for${teatype} `
//     }
//     return confirmOrder(teatype)
// }
// let ordertea= order(" samosa")
//console.log(ordertea)


function orderTea(teatype){   
    function confirmOrder(){
        return `order confirmed for chai `;
    }
    return confirmOrder()                           // by sir but not working
}
let Orderconfirmation= orderTea(" samosa")
//console.log(Orderconfirmation)


  /**3== write an arrow function named `calculatedTotal ` that takes two parameter: `price` and `quantity` . the function should return the 
   cost by multiplying the `price` and `quantity`.
   */
  const calculatedTotal=(price,quantity)=>{
    return `total cost ${price*quantity}`
  } 
  let cost= calculatedTotal(90,5)
 // console.log(cost)


  /* const testOne=()=>{
    console.log(this)                                                   run in console 
    }
     */

 /**4. Write a function named `processteaOrder ` that takes another function , `make ` as a parameter and calls it with
 argument `"earl grey"` .return the result of calling `maketea`  */
 
function makeTea(typeofTea){
    return `maketea: ${typeofTea}`;
}
function processteaOrder(teaFunction){          // heigher order function means function under function
    return teaFunction("earl grey");
}
let Order =processteaOrder(makeTea);
//console.log(Order);

 /* 5. write a functionn named ` createTeaMaker` that returns another function. the returned function shoould take one parameter
 ,`teaType` , and return a message like ` Making green tea` . store the returned function in a variable named `teamaker`
  and call it with `"green tea"` */

  function createTeaMaker(){
    return function (teaType){
    return `making ${teaType}`
    }
   
  }
  let teamaker= createTeaMaker()                 // nested function imp
  let result= teamaker("green tea")
 console.log(result)