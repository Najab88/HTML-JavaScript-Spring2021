var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')


var timer
timer = setInterval(animate, interval)
var x = 200


var interval = 1000 / 60
var ball

ball = new Ball()


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

	ball.move()
    //draw images
    ctx.beginPath()
    ctx.arc(x, 300, 50, 0, 360 * Math.PI / 180, true)
    ctx.stroke()
    ctx.closePath()
    ctx.fill()


    //update position
    x += .5
    if (x > canvas.width + 20) {
        x = -100
    }
    timer = setInterval(animate,interval)

	ball.draw()
}
