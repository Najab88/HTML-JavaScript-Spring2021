// JavaScript Document
function Ball(width,height,color,x,y,radius) {
	//player's location\

	this.x = canvas.width/2
	this.y = canvas.height/2
	

	//player's dimensions
	this.width = 100;
	this.height = 100;

	//player's velocity or speed on each axis
	
	this.vx = 1
	this.vy = 0

	//player's color
	this.color = "cyan";

	//This draws the player to the screen
	this.draw = function () {
	
		ctx.save()
		ctx.fillStyle = this.color
		ctx.lineWidth = 5
		ctx.translate(this.x, this.y,)
		ctx.arc((this.width), (this.height), this.width,this.height)
		ctx.restore
	}

	//This changes the player's position
	this.move = function () {
		this.x += this.vx 
		this.y += this.vy
		
	}
	ctx.beginPath()
    ctx.arc(400, 300, 50, 0, 360 * Math.PI / 180, true)
    ctx.stroke()
    ctx.closePath()
    ctx.fill()
}
