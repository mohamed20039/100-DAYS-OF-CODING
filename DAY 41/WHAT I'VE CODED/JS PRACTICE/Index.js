//Array methods

//Filter

//This the traditional way of filtering an array

const filter = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    }
  }
  return result
}

console.log(filter([1,2,3,4,5] ,2))

//And this is the modern way

const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.filter(num => num > 2))
