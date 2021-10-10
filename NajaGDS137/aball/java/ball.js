var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')


// this is speed of ball
var timer
timer = setInterval(animate, interval)
var interval = 1000 / .000001


//ball size
var x = 100
var y = 300
var radius = 60

//ball position
var bx = 2
var by = -2



//this is where you make ball move
function animate() {

    // clear the screen
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
   
    
    x += bx;
    y += by;

    //draw the ball
    ctx.fillStyle = "pink"
    ctx.strokeStyle = "cyan"
    ctx.lineWidth = "5"
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 360 * Math.PI/180, true);
    ctx.stroke();
    ctx.fill()

    //update position
    
    

    if(x + bx > canvas.width-radius || x + bx < radius) {
        bx = -bx;
    }
    if(y + by > canvas.height-radius || y + by < radius) {
        by = -by;
    }
    
  


    timer = setInterval(animate,interval)

}