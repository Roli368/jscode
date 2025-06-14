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
/*const person={
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
*/
/*
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();*/


/*async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("failed")), 500),
  );
  const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
}
foo().catch(() => {}); // Attempt to swallow all errors...*/

function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("post data fetched");
    }, 2000);
  });
}
function  fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fetching comment data");
    }, 2000);
  });
}

async function getblogData(){                            
    try {
        console.log("fetching blog data")
      //  const blogData= await fetchPostData()
      //  const commentData= await fetchCommentData()
        const [blogData,commentData]= await Promise.all([fetchPostData(),fetchCommentData(),])
        console.log(blogData)
        console.log(commentData )
        console.log("fetched data")
    } catch (error) {
        console.error("error in fetching blog data",error)
        
    }
}
getblogData()


