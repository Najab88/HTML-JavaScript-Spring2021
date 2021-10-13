var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')


// this is speed of ball
var timer
timer = setInterval(animate, interval)
var interval = 1000 / 60

var ball

ball = new Ball()

//ball position
//var bx = 2
//var by = -2
//this is where you make ball move
function animate() {
    
    // clear the screen
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ball.x += ball.vx
    ball.y += ball.vy

    //draw the ball


    //update position
    if (ball.x > canvas.width - ball.radius || ball.x - ball.radius < 0) {
        ball.vx = -ball.vx
        ball.color = "black"

    }
    if (ball.y > canvas.height - ball.radius || ball.y - ball.radius < 0) {
        ball.vy = -ball.vy
        ball.color = "pink"
    }

    ball.draw()



}