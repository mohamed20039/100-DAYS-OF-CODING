//For loops

const numbers = [1,2,3,4,5,6,7,8,9,10,11]

//We can display for loops in two ways

//The 1st tranditional way is

for (let i=0; i<numbers.length; i++){
  console.log(numbers[i])
}

//And the other modern way is

//and we gonna inside push array this for loop 
let result = []

for (const number of numbers) {
  result.push(number*2)
  console.log(number)
}

console.log(result)

//And this is with function

const double = (digits) => {
  let doubled = []
  for (const digit of digits) {
    doubled.push(digit**2)
  }
  console.log(doubled)
}

console.log(double([2,6,1,3,7,2,8,44,2]))

