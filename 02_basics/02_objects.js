// singleton 

// object literals 
const mySym=Symbol("mykey1")  // int question: take symbol in key and print it 

const Jsuser ={
    name:"roli",
    age:19,
    "full_name":"roli_rathour",
    "my name":"neha",
    [mySym]:"mykey1",                   // imp // if [] not give then work as string
    location: "mitauli",
    email: "roli@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","sunday"]

}
/*console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser.full_name)
console.log(Jsuser["my name"]);
console.log(Jsuser[mySym]) */

Jsuser.email="roli@microsoft.com"
//Object.freeze(Jsuser);
Jsuser.email="roli@chatgpt.com"
//console.log(Jsuser)

Jsuser.greeting=function(){
    console.log("Hello Js user");
}
Jsuser.greetingTwo=function(){
    console.log(`Hello Js User ,${this.name}`)
}
//console.log(Jsuser.greeting());
//console.log(Jsuser.greetingTwo());


//******************************************************************************8**********8 */

// const tinderUser= new Object()  // singleton
const tinderUser ={}                            // both are same
//console.log(tinderUser);

tinderUser.id="123abc"
tinderUser.name="Sammty"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser={
    email:"some2gail.com",
    fullName:{
        userfullname:{
            firstname:"roli",
            lastName:"rathour"
        }
    }
}
//console.log(regularUser.fullName)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//const obj4={obj1,obj2,obj3}
//const obj4=Object.assign({},obj1,obj2,obj3)
// const obj4={...obj1[1],...obj2,...obj3}   // most used
//console.log(obj4);

const users = [
    {
        id:1,
        email:"r@gmail.com",
    },
    {
        id:1,
        email:"r@gmail.com",
    },
    {
        id:1,
        email:"r@gmail.com",
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//*********** OBJECT DE-STRUCTURE AND JSON API INTRO **************************8 */

const course ={
    coursename:"Js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor
const {courseInstructor:instructor}=course
// console.log(courseInstructor);
console.log(instructor);

// ************API***************
// API is a type of values that now days come in JSON    

/*{
    "name":"roli",
   " coursename":"javascript",
   " price":"free",
}*/








