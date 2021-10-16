canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
var canvas
var ctx

//timer/moves player
var timer
var interval = 1000 / 60
timer = setInterval(animate, interval)


//stops the player from moving through obstacles.
var prevX

// this is the paddle
paddle = new GameObject()
var paddle

//paddle position
paddle.x = 35
paddle.y = 55

//paddle size
paddle.w = 15
paddle.h = 105


// this is the ball
ball = new GameObject()
var ball
ball.x = 400
ball.y = 300
ball.r = 25



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
	if(paddle.y + paddle.h > canvas.height + paddle.h/2)
	{
		paddle.y = canvas.height - paddle.h /2
	}
	if( paddle.y < 0 + paddle.h/2 )
	{
		paddle.y = 0 + paddle.h/2
	}
	
	// ball movement
	if (ball.x > canvas.width - ball.r) //|| ball.x - ball.r < 0) 
	{
		ball.vx = -ball.vx
		ball.color = "pink"


	}
	if (ball.y > canvas.height - ball.r || ball.y - ball.r < 10) {
		ball.vy = -ball.vy
		ball.color = "black"
	}

	// puts ball back in mid of canvas
	if(ball.x -ball.r < 0)

    {
        ball.x = canvas.width/2
        ball.y = canvas.height/2

    }

	// collision 
	if (ball.hitObject(paddle)) {
		//bounce against paddle


		ball.vx = -ball.vx
		ball.color = "pink"

	}


	paddle.drawRect()
	ball.drawCircle()

}



