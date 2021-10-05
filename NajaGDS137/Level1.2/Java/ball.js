var c = document.getElementById("canvas");
var ctx = c.getContext("2d");


// Draws ball on screen


ctx.beginPath();
ctx.arc (512,400,50,0,2 * Math.PI);
ctx.fillStyle = 'purple';
ctx.fill();
ctx.closePath();
ctx.stroke();

