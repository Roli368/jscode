const name = "Rolli"
const gameName=new String('roli_rathour') // string representation 
const repoCount=45
console.log(name+repoCount+"Value")

console.log(`Hello my name is ${name}and my repo count is ${repoCount}`);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('o'));

const newstring= gameName.substring(1,3);
console.log(newstring);

const anotherString=gameName.slice(-12,3)  // can take negative value

const newStringone = "  hitesh   "
console.log(newStringone);
console.log(newStringone.trim());

const url ="https://roli.com/roli%20rathour"  // khali spaces ko %20 jaise daal deta hai
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

let gamified="roli-rtv-ratgjog"
console.log(gamified.split('-'));



