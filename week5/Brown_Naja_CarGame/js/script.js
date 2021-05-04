var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var timer = requestAnimationFrame(main)
var x = 5

var xpos = 20
var start = 58
var finish = 956

//if game is over
var gameOver = true
var chi = new Image()
chi.src = "images/chi.png"
chi.onload = function () {
    main()
}
var bath = new Image()
bath.src = "images/bath.jpg"
bath.onload = function () {
    main()
}

//Fuel Variables
var startFuel = randomNumber(600, canvas.width)
var fuel = startFuel
var fullBarWidth = 512


var sec = 3
var fps = 60
var frames = fps


document.addEventListener('keydown', keyPressDown)
document.addEventListener('keyup', keyPressUp)

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //draw images
    ctx.drawImage(bath, 0, 0, 1024, 768)
    ctx.drawImage(chi, xpos, canvas.height / 2 - 90, 100, 90)
    


    
    timer = requestAnimationFrame(main)

    if (gameOver) {
        ctx.fillStyle = "black"
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2)
    }
    else {
        if (!gameOver && sec > 0) {

            runStartTimer()
            drawStartTimer()
        } else {
            if (gameOver == false && fuel > 0 && sec <= 0) {
                 
                xpos++;
                fuel--;
            }
        }
    }



    drawStartLine()
    drawFinishLine()
    drawFuelBar()
    drawFuelText()

    
    if (xpos > finish + 10 || fuel <= 0) {
        drawResults()
    }

}

function keyPressDown(e) {
    console.log(e.keyCode)

    if (e.keyCode == 32) {
        if (!gameOver && fuel <= 0) {
            restartGame()
        }
        gameOver = false
    }
}

function keyPressUp(e) {
    console.log(e.keyCode)
    if (e.keyCode == 32) {

    }
}

function drawStartLine() {
    ctx.strokeStyle = "white"
    ctx.strokeRect(start, 122, 13, 600)
    ctx.lineWidth = 3
    ctx.fillStyle = "rgba(67, 139, 7, 0.781)"
    ctx.fillRect(start, 122, 13, 600)
}

function drawFinishLine() {
    ctx.strokeStyle = "white"
    ctx.strokeRect(finish, 122, 13, 600)
    ctx.lineWidth = 3
    ctx.fillStyle = "rgba(117, 116, 197, 0.836)"
    ctx.fillRect(finish, 122, 13, 600)

}


function drawFuelBar() {
    var barCurrentWidth = fullBarWidth * getFuelPercentage()
    ctx.strokeStyle = "white"
    ctx.strokeRect(start, 30, fullBarWidth, 15)
    ctx.lineWidth = 3
    ctx.fillStyle = "rgba(214, 10, 10, 0.685)"
    ctx.fillRect(start, 30, fullBarWidth, 15)

    if (fuel > 0) {
        ctx.fillStyle = "coral"
        ctx.fillRect(start, 30, barCurrentWidth, 15)
    }
}

function getFuelPercentage() {
    return fuel / startFuel
}

function drawFuelText() {
    ctx.fillStyle = "black"
    ctx.font = "25px Fantasy"
    ctx.fillText(fuel, start, 25);
}

function runStartTimer() {
    frames -= 1;
    if (frames < 0) {
        frames = fps
        sec -= 1
    }
}

function drawStartTimer() {
    ctx.fillStyle = "black"
    ctx.font = "25px Fantasy"
    ctx.textAlign = "center"
    ctx.fillText(sec, canvas.width / 2, canvas.height / 2);
}

function randomNumber(high, low) {
    return Math.round(Math.random() * (high - low) + low)
}

function drawResults() {
    if (xpos > finish) {
        ctx.fillStyle = "black"
        ctx.font = "25px Fantasy"
        ctx.textAlign = "center"
        ctx.fillText("You made it to the finish, You Win!!!", canvas.width / 2, canvas.height / 2);
    } else {
        ctx.fillStyle = "black"
        ctx.font = "25px Fantasy"
        ctx.textAlign = "center"
        ctx.fillText("You ran out of fuel... You Lose :(", canvas.width / 2, canvas.height / 2);
    }
}

function restartGame() {
    location.reload();
}
