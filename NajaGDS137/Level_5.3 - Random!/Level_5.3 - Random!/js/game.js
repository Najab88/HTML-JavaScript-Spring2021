//----------------------------------------------------------Instructions------------------------------------------------
//---------------------In this assignment you will draw multiple squares on the screen in random locations--------------
//---------------------First you will create an array of particles. Then you will move and draw them.-------------------
//---------------------Follow the comments below to complete this assignment--------------------------------------------

var canvas;
var context;
var timer;
var interval;
var player;


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

var fX = .85;
var fY = .97;

var gravity = 1;

interval = 1000 / 60;
timer = setInterval(animate, interval);
//----------------------------------------------Step 1: Create particles------------------------------------------------
var amount = 12
var particles = []

var colors = [];
colors[0] = "purple";
colors[1] = "pink";
colors[2] = "cyan";

for (var i = 0; i < amount; i++) {
	particles[i] = new GameObject()
	particles[i].x = Math.random() * canvas.width // or (rand 0,canvas.width)
	particles[i].y = Math.random() * canvas.height
	particles[i].color = colors[Math.floor(rand(0, 2.9))]
}


function animate() {

	context.clearRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < amount; i++) {

		
	//--------------------------------------Step 2: Draw Particles---------------------------------------------------------
	particles[i].drawRect()
	}
	

	//----------------------------------------------------------------------------------------------------------------------
}
function rand(low, high)
{
		return Math.random() * (high - low) + low;
}
//-----------------------------------------------FINAL STEP: View Particles-------------------------------------------------
//Refresh your program a few times to see the particles spawn in random locations!