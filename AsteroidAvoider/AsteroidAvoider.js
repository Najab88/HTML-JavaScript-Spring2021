var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)

//start ship
var ship

//start asteroids
var numAsteroids = 20
var asteroids = new Array()

//creat an instance of the player ship 
ship = new PlayerShip()

//start asteroids function
function randomRange(high, low) {
    return Math.random() * (high - low) + low
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
}
//for loop to create the instances of asteroids
for (var i = 0; i < numAsteroids; i++) {
    asteroids[i] = new Asteroid()

}


//set up keyboard event handlers (moves ship around canvas)
document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e) {
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

function pressKeyUp(e) {
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


//rotate ship var degree = 0

function main() {

    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

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

    //asteroids for loop
    for (var i = 0; i < asteroids.length; i++) {

if (asteroids[i].y > canvas.height + asteroids[i].radius){
    asteroids[i].x= randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius)
    asteroids[i].y= randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height //appears off screen
}

        asteroids[i].y += asteroids[i].vy
        asteroids[i].drawAsteroid()
    }

    ship.move()
    ship.drawShip()

    timer = requestAnimationFrame(main)
}

