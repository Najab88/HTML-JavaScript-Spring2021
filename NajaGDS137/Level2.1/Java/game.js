canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
var canvas
var ctx

//timer/moves player
var timer
var interval = 1000 / 60
timer = setInterval(animate, interval)


score = 0
// this is the paddle
var paddle = new GameObject()
var paddle2 = new GameObject()

//paddle position
paddle.x = 35
paddle.y = canvas.height / 2
//player2
paddle2.x = 765
paddle2.y = canvas.width / 2

//paddle size
paddle.width = 15
paddle.height = 75
//player 2
paddle2.width = 15
paddle2.height = 75


// ball position
var ball = new GameObject()
ball.x = 400
ball.y = 300

//ball size
ball.width = 20

//ball speed
ball.vx = -3
ball.vy = 1


// player score
var score = new GameObject()
var score1 = 0
var score2 = 0



//Animation Timer
timer = setInterval(animate, interval)

function animate() {
	//clear the screen
	ctx.clearRect(0, 0, canvas.width, canvas.height)

	ctx.save()
    ctx.strokeStyle = "pink"
    ctx.beginPath()
    ctx.moveTo(canvas.width/2, 0)
    ctx.lineTo(canvas.width/2, 800)
    ctx.closePath()
    ctx.lineWidth = 5
    ctx.stroke()
    ctx.restore()
	//keypresses

	if (w) {
		//moves up 
		paddle.y += -6
	}
	if (s) {
		//moves down 
		paddle.y += 6

	}
	// second player key presses
	if (ArrowUp) {
		paddle2.y += -6
	}
	if (ArrowDown) {
		paddle2.y += 6
	}

	ball.x += ball.vx
	ball.y += ball.vy

	//paddle restriction

	pad(paddle)
	pad(paddle2)

	
	// ball boundry bottom screen
	if (ball.y > canvas.height - ball.width / 2) {
		ball.y = canvas.height - ball.width / 2
		ball.vy = -ball.vy
		ball.color = "black"

	}
	// ball boundry top screen
	if (ball.y < 0 + ball.width / 2) {
		ball.y = 0 + ball.width / 2
		ball.vy = -ball.vy
		ball.color = "black"
	}

	// puts ball back in mid of canvas
	reset(ball)

	// ball collisiion with paddle
	if (ball.hitObject(paddle)) {

		ball.x = paddle.x + paddle.width / 2 + ball.width / 2
		ball.vx = -ball.vx
		ball.color = "cyan"
		if (ball.y < paddle.y - paddle.y / 6) {

			ball.vy = -ball.force
		}
		if (ball.y > paddle.y + paddle.height / 6) {
			ball.vy = ball.force
		}
	}
	// ball collision paddle 2
	if (ball.hitObject(paddle2)) {

		
		ball.x = paddle2.x - paddle2.width / 2 - ball.width / 2
		ball.vx = -ball.vx
		ball.color = "magenta"
		if (ball.y < paddle2.y - paddle2.y / 6) {

			ball.vy = -ball.force
		}
		if (ball.y > paddle2.y + paddle2.height / 7) {
			ball.vy = ball.force
		}
	}

	//draws to screen
	ball.drawCircle()
	paddle.drawRect()
	paddle2.drawRect()
	score.drawScore()
	

}

// paddle boundry
function pad(pad) {
	if (pad.y + pad.height > canvas.height + pad.height / 2) {
		pad.y = canvas.height - pad.height / 2
	}
	if (pad.y < 0 + pad.height / 2) {
		pad.y = 0 + pad.height / 2
	}
}

function reset(ball) {
	//left side
	if (ball.x < 0 - ball.width / 2) {

		ball.x = canvas.width / 2
		ball.y = canvas.height / 2
		
		score2++
	}
	//rightside 
	if (ball.x > canvas.width + ball.width / 2) {

		ball.x = canvas.width / 2
		ball.y = canvas.height / 2
	
		score1++
	}
}

