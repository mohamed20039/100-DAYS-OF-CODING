// Trying to create function

//So basically this has no function has 0 arguments 
// and it does logs out your name

function myName() {
  console.log('Mohammed')
}

//myName()



//and this one is also a function but the difference is this one has 1 argument

//it also does logs your name
function myName1(name) {
  console.log(name)
}

// myName1('Saddam')


//returning something
function sum(a, b) {
  return a + b
}


// num=sum(1,2,10)

// console.log(num)

// num1=sum(2,9,12)

// console.log(num1)




//Tip amount calculator

function TipCalc(food, tip) {
  tipPercentage = tip / 100

  tipAmount = food * tipPercentage

  total = sum(food, tipAmount)



  return total
}


console.log(TipCalc(20, 10))





