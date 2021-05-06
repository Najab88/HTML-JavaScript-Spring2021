//array of choices
var rps = []
rps[0] = "Rock"
rps[1] = "Paper"
rps[2] = "Scissors"

//array for buttons
var btn = document.querySelectorAll('button')

//assign event listeners buttons
//rock
btn[0].addEventListener('click', function (e) { playGame(0) })
//paper
btn[1].addEventListener('click', function (e) { playGame(1) })
//scissors
btn[2].addEventListener('click', function (e) { playGame(2) })

function playGame(playerChoice) {

    //generate computer choice
    var cpuChoice = Math.floor(Math.random() * 2.99)

    //example of switch case
    switch (playerChoice) {

        //rock
        case 0:
            if (cpuChoice == 0) {
                //its a tie
                showResults("Rock", "Rock", "Tie")
            }
            else if (cpuChoice == 1) {
                //computer wins
                showResults("Rock", "Paper", "Loser!")
            }
            else {
                //player wins
                showResults("Rock", "Scissors", "Winner!")
            }
            break;
        //paper
        case 1:
            if (cpuChoice == 0) {
                //player wins
                showResults("Paper", "Rock", "Win")
            }
            else if (cpuChoice == 1) {
                //tie
                showResults("Paper", "Paper", "Tie!")
            }
            else {
                // cpu wins
                showResults("Paper", "Scissors", "Loser!")
            }
            break;
        //scissors
        case 2:
            if (cpuChoice == 0) {
                //cpu wins
                showResults("Scissors", "Rock", "Loser")
            }
            else if (cpuChoice == 1) {
                //player wins
                showResults("Sciccors", "Paper", "win!")
            }
            else {
                //tie
                showResults("Scissors", "Scissors", "Tie!")
            }
            break;
    }
}

function showResults(pChoice, cChoice, result) {
    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("result").innerHTML = result
}