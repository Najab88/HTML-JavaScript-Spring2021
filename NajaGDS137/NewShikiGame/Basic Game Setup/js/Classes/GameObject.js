
function GameObject(obj) {
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

	
	//the angle that the graphic is drawn facing.
	this.angle = 0;
	//force
	this.force = 1

	//------Allows us to pass object literals into the class to define its properties--------//
	//------This eliminate the need to pass in the property arguments in a specific order------------//
	if(obj!== undefined)
		{
			for(value in obj)
			{
				if(this[value]!== undefined)
				{
					this[value] = obj[value];
				}
			}
		}


	//whether or not the object can jump
	this.canJump = false;
	this.jumpHeight = -25;


	this.drawRect = function () {
		ctx.save()
		ctx.fillStyle = this.color
		ctx.translate(this.x, this.y)
		ctx.rotate(this.angle * Math.PI/180);
		ctx.fillRect((-this.width / 2), (-this.height / 2), this.width, this.height)
		ctx.restore()

	}
	
	this.drawBar = function () {
		ctx.save()
		ctx.fillStyle = this.color
		ctx.translate(this.x, this.y)
		ctx.lineWidth = 5;
		//ctx.rotate(this.angle * Math.PI / 180);
		ctx.strokeRect(0, 0, this.width, this.height)
		ctx.fillRect(0, 0, this.width, this.height)
		ctx.restore()

	}
	this.drawScore = function () {

		ctx.font = "20px Verdana"
		ctx.fillStyle = "black"
		ctx.fillText("Health:  " + score1, 50, 30)
		ctx.fillText("High Score:  " + score2, 1000, 30)
		
	}
	this.drawScore2 = function () {

		ctx.font = "bold 14px Verdana"
		ctx.fillStyle = "black"
		ctx.fillText("Health:" + score3, boss.x-65, boss.y +112)

	}
	this.drawScore3 = function () {

		ctx.font = "bold 14px Verdana"
		ctx.fillStyle = "black"
		ctx.fillText("Shoot:" +  " Arrow Keys",500, 20)
		ctx.fillText("Move:" +  " A, W, S, D ",500, 40)

	}

	this.drawCircle = function () {
		ctx.save();
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.translate(this.x, this.y);
		ctx.arc(0, 0, this.radius(), 0, 360 * Math.PI / 180, true);
		ctx.closePath();
		ctx.fill();
		ctx.restore();

	}
	this.drawYub = function () {
		ctx.save()
		ctx.translate(this.x, this.y)
		ctx.rotate(this.angle * Math.PI / 180);
		ctx.drawImage(yub,boss.x,boss.y,312,200)
		ctx.restore()
	}
	//draws a triangle
	this.drawTri = function () {
		ctx.save();
		ctx.fillStyle = this.color;
		ctx.translate(this.x, this.y);
		//To convert deg to rad multiply deg * Math.PI/180
		ctx.rotate(this.angle * Math.PI / 180);
		ctx.beginPath();
		ctx.moveTo(0 + this.width / 2, 0);
		ctx.lineTo(0 - this.width / 2, 0 - this.height / 4);
		ctx.lineTo(0 - this.width / 2, 0 + this.height / 4);
		ctx.closePath();
		ctx.fill();
		ctx.restore();

	}
	

	this.move = function () {
		this.x += this.vx;
		this.y += this.vy;
	}


	//---------Returns object's for the top, bottom, left and right of an object's bounding box.
	this.left = function() 
	{
		return {x:this.x - this.width/2 , y:this.y}
	}
	this.right = function() 
	{
		return {x:this.x + this.width/2 , y:this.y}
	}
	
	this.top = function() 
	{
		return {x:this.x, y:this.y - this.height/2}
	}
	this.bottom = function() 
	{
		return {x:this.x , y:this.y + this.height/2}
	}
	
	this.hitObject = function(obj)
	{
		if(this.left().x <= obj.right().x && 
		   this.right().x >= obj.left().x &&
		   this.top().y <= obj.bottom().y &&
		   this.bottom().y >= obj.top().y)
		{
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
	this.radius = function (newRadius) {
		if (newRadius == undefined) {
			return this.width / 2;
		}
		else {
			return newRadius;
		}
	}

	//Draws the collision points
	this.drawDebug = function () {
		var size = 5;
		ctx.save();
		ctx.fillStyle = "black";
		ctx.fillRect(this.left().x - size / 2, this.left().y - size / 2, size, size);
		ctx.fillRect(this.right().x - size / 2, this.right().y - size / 2, size, size);
		ctx.fillRect(this.top().x - size / 2, this.top().y - size / 2, size, size);
		ctx.fillRect(this.bottom().x - size / 2, this.bottom().y - size / 2, size, size);
		ctx.fillRect(this.x - size / 2, this.y - size / 2, size, size);
		ctx.restore();
	}
}
