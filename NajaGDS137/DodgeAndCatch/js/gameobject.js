
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


    //------Allows us to pass object literals into the class to define its properties--------//
    //------This eliminate the need to pass in the property arguments in a specific order------------//
    if (obj !== undefined) {
        for (value in obj) {
            if (this[value] !== undefined)
                this[value] = obj[value];
        }
    }


    //whether or not the object can jump
    this.canJump = false;
    this.jumpHeight = -25;


    this.drawRect = function () {
       ctx.save();
       ctx.fillStyle = this.color;
       ctx.translate(this.x, this.y);
       ctx.fillRect((-this.width / 2), (-this.height / 2), this.width, this.height);
       ctx.restore();

    }
    this.drawScore = function () {

		ctx.font = "30px Arial"
		ctx.fillStyle = "black"
        ctx.weight = "bold"
		ctx.fillText("Score:  " + score1, 50, 30)
		

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

    //draws a triangle
    this.drawTriangle = function () {
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

    this.hitTestObject = function (obj) {
        if (this.left().x <= obj.right().x &&
            this.right().x >= obj.left().x &&
            this.top().y <= obj.bottom().y &&
            this.bottom().y >= obj.top().y) {
            return true
        }
        return false;
    }

    //------Tests whether a single point overlaps the bounding box of another object-------
    this.hitTestPoint = function (obj) {
        if (obj.x >= this.left().x &&
            obj.x <= this.right().x &&
            obj.y >= this.top().y &&
            obj.y <= this.bottom().y) {
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


}
