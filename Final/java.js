var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var ship

var numAsteroids = 20
var asteroids = new Array()
var gameOver = true
var gameStates = []
var currentState = 0
var score = 0
var highScore = 0

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

function gameStart() {

    //creat an instance of the player ship 
    ship = new PlayerShip()
    

    //for loop to create the instances of asteroids
    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid()

    }


}




//asteriod class (constructor function)
function Asteroid() {
    this.radius = randomRange(15, 2)
    this.x = randomRange(canvas.width - this.radius, this.radius)
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height //pushes off screen
    this.vy = randomRange(10, 5)
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
    this.drawImage = function(){
        
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
        if (e.keyCode == 65) {
            ship.left = true
        }
        if (e.keyCode == 68) {
            ship.right = true
        }
        if (e.keyCode == 83) {
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

            }
        }
    }
}

function pressKeyUp(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = false
        }
        if (e.keyCode == 65) {
            ship.left = false
        }
        if (e.keyCode == 68) {
            ship.right = false
        }
        if (e.keyCode == 83) {
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
    this.w = 20
    this.h = 20
    //velocity
    this.vx = 0
    this.vy = 0
    //boolean
    this.up = false
    this.down = false
    this.left = false
    this.right = false

    //draw flame
    this.flamelength = 30

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
            if (this.flamelength == 30) {
                this.flamelength = 20
                ctx.fillStyle = "white"
            } else {
                this.flamelength = 30
                ctx.fillStyle = "purple"
            }
            //draw flame on screen
            ctx.beginPath()
            ctx.moveTo(0, this.flamelength)
            ctx.lineTo(5, 5)
            ctx.lineTo(-5, 5)
            ctx.lineTo(0, this.flamelength)
            ctx.closePath()
            ctx.fill()
            ctx.restore()

        }
        //how to rotate ship ctx.rotate(degree)

        //color of ship
        ctx.fillStyle = "rgba(247, 178, 241, 0.829)"
        //move to middle of canvas
        ctx.moveTo(0, -10)
        //draw triangle(ship)
        ctx.beginPath()
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)
        ctx.lineTo(0, -10)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }

    //move ship
    this.move = function () {
        this.x += this.vx
        this.y += this.vy

        //keep ship from going off screen 

        //bottom 
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
    ctx.drawImage(first, 0,0,1000,720)

    ctx.save()
    ctx.font = "30px Arial"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.fillText("Asteroid Avoider", canvas.width / 2, canvas.height / 2 - 30)
    ctx.font = "15px Arial"
    ctx.fillText("Press Space To Start!", canvas.width / 2, canvas.height / 2 + 20)
    ctx.restore()
    
}
//game screen
gameStates[1] = function () {
    

    ctx.drawImage(sky, 0,0,1000,720)
    //code for displaying score
    ctx.save()
    ctx.font = "15px Arial"
    ctx.fillStyle = "white"
    ctx.fillText("score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore()


    //vertical movement
    if (ship.up) {
        ship.vy = -10
    } else {
        ship.vy = 5
    }

    //horizontal movement
    if (ship.left) {
        ship.vx = -3
    } else if (ship.right) {
        ship.vx = 3
    } else {
        ship.vx = 0
    }

    //loops through all asteroids and can check their position
    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var distance = Math.sqrt((dX * dX) + (dY * dY))

        if (detectCollision(distance, (ship.h / 2 + asteroids[i].radius))) {
            console.log("hit asteroid")
            gameOver = true
            currentState = 2
            main()

        }

        if (asteroids[i].y > canvas.height + asteroids[i].radius) {
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius)
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height //appears off screen
        }
        if (!gameOver) {

            asteroids[i].y += asteroids[i].vy
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
    
}
//game over
gameStates[2] = function () {
    ctx.drawImage(end, 0,0,1000,720)
    //saves score on menu screen
    if (score > highScore) {
        //set a new high score
        highScore = score
        ctx.save()
        ctx.font = "30px Arial"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("Game over, your score is:  " + score.toString(), canvas.width / 2, canvas.height / 2 - 60)
        ctx.fillText(" Your new high score is:  " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 30)
        ctx.fillText("New Record!", canvas.width / 2, canvas.height / 2)
        ctx.font = "15px Arial"
        ctx.fillText("Press Space To Play Again!", canvas.width / 2, canvas.height / 2 + 20)
        ctx.restore()
    } else {
        //keep same score new high score1
        ctx.save()
        ctx.font = "30px Arial"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("Game over, your score was:" + score.toString(), canvas.width / 2, canvas.height / 2 - 60)
        ctx.fillText(" your high score is:" + highScore.toString(), canvas.width / 2, canvas.height / 2 - 30)
        ctx.font = "15px Arial"
        ctx.fillText("Press Space To Play Again!", canvas.width / 2, canvas.height / 2 + 20)
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

//timer for score
function scoreTimer() {
    if (!gameOver) {
        score++

        //using modulus that return remainder of a decimal

        //check to see if remainder is divisible by 5
        if (score % 5 == 0) {
            numAsteroids += 3
            console.log(numAsteroids)

        }

        setTimeout(scoreTimer, 1000)
    }

}