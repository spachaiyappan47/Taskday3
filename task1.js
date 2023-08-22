const { isDeepStrictEqual } = require("util")

let obj1={name:"person 1",age:5}
let obj2={age:5,name:"person 1"}
console.log(isDeepStrictEqual(obj1,obj2));