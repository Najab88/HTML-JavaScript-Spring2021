// JavaScript Document
function Ball() {
    //player's location
    this.x = canvas.width / 2
    this.y = canvas.height / 2

    //player's dimensions
    this.width = 100
    this.height = 300

    //player's velocity or speed on each axis
    this.vx = 2
    this.vy = 2

    //player's color
    this.color = "pink"
    this.radius = 60


    //This draws the player to the screen
    this.draw = function () {
        ctx.save()
        ctx.fillStyle = this.color
        ctx.strokeStyle = "rgb(230, 24, 144)"
        ctx.lineWidth = "5"
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 360 * Math.PI / 180, true);
        ctx.stroke();
        ctx.fill()
        ctx.restore()

    }



    //This changes the player's position
    this.move = function () {
        this.x += this.vx
        this.y += this.vy
    }

}
