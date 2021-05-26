var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var ship

var numAsteroids = 10
var asteroids = new Array()
var gameOver = true
var gameStates = []
var currentState = 0
var score = 0
var highScore = 0

var numPower = 1

var power = new Array()
var isInv = false




var first = new Image()
first.src = "images/first.png"

first.onload = function () {
    main()
}
var end = new Image()
end.src = "images/end.png"

end.onload = function () {
    main()
}
var sky = new Image()
sky.src = "images/sky.png"

sky.onload = function () {
    main()
}
var haku = new Image()
haku.src = "images/haku.png"

haku.onload = function () {
    main()
}
var paper = new Image()
paper.src = "images/paper.png"

paper.onload = function () {
    main()
}
//start asteroids function
function randomRange(high, low) {
    return Math.random() * (high - low) + low
}
var haku = new Image()
haku.src = "images/haku.png"

haku.onload = function () {
    main()
}
var oni = new Image()
oni.src = "images/oni.png"

oni.onload = function () {
    main()
}
var hkglw = new Image()
hkglw.src = "images/hkglw.png"

hkglw.onload = function () {
    main()
}

function gameStart() {

    //creat an instance of the player ship 



    //for loop to create the instances of asteroids
    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid()

    }
    for (var i = 0; i < numPower; i++) {
        power[i] = new PowerUp()
    }
    ship = new PlayerShip()

}




//asteriod class (constructor function)
function Asteroid() {
    this.radius = randomRange(79, 41)//sizes
    this.x = randomRange(canvas.width - this.radius, this.radius) - canvas.width
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height //pushes off screen
    this.vx = randomRange(-10, -5)
    this.color = "pink"

    //draw asteroid
    this.drawAsteroid = function () {

        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }
    this.drawAsteroid = function () {
        ctx.drawImage(paper, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
    }
}
function PowerUp() {
    this.radius = randomRange(55, 21)//sizes
    this.x = randomRange(canvas.width - this.radius, this.
        radius) - canvas.width
    this.y = randomRange(canvas.height - this.radius, this.
        radius) - canvas.height //pushes off screen
    this.vx = randomRange(-8, -5)
    this.color = "red"

    //draw powerup
    this.drawPowerUp = function () {

        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.
            PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }
    this.drawPowerUp = function () {
        ctx.drawImage(oni, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
    }
}

//set up keyboard event handlers (moves ship around canvas)
document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = true
        }
        if (e.keyCode == 83) {
            ship.left = true
        }
        if (e.keyCode == 68) {
            ship.right = true
        }
        if (e.keyCode == 65) {
            ship.down = true
        }
    }

    if (gameOver) {
        if (e.keyCode == 32) {
            if (currentState == 2) {
                //game over screen, restarts screen
                currentState = 0

                //rests num of roids
                numAsteroids = 10
                //empties roid array
                asteroids = []
                //resets score
                score = 0
                gameStart()
                main()
            }
            else {
                //main screen starts the game
                gameStart()
                currentState = 1
                gameOver = false
                main()
                scoreTimer()
                console.log("space")
                isInv = false

            }
        }
    }
}

function pressKeyUp(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = false
        }
        if (e.keyCode == 83) {
            ship.left = false
        }
        if (e.keyCode == 68) {
            ship.right = false
        }
        if (e.keyCode == 65) {
            ship.down = false
        }
    }
}


//constructor function (class start capital letter)
function PlayerShip() {

    //class for java is "this.""
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    //width and height
    this.w = 8
    this.h = 8
    //velocity
    this.vx = 0
    this.vy = 0
    //boolean
    this.up = false
    this.down = false
    this.left = false
    this.right = false

    //draw flame
    this.flamelength = -60

    //draw ship


    this.drawShip = function () {
        //negative is up, positive is down
        //shipY -= 1

        //rotate ship degree++

        //save position of ship 
        ctx.save()
        ctx.translate(this.x, this.y)


        //draw flame
        if (this.up || this.left || this.right) {
            ctx.save()
            //change drawing valuse to animate flame
            if (this.flamelength == -60) {
                this.flamelength = -50
                ctx.fillStyle = "white"
            } else {
                this.flamelength = -60
                ctx.fillStyle = "cyan"
            }
            //draw flame on screen
            ctx.beginPath()
            ctx.moveTo(this.flamelength, 0)
            ctx.lineTo(-5, -5)
            ctx.lineTo(-5, 5)
            ctx.lineTo(this.flamelength, 0)
            ctx.closePath()
            ctx.fill()
            ctx.restore()
        }


        ctx.fillStyle = "12, 240, 229, 0"
        ctx.beginPath()
        ctx.moveTo(-10, 10)
        ctx.lineTo(-10, -10)
        ctx.lineTo(10, 0)
        ctx.lineTo(-10, 10)
        ctx.closePath()
        ctx.fill()
        ctx.drawImage(haku, -40, -60, 100, 90)
        ctx.restore()

    }


    //move ship
    this.move = function () {
        this.x += this.vx
        this.y += this.vy

        //keep ship from going off screen 
        //bottom //right
        if (this.y > canvas.height - this.h / 2) {
            this.y = canvas.height - this.h / 2
            this.vy = 0
        }
        //top 
        if (this.y < this.h / 2) {
            this.y = this.h / 2
            this.vy = 0
        }
        //right 
        if (this.x > canvas.width - this.w / 2) {
            this.x = canvas.width - this.h / 2
            this.vx = 0
        }
        //left  
        if (this.x < this.w / 2) {
            this.x = this.w / 2
            this.vx = 0
        }
    }


}

//main menu screen
gameStates[0] = function () {
    ctx.drawImage(first, 0, 0, 1000, 720)

    ctx.save()
    ctx.font = "40px Acme"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.fillText("Press Space To Start!", canvas.width / 2, canvas.height / 2 + 90)
    ctx.font = "30px Acme"
    ctx.fillText("Use the keys W,S, & D to move Haku", canvas.width / 2, canvas.height / 2 + 150)
    ctx.restore()

}
//game screen
gameStates[1] = function () {


    ctx.drawImage(sky, 0, 0, 1000, 720)
    //code for displaying score
    ctx.save()
    ctx.font = "25px Acme"
    ctx.fillStyle = "white"
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore()

    //vertical movement
    if (ship.up) {
        ship.vy = -7
    } else {
        ship.vy = 0
    }
    //horizontal movement
    if (ship.left) {
        ship.vy = 7
    } else if (ship.right) {
        ship.vx = 7
    } else {
        ship.vx = -7
    }

    //loops through all asteroids and can check their position
    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var distance = Math.sqrt((dX * dX) + (dY * dY))

        if (detectCollision(distance, (ship.h / 2 + asteroids[i].radius))) {
            console.log("hit asteroid")
            if (isInv == false)
            {gameOver = true
            currentState = 2
            main()}

        }

        if (asteroids[i].x < - asteroids[i].radius) {
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius) + canvas.width
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius)
        }
        if (!gameOver) {

            asteroids[i].x += asteroids[i].vx
            asteroids[i].drawAsteroid()
        }
    }
    //will stop ships from being drawn on menu screens
    if (!gameOver) {
        ship.move()
        ship.drawShip()
    }

    while (asteroids.length < numAsteroids) {
        asteroids.push(new Asteroid())
    }



    //powerup
    for (var i = 0; i < power.length; i++) {
        var dX = ship.x - power[i].x
        var dY = ship.y - power[i].y
        var distance = Math.sqrt((dX * dX) + (dY * dY))

        if (detectCollision(distance, (ship.h / 2 +power[i].radius))) {
         console.log("hit powerup") 
         if(isInv == false){
            setInvincible()}
        }
        if (power[i].x < - power[i].radius) {
        power[i].x = randomRange(canvas.width -power[i].radius, power[i].radius) +canvas.width
        power[i].y = randomRange(canvas.height -power[i].radius, power[i].radius)
        }
        if (!gameOver) {
            power[i].x += power[i].vx
            power[i].drawPowerUp()
        }
    }
    //will stop ships from being drawn on menu screens
    if (!gameOver) {
        ship.move()
        ship.drawShip()
    }
    while (power.length < numPower) {
        power.push(new PowerUp())
    }

}
//game over
gameStates[2] = function () {
    ctx.drawImage(end, 0, 0, 1000, 720)
    //saves score on menu screen
    if (score > highScore) {
        //set a new high score
        highScore = score
        ctx.save()
        ctx.font = "30px Acme"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("You got caught! Your score is:  " + score.toString(), canvas.width / 2, canvas.height / 2 + 110)
        ctx.fillText(" Your new high score is:  " + highScore.toString(), canvas.width / 2, canvas.height / 2 + 140)
        ctx.fillText("New Record!", canvas.width / 2, canvas.height / 2 + 205)
        ctx.font = "25px Acme"
        ctx.fillText("Press Space To Play Again!", canvas.width / 2, canvas.height / 2 + 270)
        ctx.restore()
    } else {
        //keep same score new high score1
        ctx.save()
        ctx.font = "30px Acme"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("You got caught! Your score is:  " + score.toString(), canvas.width / 2, canvas.height / 2 + 110)
        ctx.fillText(" Your high score is:  " + highScore.toString(), canvas.width / 2, canvas.height / 2 + 155)
        ctx.font = "25px Acme"
        ctx.fillText("Press spacebar to play again!", canvas.width / 2, canvas.height / 2 + 195)
        ctx.restore()

    }

}
//rotate ship var degree = 0

function main() {

    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    gameStates[currentState]()

    if (!gameOver) {
        timer = requestAnimationFrame(main)
        
    }


}

function detectCollision(distance, calcDistance) {
    return distance < calcDistance

}

//set inv
function setInvincible() {
    if (isInv == false) {
        isInv = true
        setTimeout(setInvincible, 5000)
        console.log(isInv)
    } else {
        isInv = false
        console.log(isInv)
  
    }
    
}
//timer for score
function scoreTimer() {
    if (!gameOver) {
        score++

        //using modulus that return remainder of a decimal

        //check to see if remainder is divisible by 5
        if (score % 5 == 0) {
            numAsteroids += 2
            console.log(numAsteroids)

        }

        setTimeout(scoreTimer, 1000)
    }


}