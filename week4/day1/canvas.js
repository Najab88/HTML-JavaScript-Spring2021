//defines variable to acess canvas properties by ID
var canvas = document.getElementById('canvas')
// define the drawing context
var ctx = canvas.getContext('2d')

//draw rectangle

ctx.fillStyle = "black"
ctx.strokeStyle = "white"
ctx.lineWidth = "15"
ctx.strokeRect(30, 30, 100, 100)
ctx.fillRect(30, 30, 100, 100)


//draw lines

ctx.moveTo(0,0)
ctx.lineTo(800,600)
ctx.stroke()

ctx.moveTo(800,0)
ctx.lineTo(0,600)
ctx.stroke()

//draw circle
///ctx.arc(x,y,radius, startAngle, endAngle, isCounterClockwise)
ctx.beginPath()
ctx.arc(400, 300,50, 0, (3 * Math.PI)/2, false )
ctx.lineTo(450,250)
ctx.closePath()
ctx.fill()

