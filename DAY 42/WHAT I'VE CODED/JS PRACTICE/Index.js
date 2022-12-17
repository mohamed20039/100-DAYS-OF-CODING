//Array methods

//Reduce


nums = [1,2,3,4]

const result = nums.reduce(function(prev,curr){
  return prev + curr
})
console.log(result)

//without functioning

const sum = nums.reduce((a,b) => a+b,-10)

console.log(sum)



