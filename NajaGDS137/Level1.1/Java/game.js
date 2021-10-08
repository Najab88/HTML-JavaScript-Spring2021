var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var ball = new Ball()

//circle 1
function Ball (draw,move)
{
ctx.beginPath()
ctx.fillStyle = "cyan"
ctx.strokeStyle = "black"
ctx.lineWidth = 5
ctx.arc(400,300,50,0,360*Math.PI/180,true)
ctx.stroke()
ctx.closePath();
ctx.fill();
}
