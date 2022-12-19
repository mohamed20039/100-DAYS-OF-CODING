let titleDiv = document.getElementById('title')

console.log(title.innerText)

//I can change the inner text in javascript that's amazing look

title.innerText = 'Good bye my friend see you soon!'

//And i can even change the inner html like the tags but it needs to be in a div so let's put it in a div

titleDiv.innerHTML = '<p>Ok bye My friend<p>'


//Also i can style in javascript DOM is so amazing

titleDiv.style.backgroundColor = 'red'


let red = document.getElementById('red')

let yellow = document.getElementById('yellow')

let green = document.getElementById('green')

// red.onclick = () => console.log('You touched the red button')

// yellow.onclick = () => console.log('You touched the yellow button')

// green.onclick = () => console.log('You touched the green button')

//And we select all of them at the same time

const squares = document.querySelectorAll('.colorSquare')


// console.log(squares[0].value)

// console.log(squares[1].value)

// console.log(squares[2].value)

//And this line can do what ever that this 3 lines of do


const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
  }
})