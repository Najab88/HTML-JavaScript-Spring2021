// JavaScript Document
function GameObject() {
	//player 1 location
	this.rx = 75
	this.ry = canvas.height / 2

//Ball location
	this.x = canvas.width / 2
    this.y = canvas.height / 2

	//player 1 dimensions
	this.rwidth = 15
	this.rheight = 75

	//ball dimensions
    this.width = 100
    this.height = 300

	//player 1 speed
	this.vx = 0
	this.vy = 0
	//ball speed
	this.vx = 2
	this.vy = 2

//player color
	this.color = "pink"
	this.bcolor = "pink"

	//ball radius 
	this.radius = 60


	//This draws the player to the screen
    this.drawCircle = function () {
        ctx.save()
        ctx.fillStyle = this.bcolor
        ctx.strokeStyle = "rgb(230, 24, 144)"
        ctx.lineWidth = "5"
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 360 * Math.PI / 180, true);
        ctx.stroke();
        ctx.fill()
        ctx.restore()

    }
	//This draws the player to the screen
	this.drawRect = function () {
		ctx.save()
		ctx.fillStyle = this.color;
		ctx.translate(this.rx, this.ry)
		ctx.fillRect((-this.rwidth / 2), (-this.rheight / 2), this.rwidth, this.rheight)
		ctx.restore()

	}

	//This changes the player's position
	this.move = function () {
		this.x += this.vx
		this.y += this.vy
	}
}
