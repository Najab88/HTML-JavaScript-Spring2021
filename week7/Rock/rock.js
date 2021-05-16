
// setup canvas
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var gameStates = []
var currentState = 0
var pScore = 5
var cScore = 5
var gameOver = true

var rps = []
rps[0] = `Rock`
rps[1] = `Paper`
rps[2] = `Scissors`

//buttons
var btn = document.querySelectorAll(`a`)

btn[0].addEventListener(`click`, function (e) {
    play(0)
})
btn[1].addEventListener(`click`, function (e) {
    play(1)
})
btn[2].addEventListener(`click`, function (e) {
    play(2)
})


//images
var rock = new Image()
rock.src = "images/rock.png"
rock.onload = function () {
    main()
}
var paper = new Image()
paper.src = "images/paper.png"
paper.onload = function () {
    main()
}
var scissors = new Image()
scissors.src = "images/scissors.png"
scissors.onload = function () {
    main()
}
var dark = new Image()
dark.src = "images/dark.jpeg"
dark.onload = function () {
    main()
}

//setup Key Presses
document.addEventListener("keydown", keyPressDown)
document.addEventListener("keyup", keyPressUp)

function keyPressDown(e) {
    console.log(e.keyCode)
}

function keyPressUp(e) {
    console.log(e.keyCode)
    if (gameOver == true) {
        if (e.keyCode == 32) {
            //this is spacebar
            changeState()
        }
    }
}
function changeState() {
    if (currentState >= gameStates.length - 1) {
        currentState = 0
    }
    else {
        currentState++
    }

}
//rps choices
function play(pChoice) {

    var cChoice = Math.floor(Math.random() * 2.999999)

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
function main() {

    //clear canvas
    ctx.clearRect(0, 0, canvas.Width, canvas.height)
    gameStates[currentState]()
    //call main function
    timer = requestAnimationFrame(main)


}
function showResults(pChoice, cChoice, result) {

    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("result").innerHTML = result
}

//first screen
gameStates[0] = function () {

    // intro text
    ctx.strokeStyle = "white"
    ctx.strokeRect(125, 115, 580, 50)
    ctx.lineWidth = 3
    ctx.fillStyle = "rgba(0, 0, 0, 0.604)"
    ctx.fillRect(125, 115, 580, 50)
    ctx.font = "30px Arial"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.fillText("Lets Play Rock, Paper Scissors!", 415, 150)

    //intro button
    ctx.strokeRect(245, 319, 320, 60)
    ctx.fillStyle = "rgba(0, 0, 0, 0.604)"
    ctx.fillRect(245, 319, 321, 60)
    ctx.fillStyle = "white"
    ctx.font = "20px Arial"
    ctx.fillText("(Press Spacebar To Start)", 400, 355)
}

// second screen
gameStates[1] = function () {

    gameOver = false

    //draw images second screen
    ctx.drawImage(dark, 0, 0, canvas.width, canvas.height) //background
    ctx.drawImage(rock, 100, 320, 125, 75)
    ctx.drawImage(paper, 360, 320, 125, 75)
    ctx.drawImage(scissors, 600, 320, 125, 75)



    //player box rock

    ctx.strokeStyle = "white"
    ctx.strokeRect(125, 428, 72, 37)
    ctx.lineWidth = 3
    ctx.fillStyle = "rgba(0, 0, 0, 0.604)"
    ctx.fillRect(125, 428, 72, 37)
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.font = "16px Arial"
    ctx.fillText("Rock", 161, 452)

    //player box paper
    ctx.strokeStyle = "white"
    ctx.strokeRect(385, 428, 72, 37)
    ctx.lineWidth = 3
    ctx.fillStyle = "rgba(0, 0, 0, 0.604)"
    ctx.fillRect(385, 428, 72, 37)
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.font = "16px Arial"
    ctx.fillText("Paper", 421, 452)

    //player box scissors
    ctx.strokeStyle = "white"
    ctx.strokeRect(625, 428, 72, 37)
    ctx.lineWidth = 3
    ctx.fillStyle = "rgba(0, 0, 0, 0.604)"
    ctx.fillRect(625, 428, 72, 37)
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.font = "16px Arial"
    ctx.fillText("Scissors", 660, 452)

    //player score
    ctx.fillStyle = "white"
    ctx.font = "18px Arial"
    ctx.fillText("Player Score", 88, 32)

    //player number score
    ctx.fillStyle = "white"
    ctx.font = "18px Arial"
    ctx.fillText("0", 88, 62)

    //computer score
ctx.fillStyle = "white"
ctx.font = "18px Arial"
ctx.fillText("Player Score", 698, 32)

//computer number score
ctx.fillStyle = "white"
ctx.font = "18px Arial"
ctx.fillText("0", 698, 62)

    //pick your hands
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.font = "30px Arial"
    ctx.fillText("Pick Your Hand", 415, 62)

    

    if (pScore > 5) {
        if (cScore > 5)
            gameOver = true
    }
}

//game over screen
gameStates[2] = function () {
    ctx.fillStyle = "blue"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.font = "30px Arial"
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 30)
    ctx.font = "15px Arial"
    ctx.fillText("(Press Spacebar For Main Menu)", canvas.width / 2, canvas.height / 2 + 15)
}
