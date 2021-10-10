var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var timer
timer = setInterval(animate, interval)
var interval = 1000 / 2
var x = 100

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x += 1
    
    ctx.fillStyle = "pink"
    ctx.strokeStyle = "cyan"
    ctx.lineWidth = "5"

    ctx.beginPath();
    ctx.arc(x, 300, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill()

    //update position
    
    timer = setInterval(animate, interval)

}