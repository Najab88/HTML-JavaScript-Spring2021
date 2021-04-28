var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')


//1. Square
ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"
ctx.lineWidth = "5"
ctx.strokeRect(85, 301, 100, 100)
ctx.fillRect(85, 301, 100, 100)

//2. Scircle

ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "red"
ctx.lineWidth = "5"
ctx.beginPath()
ctx.arc(385, 441, 64, 0, (3 * Math.PI))
ctx.lineTo(451, 441)
ctx.closePath()
ctx.fill()
ctx.stroke()

//4.Line
ctx.fillStyle = "none"
ctx.strokeStyle = "rgb(255,0,0)"
ctx.lineWidth = "5"
ctx.moveTo(278, 549)
ctx.lineTo(85, 682)
ctx.closePath()
ctx.stroke()

//5. Star

ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "rgb(32,32,32)"
ctx.lineWidth = "5"
ctx.beginPath()
ctx.moveTo(635, 496)
ctx.lineTo(668, 554)
ctx.lineTo(733, 567)
ctx.lineTo(688, 615)
ctx.lineTo(688, 615)
ctx.lineTo(695, 680)
ctx.lineTo(695, 680)
ctx.lineTo(635, 653)
ctx.lineTo(576, 680)
ctx.lineTo(584, 615)
ctx.lineTo(538, 567)
ctx.lineTo(603, 554)
ctx.closePath()
ctx.fill()
ctx.stroke()

//3. Shape

ctx.fillStyle = "#ff00ff"
ctx.strokeStyle = "#00ffff"
ctx.lineWidth = "3"
ctx.beginPath()
ctx.moveTo(557, 308)
ctx.lineTo(667, 284)
ctx.lineTo(724, 380)
ctx.lineTo(650, 464)
ctx.lineTo(548, 420)
ctx.closePath()
ctx.fill()
ctx.stroke()