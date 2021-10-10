// JavaScript Document
function Ball() {
	//player's location\

	this.x = canvas.width/2
	this.y = canvas.height/2
	

	//player's dimensions
	this.width = 100
	this.height = 100

	//player's velocity or speed on each axis
	
	this.vx = 0
	this.vy = 0

	//player's color
	this.color = "cyan"

	//This draws the player to the screen
	this.draw = function () {
	
		
		ctx.fillStyle = this.color
		ctx.lineWidth = 5
		ctx.translate(this.x, this.y,this.radius)
		ctx.arc((-this.width), (-this.height),(-this.radius), this.width,this.height,this.radius)
		
	}

	//This changes the player's position
	this.move = function () {
		this.x += this.vx 
		this.y += this.vy
		
	}
	
}
