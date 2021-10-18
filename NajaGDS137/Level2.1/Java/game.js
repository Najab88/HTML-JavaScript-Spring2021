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
var paddle = new GameObject()


//paddle position
paddle.x = 35
paddle.y = 55

//paddle size
paddle.width = 15
paddle.height = 105


// this is the ball
var ball = new GameObject()
ball.x = 400
ball.y = 300
ball.width = 30
ball.vx = -2
ball.vy = 0







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
	if(paddle.y + paddle.height > canvas.height + paddle.height/2)
	{
		paddle.y = canvas.height - paddle.height /2
	}
	if( paddle.y < 0 + paddle.height/2 )
	{
		paddle.y = 0 + paddle.height/2
	}
	
	// ball movement
	if (ball.x > canvas.width - ball.width/2) //|| ball.x - ball.r < 0) 
	{
		ball.x = canvas.width - ball.width/2

		ball.vx = -ball.vx
		ball.color = "pink"


	}
	if (ball.y > canvas.height - ball.width/2) {

		ball.y = canvas.height - ball.width/2
		ball.vy = -ball.vy
		ball.color = "black"
	}
	if ( ball.y < 0 -ball.width/2) {
		ball.y = 0 -ball.width/2
		ball.vy = -ball.vy
		ball.color = "black"
	}

	// puts ball back in mid of canvas
	if(ball.x  < 0-ball.width / 2)
    {
	
        ball.x = canvas.width/2
        ball.y = canvas.height/2

    }

	// collision 
	if (ball.hitObject(paddle)) {
		//bounce against paddle

        ball.x = paddle.x + paddle.width / 2 + ball.width / 2

		ball.vx = -ball.vx
		ball.color = "pink"

	}


	paddle.drawRect()
	ball.drawCircle()

}



