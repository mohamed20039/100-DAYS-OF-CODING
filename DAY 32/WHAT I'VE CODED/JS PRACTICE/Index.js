// Arrays

const fruits = ['banana', 'apple', 'grape','blueperry','orange']

console.log(fruits)

choice = prompt("Which fruit you wanna pick")


if (choice.toLowerCase() == 'banana') {
  console.log(`Here is your ${fruits[0]}`)
}

else if (choice.toLowerCase() == 'apple') {
  console.log(`Here is you ${fruits[1]}`)
}

else if (choice.toLowerCase() == 'grape') {
  console.log(`Here is you ${fruits[2]}`)
}

else if (choice.toLowerCase() == 'avacado') {
  console.log(`Here is you ${fruits[3]}`)
}

else {
  console.log("Invalid!")
}


// array slicing

console.log(fruits.slice(0, 2))


//Indexof

console.log(fruits.indexof('orange'))



//array pushing
console.log(fruits.push('grape'))


// Objects

const person
{name: 'David',
  age:20,
  shirt: 'White'
}

console.log(person.shirt)
