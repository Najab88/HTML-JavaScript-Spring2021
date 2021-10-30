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

//ball
ball.x = canvas.width / 2
ball.y = canvas.height / 2
ball.radius = 40

ball.vx = 0
ball.vy = 1
ball.force = 5


var gravity = 1
var frictionx = 0.97
var frictiony = 0.97

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


    if (a) {
        //moves left
        paddle.vx += paddle.ax * -paddle.force
    }
    if (d) {
        //moves right
        paddle.vx += paddle.ax * paddle.force

    }

    paddle.vx *= frictionx
    paddle.x += paddle.vx

    pad(paddle)


    ball.vx *= frictionx
    ball.vy *= frictiony


    ball.vy += gravity

    ball.x += ball.vx
    ball.y += ball.vy



    // ball boundry top screen
    if (ball.y < 0 + ball.width / 2) {
        ball.y = 0 + ball.width / 2

        ball.vy = -ball.vy

    }
    // ball boundry bottom screen
    if (ball.y > canvas.height - ball.width / 2) {
        ball.y = canvas.height - ball.width / 2

        ball.vy = -ball.vy
        score1 = 0

    }
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
        ball.y = paddle.y - paddle.height / 2 - ball.height / 2

        ball.vy = -35

        if (ball.x < paddle.x - paddle.width / 3) {

            ball.vx = -ball.force

        }
        if (ball.x > paddle.x + paddle.width / 3) {

            ball.vx = ball.force
        }

        if (ball.x < paddle.x - paddle.width / 6) {

            ball.vx = -ball.force * 5
        }
        if (ball.x > paddle.x + paddle.width / 6) {

            ball.vx = ball.force * 5
        }


        score1++
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


