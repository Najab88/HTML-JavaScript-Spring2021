var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')


//timer
var timer
var interval = 1000/60
timer = setInterval(animate, interval)


//draws ball on screen
var ball = new Ball ()


//ball movement

function animate()
{
    //clear canvas
    ctx.clearRect(0,0,canvas.width, canvas.height)

    ctx.ball +=2

    ball.draw(ctx)
}








