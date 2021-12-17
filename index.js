 
 function randomNum(){
    let randomNumber = Math.floor(Math.random()*9)
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

    if(secondnumber === firstnumber){
        secondnumber =  randomNum() 
        renderNumber()  
    }

    if(thirdnumber=== secondnumber || thirdnumber === firstnumber  ){
       thirdnumber = randomNum() 
       renderNumber() 
    }

    if (fourthnumber === thirdnumber  || fourthnumber === secondnumber || fourthnumber === firstnumber){
        fourthnumber = randomNum()  
        renderNumber()
    }
     

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