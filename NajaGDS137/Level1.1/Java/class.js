// JavaScript Document
function Ball() {
	//player's location
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;

	//player's dimensions
	this.width = 100;
	this.height = 100;

	//player's velocity or speed on each axis
	this.vx = 2;
	this.vy = 0;

	//player's color
	this.color = "purple";

	//This draws the player to the screen
	this.draw = function () {
		ctx.fillStyle = this.color
		ctx.beginPath()
		ctx.arc(400, 300, 50, 0, 360 * Math.PI / 180, true)
		ctx.closePath()
		ctx.fill()

	}

	//This changes the player's position
	this.move = function () {
		this.x += this.vx;
		this.y += this.vy;
	}
}
