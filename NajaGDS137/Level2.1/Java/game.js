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


//paddle position
paddle.x = 35
paddle.y = canvas.height / 2

//paddle size
paddle.width = 15
paddle.height = 105


// ball position
var ball = new GameObject()
ball.x = 400
ball.y = 300

//ball size
ball.width = 30

//ball speed
ball.vx = -3
ball.vy = 1


//Animation Timer
timer = setInterval(animate, interval)

function animate() {
	//clear the screen
	ctx.clearRect(0, 0, canvas.width, canvas.height)


	//keypresses

	if (w) {
		//moves up 
		paddle.y += -8
	}
	if (s) {
		//moves down 
		paddle.y += 8

	}

	ball.x += ball.vx
	ball.y += ball.vy

	//paddle restriction
	if (paddle.y + paddle.height > canvas.height + paddle.height / 2) {
		paddle.y = canvas.height - paddle.height / 2
	}
	if (paddle.y < 0 + paddle.height / 2) {
		paddle.y = 0 + paddle.height / 2
	}



	// ball boundry left side screen
	if (ball.x > canvas.width - ball.width / 2) {
		ball.x = canvas.width - ball.width / 2
		ball.vx = -ball.vx
		ball.color = "white"
	}

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
		ball.color = "cyan"
	}

	// puts ball back in mid of canvas
	if (ball.x < 0 - ball.width / 2) {

		ball.x = canvas.width / 2
		ball.y = canvas.height / 2
	}

	// ball collisiion with paddle
	if (ball.hitObject(paddle)) {

		ball.color = "red"

		ball.x = paddle.x + paddle.width / 2 + ball.width / 2
		ball.vx = -ball.vx

		if (ball.y < paddle.y - paddle.y / 7) {

			ball.vy = -ball.force
		}
		if (ball.y > paddle.y + paddle.height / 7) {
			ball.vy = ball.force
		}
	}


	//draws to screen
	ball.drawCircle()
	paddle.drawRect();
}




