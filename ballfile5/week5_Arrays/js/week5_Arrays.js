
//-----------------------------------------------------!!!!IMPORTANT!!!-------------------------------------------------------------------------
//----------------------------------------------Instructor Cover that function first------------------------------------------------------------
//-----------------------------------The rand function is located in js/Utility/Random.js-------------------------------------------------------

//canvas and context
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//timebase
var interval = 1000 / 60;
var timer = setInterval(animate, interval);
var gravity = 1;

var colors = [];
colors[0] = "#ff0000";
colors[1] = "#00ff00";
colors[2] = "#0000ff";

var amt = 50;	// amount of items
var dots = []; // ["boo", " boo"] list of strings or type ^ 

for (var i = 0; i < amt; i++)// stores objects
{
	dots[i] = new GameObject();
	dots[i].x = math.random() * canvas.width; // or (rand 0,canvas.width)
	dots[i].y = canvas.height/2;//Math.random() * canvas.height;
	dots[i].width = rand(15, 20);
	dots[i].vy = (10,10);
	dots[i].vx = rand(10, 10);
	dots[i].color = colors[Math.floor(rand(0, 2.9))];
}


function animate() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < amt; i++) {
		
		dots[i].vy += gravity;

		//dots[i].width++
		//dots[i].height++

		dots[i].vy = rand(-1,1);
		dots[i].vx = rand(-1,1); //makes items float v need on to move
		dots[i].move();


		if (dots[i].y > canvas.height - dots[i].width / 2) {
			dots[i].y = 0 - dots[i].width
		}// makes screen rain


		/*if (dots[i].y = canvas.height - dots[i].width / 2) {
			dots[i].y =  -dots[i].vy*.5
		}*///expands dots 


		dots[i].drawCircle();
	}
}










