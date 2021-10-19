//do not change this file!!!!




function GameObject(x, y, w, h, color)

 {

	//Default Values
	if (x == undefined)
		this.x = canvas.width / 2
	else
		this.x = x
	if (y == undefined)
		this.y = canvas.height / 2
	else
		this.y = y

	if (w == undefined)
		this.width = 40
	else
		this.width = w
	if (h == undefined)
		this.height = 100
	else
		this.height = h

	//player's color
	if (color == undefined)
		this.color = "pink"
	else
		this.color = color

	//player's velocity or speed on each axis
	this.vx = 0
	this.vy = 0

	//force
	this.force = 1



	//This draws the player to the screen
	this.drawRect = function () {
		ctx.save()
		ctx.fillStyle = "violet"
		ctx.translate(this.x, this.y)
		ctx.fillRect((-this.width / 2), (-this.height / 2), this.width, this.height)
		ctx.restore()

	}

	this.drawCircle = function () {
		ctx.save()
		ctx.fillStyle = this.color
		ctx.strokeStyle = "rgb(230, 24, 144)"
		ctx.lineWidth = "5"
		ctx.beginPath()
		ctx.translate(this.x, this.y)
		ctx.arc(0, 0, this.width / 2, 0, 360 * Math.PI / 180, true)
		ctx.stroke()
		ctx.closePath()
		ctx.fill()
		ctx.restore()

		
	}

	//This changes the player's position
	this.move = function () {
		this.x += this.vx
		this.y += this.vy
	}

	this.left = function () {
		return this.x - this.width / 2
	}
	this.right = function () {
		return this.x + this.width / 2
	}

	this.top = function () {
		return this.y - this.height / 2
	}
	this.bottom = function () {
		return this.y + this.height / 2
	}

	this.hitObject = function (obj) {
		if (this.left() < obj.right() &&
			this.right() > obj.left() &&
			this.top() < obj.bottom() &&
			this.bottom() > obj.top()) {
			return true
		}
		return false
	}

}
