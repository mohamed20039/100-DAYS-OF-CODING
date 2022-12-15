//Array methods

//Map

Result = [2,1,44,12,9]

Result.map(Result => console.log(Result))

// and it can also do this 

Result.map(Result => console.log(Result**2) )


//Array mapping in a function

const doubleMap = (numbers) => {
  return numbers.map(number => number *2)
  
}

console.log(doubleMap([1,2,3]))

//Am looking for the maximum number in array with mapping