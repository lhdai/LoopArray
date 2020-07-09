/* random number every time the page is reloaded */



let computerGuess = Math.round(Math.random() * 100)
// let x = parseInt(document.getElementById("life"))
// let guessRemaining = x.value
// let x = document.getElementById("life")
// let guessRemaining = x.value

const heart = {
    hard: 5  
    , 
    medium: 
         8
    ,
    easy: 
         12
}
function select(y){
    return heart[y];
}
function pick(){
    let x = document.getElementById("mode")
    let y = x.value
    return select(y)
}
console.log("pick", pick())
let guessRemaining = pick()
document.getElementById("remaining-time").innerHTML = `${guessRemaining}`
let history = []
let guessInput = document.getElementById("guess-input")

guessInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
          clickCount()
          
    }
})

for (let i = 0; i <= history.length; i++){
    if (history[i] == guessInput){
        document.getElementById("number-repeat").innerHTML = "You alr guessed this number"
}}

//Set time counting for the game
let time = 10 // time start from 0
let myTime; // timer will be assign to this variable
function timecounting() {
    myTime = setInterval(() => {
        time -= 1
        if (time == 0){
            timeOut()
       }//
        document.getElementById('timecount').innerHTML = time
    }, 1000)
}

function timeOut() {
    clearInterval(myTime);
  }
// end of Set time counting
function deleteinput()
   {  
   document.getElementById("guess-input").value = "";
   }

function clickCount(){
    guessRemaining--
    if(guessRemaining > 0){
    document.getElementById("remaining-time").innerHTML = `${guessRemaining}`
    } else if(guessRemaining <= 0){
        document.getElementById("remaining-time").innerHTML = `Game over, Play again.`
        document.getElementById("computer-number").innerHTML = `${computerGuess}`
    }
        
    guessInput = document.getElementById("guess-input")
    let guess = guessInput.value
    history.push(guess)
    document.getElementById("history-list").innerHTML = history;
    deleteinput();
    
    if ((guess == computerGuess) && (guessRemaining >= 0)) {
        document.getElementById("computer-number").innerHTML = `${computerGuess}`
        document.getElementById("win").style.display = "block"
        document.getElementById("low").style.display = "none"
        document.getElementById("high").style.display = "none"
           }else if ((guess < computerGuess) && (guessRemaining > 0)){
            document.getElementById("win").style.display = "none"
            document.getElementById("low").style.display = "block"
            document.getElementById("high").style.display = "none"
                  }else {
                document.getElementById("win").style.display = "none"
                document.getElementById("low").style.display = "none"
                document.getElementById("high").style.display = "block"
                 }
    
}

//Reset game
function reset(){
    computerGuess = Math.round(Math.random() * 100)
    console.log(computerGuess)
    guessRemaining = pick()
    document.getElementById("remaining-time").innerHTML = `${guessRemaining}`
    history = []    
    document.getElementById("history-list").innerHTML = history;
    document.getElementById("computer-number").innerHTML = ""
    document.getElementById("win").style.display = "none"
    document.getElementById("low").style.display = "none"
    document.getElementById("high").style.display = "none"
    time = 10
    timecounting()
}
