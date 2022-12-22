
document.querySelector("button").addEventListener("click" , function (){
    let weight = document.getElementById("weight").value

    let height = document.getElementById("height").value

    height = height / 100

    
    result = (weight / (height * height))

    

    document.getElementById("bmi").innerHTML = result.toFixed(2)

    if (height=='' || weight ==''){
        alert("Please Enter Values into Input Fields!")
        
    }
    display = ''

    if (result<18.5){
        display = "Underweight"
    }
    else if (result >= 18.5 && result < 25){
        display="Healthy"
    }
    else if (result >= 25 && result < 30){
        display="Overweight"
    }
    else{
        display = "Obese"
    }

    console.log(display)
    document.getElementById("comment").innerHTML = `You're <span>${display}<span>`
});