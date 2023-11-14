let btnSubmit = document.querySelector("[data-Submit]")
let btnClear = document.querySelector("[data-Clear]");
document.getElementById("reset").onclick = reset;

function Results(){
    let Marks = +document.querySelector("[data-Marks]").value
    let Output= document.querySelector("[data-Output]")
switch (true) {
    case Marks <50:
        Output.textContent = "Sorry, but you failed.Try Again next time"
        break;
        case Marks < 60: 
        Output.textContent = "You Passed!"
        break;
        case Marks < 70: 
        Output.textContent = "You Passed with C+"
        break;
        case Marks < 80: 
        Output.textContent = "You Passed with Distinction!"
        break;
        case Marks < 90: 
        Output.textContent = "You Passed with B!"
        break;   
        case Marks < 100: 
        Output.textContent = "You Passed with A!"
        break;
        case Marks == 100: 
        Output.textContent = "You Passed with A+"
        break;
        default :
        Output.textContent = "You`re a ghost!"
        break;


   
}   
}

function reset() {
    let Output= document.querySelector("[data-Output]")
    document.querySelector("[data-Submit]").value =" ";
    document.querySelector("[data-Marks]").value =" "; 
     Output.textContent =""
  }
 

btnSubmit.addEventListener("click",Results)