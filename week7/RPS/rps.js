var c = document.getElementById('canvas')
var ctx = canvas.getContext('2d')


//Array of words
var rps = []
rps[0] = `Rock`
rps[1] = `Paper`
rps[2] = `Scissors`

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function (e) {
    play(0)
})
btn[1].addEventListener(`click`, function (e) {
    play(1)
})
btn[2].addEventListener(`click`, function (e) {
    play(2)
})

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice) {

    var cChoice = Math.floor(Math.random() * 2.999999)

function main(){
    clearRect(0,0, canvas.width, canvas.height)
   
   
}

    switch (pChoice) {
        case 0:
            if (cChoice === 0) {
                //display a tie
                showResults("Rock", "Rock", "You Tied")

            }
            else if (cChoice === 1) {
                //display a loss
                showResults("Rock", "Paper", "You Lose")
            }
            else {
                //display a win
                showResults("Rock", "Scissors", "You Win")
            }
            break;

        case 1:
            if (cChoice === 0) {
                //display a tie
                showResults("Paper", "Rock", " You Win")
            }
            else if (cChoice === 1) {
                //display a loss
                showResults("Paper", "Paper", "Tie!")
            }
            else {
                //display a win
                showResults("Paper", "Scissors", "You Lost")
            }
            break;

        case 2:
            if (cChoice === 0) {
                //display a tie
                showResults("Scissors", "Rock", "You Lost")
            }
            else if (cChoice === 1) {
                //display a loss
                showResults("Scissors", "Paper", "You Win")
            }
            else {
                //display a win
                showResults("Scissors", "Scissors", "Tie")
            }
            break;
    }
}
function showResults(pChoice, cChoice, result) {

    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("result").innerHTML = result
}
