//Grade calculator

const GradeCalc = () => {
  subject1 = Number(prompt("Enter first subject"))
  subject2 = Number(prompt("Enter second subject"))
  subject3 = Number(prompt("Enter third subject"))
  subject4 = Number(prompt("Enter fourth subject"))
  subject5 = Number(prompt("Enter five subject"))

  //So basicaly we gonna add it up

  total=subject1+subject2+subject3+subject4+subject5


  average=total/5

  console.log(`You taked 5 subjects this semester and the total of your exams are ${total} and the average is ${average}%`)

  if (total>470) {
    console.log(`So that's means you are A+`)
  }

  else if(total>450 && total<470) {
    console.log("So that means you are A-")
  }

  else if(total>430 && total<450) {
    console.log("So that's means you are A")
  }

  else if(total>400 && total<430) {
    console.log("So that's means you are B+")
  }

  else if(total>370 && total<400) {
    console.log("So that's means you are B-")
  }

  else if(total>350 && total<370) {
    console.log("So that's means you are B")
  }

  else if(total>330 && total<350) {
    console.log("So that's means you are C+")
  }

  else if(total>300 && total<330) {
    console.log("So that's means you are C-")
  }

  else if(total>270 && total<300) {
    console.log("So that's means you are C")
  }

  else if(total>250 && total<270) {
    console.log("So that's means you are D")
  }

  else{
    console.log("You Failed!")
  }
}


GradeCalc()