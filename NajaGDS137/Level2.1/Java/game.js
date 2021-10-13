canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
var canvas
var ctx

//timer/moves player
var timer
var interval = 1000/60
timer = setInterval(animate, interval)


//ball
var ball
ball = new GameObject()
	
//paddle
var player1
player1 = new GameObject()


	


function animate()
{
	//Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height)
	
	//rectangle
	player1.rx += 0
	
    //ball
    ball.bx += ball.bsvx
    ball.by += ball.bsvy

// keypresses
    if(s)
	{
		//moves down speed
		player1.ry += 8
	}
	
	if(w)
	{
	//moves up speed
		player1.ry += -8
	}


    // makes the ball move/change color
    if (ball.bx > canvas.width - ball.radius || ball.bx - ball.radius < 0) {
        ball.bsvx = -ball.bsvx
        ball.bcolor = "pink"
        

    }
    if (ball.by > canvas.height - ball.radius || ball.by - ball.radius < 0) {
        ball.bsvy = -ball.bsvy
        ball.bcolor = "black"
    }
	//Update the Screen
	player1.drawRect()
    ball.drawCircle()
}
