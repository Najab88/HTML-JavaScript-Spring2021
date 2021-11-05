//do not change this file!!!!

function GameObject(obj)
{

	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.width = 100;
	this.height = 100;
	this.color = "#ff0000";
	this.force = 1;
	this.ax = 1;
	this.ay = 1;
	this.vx = 0;
	this.vy = 0;

	if(obj!== undefined)
		{
			for(value in obj)
			{
				if(this[value]!== undefined)
				this[value] = obj[value];
			}
		}

	this.drawRect = function () {
		ctx.save()
		ctx.fillStyle = this.color
		ctx.translate(this.x, this.y)
		ctx.fillRect((-this.width / 2), (-this.height / 2), this.width, this.height)
		ctx.restore()

	}

	this.drawCircle = function () {
		context.save();
		context.fillStyle = this.color;
		context.beginPath();
		context.translate(this.x, this.y);
		context.arc(0, 0, this.radius(), 0, 360 * Math.PI / 180, true);
		context.closePath();
		context.fill();
		context.restore();

	}

	this.move = function () {
		this.x += this.vx;
		this.y += this.vy;
	}


	//---------Returns object's for the top, bottom, left and right of an object's bounding box.
	this.left = function () {
		return { x: this.x - this.width / 2, y: this.y }
	}
	this.right = function () {
		return { x: this.x + this.width / 2, y: this.y }
	}

	this.top = function () {
		return { x: this.x, y: this.y - this.height / 2 }
	}
	this.bottom = function () {
		return { x: this.x, y: this.y + this.height / 2 }
	}

	this.hitObject = function (obj) {
		if (this.left().x <= obj.right().x &&
			this.right().x >= obj.left().x &&
			this.top().y <= obj.bottom().y &&
			this.bottom().y >= obj.top().y) {
			return true
		}
		return false;
	}

	//------Tests whether a single point overlaps the bounding box of another object-------
	this.hitTestPoint = function(obj)
	{
		if(obj.x >= this.left().x && 
		   obj.x <= this.right().x &&
		   obj.y >= this.top().y &&  
		   obj.y <= this.bottom().y)
		{
			return true;
		}
		return false;
	}

	/*-----Sets or gets the radius value--------*/
	this.radius = function(newRadius)
	{
		 if(newRadius==undefined)
		 {
			return this.width/2; 
		 }
		 else
		 {
			 return newRadius;
		 }
	}
}
