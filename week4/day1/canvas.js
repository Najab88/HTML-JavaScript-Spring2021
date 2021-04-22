//defines variable to acess canvas properties by ID
var canvas = document.getElementById('canvas')
// define the drawing context
var ctx = canvas.getContext('2d')


var forest = new Image
forest.src = "images/forest.png"

forest.onload = function () {
    ctx.drawImage(forest, 0, 0, 800, 610)

    //draw rectangle

    ctx.fillStyle = "black"
    ctx.strokeStyle = "white"
    ctx.lineWidth = "3"
    ctx.strokeRect(30, 30, 100, 100)
    ctx.fillRect(30, 30, 100, 100)


    //draw lines

    ctx.moveTo(0, 0)
    ctx.lineTo(800, 600)
    ctx.stroke()

    ctx.moveTo(800, 0)
    ctx.lineTo(0, 600)
    ctx.stroke()

    //draw circle
    ///ctx.arc(x,y,radius, startAngle, endAngle, isCounterClockwise)
    ctx.beginPath()
    ctx.arc(400, 300, 50, 0, (3 * Math.PI) / 2, false)
    ctx.lineTo(450, 250)
    ctx.closePath()
    ctx.fill()

    //draw shape

    ctx.fillStyle = "#55ddef" //color inside box
    ctx.strokeStyle = "white" //color outside box
    ctx.lineWidth = 3 //color around box 
    ctx.beginPath()
    ctx.moveTo(650, 100)
    ctx.lineTo(700, 140)
    ctx.lineTo(675, 200)
    ctx.lineTo(625, 200)
    ctx.lineTo(600, 140)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    //drawing an image
    //creates the instance of the image
    var kodama = new Image()
    //links the source of image file
    kodama.src = 'images/kodama.png'
    //callback function loads image and draws it to canvas
    kodama.onload = function () {
        ctx.drawImage(kodama, 100, 300, 60, 80)
 
    }


}






