// compare to Object
let obj1={name:"person 1",age:5}
let obj2={age:5,name:"person 1"}

function Equal(first,second){
    for( let i in second){
        if(first[i]===second[i]){
            return true
        }
        
    }
    return false
};

console.log(Equal(obj1,obj2))
