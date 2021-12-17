 
 function randomNum(){
    let randomNumber = Math.floor(Math.random()*10)
    return randomNumber
 } 

function generateNumber(){
    renderNumber()
}


function renderNumber(){
     
    firstnumber = randomNum()
    secondnumber = randomNum()
    thirdnumber = randomNum()
    fourthnumber = randomNum()

    
     

     let pin = firstnumber + " " + secondnumber + " " + thirdnumber + " " + fourthnumber
     document.getElementById("pin-el").textContent = pin


    
       
}

function copyText() {
   
    let inputelement = document.createElement("input")
    inputelement.type = "text"
    let getText = document.getElementById("pin-el").textContent
    inputelement.value = getText
    document.body.appendChild(inputelement)
    inputelement.select()
    document.execCommand('copy')
    document.body.removeChild(inputelement)


    alert("copied!")
    
  }