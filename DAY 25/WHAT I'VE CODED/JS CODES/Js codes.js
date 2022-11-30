//Arrow function =>

//Arrow function with explicit return
const sum1 = (a, b) => {
  return a + b
}
console.log(sum1(1, 33))


//Arrow function  => with implicit retutn and removed curly braces {}

const sum = (a, b) => a + b

console.log(sum(1, 2))


//Adding function

function Add(a, b) {
  return a + b
}

//Adding function in Arrow function form with explicit and implicit return

const Add1 = (a,b) => {
  return a + b
}

const Add2 = (a, b) => a + b

console.log(Add(20,2),Add1(20,2) ,Add2(20,20))


//Substraction function

function Subs(a, b) {
  return a - b
}

//Substraction function in Arrow function form with explicit and implicit return

const Subs1 = (a,b) => {
  return a - b
}

const Subs2 = (a, b) => a - b


console.log(Subs(20,2),Subs1(20,2) ,Subs2(20,20))

//Multiplication function

function Mul(a, b) {
  return a * b
}

//Multiplication function in Arrow function form with explicit and implicit return

const Mult1 = (a,b) => {
  return a * b
}

const Mul2 = (a,b) => a * b

console.log(Mul(20,2),Mult1(20,2) ,Mul2(20,20))


//Dividing function

function Div(a,b){
  return a/b
}

//Adding function in Arrow function form with explicit and implicit return

const Div1 = (a,b) => {
  return a/b
}

const Div2 = (a,b) => a/b

console.log(Div(20,2),Div1(20,2) ,Div2(20,20))