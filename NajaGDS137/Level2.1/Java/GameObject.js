
function GameObject() {
	//paddle canvas location
	this.rx = 25 //left
	this.ry = 300 //middle

	//ball location
	this.bx = canvas.width / 2
	this.by = canvas.height / 2

	//paddle size
	this.rwidth = 15
	this.rheight = 70

	//ball size
	this.width = 100
	this.height = 300

	//paddle speed
	this.vx = 0
	this.vy = 0

	//ball speed
	this.bsvx = 4
	this.bsvy = 4

	//paddle color
	this.color = "pink"
	//ball color
	this.bcolor = "pink"

	//ball radius 
	this.radius = 40


	//draw ball
	this.drawCircle = function () {
		ctx.save()
		ctx.fillStyle = this.bcolor
		ctx.strokeStyle = "rgb(230, 24, 144)"
		ctx.lineWidth = "5"
		ctx.beginPath()
		ctx.arc(this.bx, this.by, this.radius, 0, 360 * Math.PI / 180, true);
		ctx.stroke()
		ctx.fill()
		ctx.restore()

	}
	// draw rect
	this.drawRect = function () {
		ctx.save()
		ctx.fillStyle = this.color
		ctx.translate(this.rx, this.ry)
		ctx.fillRect((-this.rwidth), (-this.rheight / 12), this.rwidth, this.rheight)
		ctx.restore()

	}

	//changes the player's position (animate)
	this.move = function () {
		//rect
		this.x += this.vx
		this.y += this.vy
        //ball
		this.bx += this.bsvx
		this.by += this.bsvy
	}
}
