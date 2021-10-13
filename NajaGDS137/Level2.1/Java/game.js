canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
var canvas
var ctx

//timer/moves player
var timer
var interval = 1000/60
timer = setInterval(animate, interval)

//rectangle
var player1
player1 = new GameObject()
	
//ball
var ball
ball = new GameObject()
	

function animate()
{
	//Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height)
	
	//rectangle
	player1.x += 0
	
    //ball
    ball.x += ball.vx
    ball.y += ball.vy

    if (ball.x > canvas.width - ball.radius || ball.x - ball.radius < 0) {
        ball.vx = -ball.vx
        ball.color = "black"

    }
    if (ball.y > canvas.height - ball.radius || ball.y - ball.radius < 0) {
        ball.vy = -ball.vy
        ball.color = "pink"
    }
	//Update the Screen
	player1.drawRect()
    ball.drawCricle()
}
