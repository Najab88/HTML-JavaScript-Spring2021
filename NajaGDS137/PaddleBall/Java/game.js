canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
var canvas
var ctx

//timer/moves player
var timer
var interval = 1000 / 60
timer = setInterval(animate, interval)

// this is the paddle
var paddle = new GameObject()
paddle.color = "cyan"

//paddle position
paddle.x = canvas.width / 2
paddle.y = 550
paddle.width = 250
paddle.height = 40


var ball = new GameObject()
ball.color = "magenta"

//paddle position
ball.x = canvas.width / 2
ball.y = canvas.height / 2
ball.radius = 40

ball.vx = 5
ball.vy = 5


var gravity = -1
var friction =  1

// player score
var score = new GameObject()
score.x = 80
score.y = 25
var score1 = 0




//Animation Timer
timer = setInterval(animate, interval)

function animate() {
    //clear the screen
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ball.x += ball.vx
    ball.y += ball.vy
    //line to ball


    if (a) {
        //moves left
        paddle.x += -6
    }
    if (d) {
        //moves right
        paddle.x += 6

    }

a
  

    pad(paddle)



    // ball boundry top screen
    if (ball.y < 0 + ball.width / 2) {
        ball.y = 0 + ball.width / 2
        ball.vy = -ball.vy
        ball.vy = -ball.vy * gravity
        ball.vx = -ball.vx * gravity
    }
    // ball boundry bottom screen
    if (ball.y > canvas.height - ball.width / 2) {
        ball.y = canvas.height - ball.width / 2
        ball.vy = -ball.vy * friction
        ball.vx = -ball.vx * friction
        ball.color = "black"
        score1 = 0

    }a
    // right
    if (ball.x > canvas.width - ball.width / 2) {
        ball.x = canvas.width - ball.width / 2
        ball.vx = -ball.vx 
    }//left
    if (ball.x < 0 + ball.width / 2) {
        ball.x = 0 + ball.width / 2
        ball.vx = -ball.vx 
    }


    // ball collisiion with paddle
    if (ball.hitTestObject(paddle)) {
        //center bounce
        ball.y = paddle.y - paddle.width / 2 + ball.width / 2
        ball.vy = -ball.vy
        score1++
        if (ball.y < paddle.y - paddle.y / 6) {

			ball.vy = -ball.force
		}
		if (ball.y > paddle.y + paddle.height / 6) {
			ball.vy = ball.force
		}
       
    }
    paddle.drawRect()
    ball.drawCircle()
    score.drawScore()

    ctx.save()
    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.moveTo(ball.x, ball.y)
    ctx.lineTo(paddle.x, paddle.y)
    ctx.closePath()
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.restore()
}

// paddle boundry
function pad(paddle) {
    if (paddle.x + paddle.width > canvas.width + paddle.width / 2) {
        paddle.x = canvas.width - paddle.width / 2
    }
    if (paddle.x < 0 + paddle.width / 2) {
        paddle.x = 0 + paddle.width / 2
    }
}


