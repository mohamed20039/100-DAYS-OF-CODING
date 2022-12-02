number1 = Number(prompt("Enter the first number1: "))

operator = Number(prompt("1.+\n2.-\n3.*\n4./"))

number2 = Number(prompt("Enter the first number2: "))


if (operator == 1) {
  sum = number1 + number2

  console.log(`The sum of these numbers is ${sum}`)
}


else if (operator == 2) {
  subs = number1 - number2

  console.log(`The substraction of these numbers is ${subs}`)
}

else if (operator == 3) {
  product = number1 * number2

  console.log(`The product of these numbers is ${product}`)
}

else if (operator == 4) {
  result = number1 / number2

  console.log(`The sum of these numbers is ${result}`)
}

else{
  console.log("Enter a valid operator")
}