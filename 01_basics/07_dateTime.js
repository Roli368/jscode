let mydate = new Date()
//console.log(mydate) 

//console.log(mydate.toString())
//console.log(mydate.toDateString())
//console.log(typeof mydate)

//console.log(mydate.toLocaleDateString())

//let myCreatedDate = new Date(2025,0,2)                // jan 0
//let myCreatedDate = new Date(2025,0,2,9,8)
//console.log(myCreatedDate)
//console.log(myCreatedDate.toDateString())


//let myCreatedDate = new Date("2025-01-12")           // jan by 1
let myCreatedDate = new Date("12-01-2025") 
//console.log(myCreatedDate.toLocaleString());


let myTimeStamp= Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime())

//console.log(Date.now())   // number of mili seconds from jan 1 1970 to now  
//console.log(Math.floor(Date.now()/1000))   // in seconds

let newDate= new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth())
console.log(newDate.getFullYear())

//console.log(`$(newDate.getDay())`) 
newDate.toLocaleString('default',{
    weekday:"long"
})


