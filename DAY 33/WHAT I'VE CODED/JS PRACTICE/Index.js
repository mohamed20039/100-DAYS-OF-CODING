//Objects

const person = {
  name: 'David',
  Shirt: 'White',
  age: 20
}



//So basically you can display it with two ways

//The 1st way is dot notation
console.log(person.name)

//The 2nd way bracket notation

console.log(person['age'])


//Assigning objects


//Basically the reason we making the phone number string is if we make it integer it gonna substract it that '-' gonna work as a substraction and it gonna the resukt for us not the phone number so we have to make it string

person.phone = '252-610-000000'

//We can also assign it as a bracket notation

person['property'] = '2 houses'



console.log(person.property)


console.log(person.phone)


//If we tryna display all with in one console it gonna be like this

console.log(person)


//Objects and ES6 arrow function combined am trya be advanced in javascript😂😂😂


const introducer = (name,age) => {

  const me = {
    name: name,
    age: age,
    assets: 100000,
    liabilities: 50000,

    networth: function() {
      return this.assets - this.liabilities
    }
  } 

  
  const intro = `Hi may name is ${me.name} and i'm ${me.age} years old and my networth is ${me.networth()} USD`

  return intro
}


console.log(introducer('Mohammed',20))



//LOOPS

//So basically am learning for loops with arrays let's go with it

const fruits = ['mango','apple','watermelon','orange','jerry','pineapple']

//To display all these fruits i don't to console log all in multiple line you can do it like this with loops

for (let i=0; i<fruits.length; i++){
  console.log(fruits[i])
}


