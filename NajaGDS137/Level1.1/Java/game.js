canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")

var canvas
var ctx
var timer


var interval = 1000 / 60
var ball



timer = setInterval(animate, interval)

function animate() {
	x = canvas.width 
    y = canvas.height /2 
	ctx.clearRect(0, 0, canvas.width, canvas.height)

	ball = new Ball()
	ball.x += 2

    ctx.fillStyle = "purple"
    ctx.arc (x,y,50 ,0, 360 * Math.PI / 180, true)




	ball.draw()
}
