var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var timer = requestAnimationFrame(main)

var xpos = 20
var start = 50
var finish = 750

//boolean for if game is over
var gameOver = true

//var for image
var kodama = new Image()
kodama.src = 'images/kodama.png'

kodama.onload = function () {
    main()
}

//fule var
var startFuel = 750
var fuel = startFuel
var fullBarWidth = 300

//adding keypresses
document.addEventListener('keydown', keyPressDown)
document.addEventListener('keyup', keyPressUp)

function main() {
    //call frame
    timer = requestAnimationFrame(main)

    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (gameOver == false && fuel > 0) {
        // update values
        xpos++;
        fuel--;
    }

    //draw the things

    //draw start and finish lines
    drawStartLine()
    drawFinishLine()
    //car
    drawCar()
    drawCarImage()

    //draws the fuel bar hud
        drawFuelBar()
drawFuelText()

}

function keyPressDown(e) {
    console.log(e.keyCode)

    //pressing spacebar
    if (e.keyCode == 32) {

        //toggles game over on keypress
        gameOver = !gameOver
        document.removeEventListener("keydown", keyPressDown)
    }

}

function keyPressUp(e) {
    console.log(e.keyCode)
    //pressing spacebar
    if (e.keyCode == 32) {
        gameOver = true
    }
}

function drawStartLine() {
    ctx.fillStyle = "black"
    ctx.fillRect(start, 50, 10, 500)
}

function drawFinishLine() {
    ctx.fillRect(finish, 50, 10, 500)
}

function drawCar() {
    ctx.fillStyle = "brown"
    ctx.fillRect(xpos, canvas.height / 2, 30, 20)
}

function drawCarImage() {
    ctx.drawImage(kodama, xpos, canvas.height / 2 - 90, 100, 100)
}

function drawFuelBar() {
    var barCurrentWidth = fullBarWidth * getFuelPercentage()

    ctx.fillStyle = "black"
    ctx.fillRect(start, 30, fullBarWidth, 10)
    if (fuel > 0) {
        ctx.fillStyle = "orange"
        ctx.fillRect(start, 30, barCurrentWidth, 10)
    }
}

function getFuelPercentage() {
    return fuel / startFuel
}
function drawFuelText(){
    ctx.fillStyle = "black"
    ctx.font = "25px Ariel"
    ctx.fillText(fuel,start,25)
}