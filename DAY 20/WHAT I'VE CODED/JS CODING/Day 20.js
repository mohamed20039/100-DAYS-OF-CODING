//math rounding

// floor rounds up

var x=10.3847384

console.log(Math.floor(x))

// and ceil rounds up

console.log(Math.ceil(x))


//Math random

console.log(Math.random()*3)


//coditionals
x=2

if (x!==2){
  console.log("Hi I'm Your friend❤️😁")
}
else{
  console.log("Hey I'm your enemy get your ass down i'm just joking😂😂😂")
}
//Object

let person = {
  firstName: 'Mohamed',
  Age: 20,
  Address: 'Warta-Nabada'
}
console.log(person)

//changing the value of property 


//you cam change it this way
person.firstName = 'Solomon'

// or this
person['firstName'] = 'Abdul'

console.log(person.firstName)


//Array

//you can declare it this
const numbers =  new Array(1,3,19,12,1)

console.log(numbers)
//or this way

const laptops=['Hp','Toshiba','Dell','Mac']

console.log(laptops)


console.log(laptops[2])

//you can add a new array in this way
laptops[4]='Microsoft'

/// or this in the end only
laptops.push('Apple')


laptops.unshift('Sample')

// and you can delete in this way

laptops.pop()


