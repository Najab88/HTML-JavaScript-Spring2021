// JavaScript Document
function Ball() {
    //player's location
    this.x = canvas.width / 2
    this.y = canvas.height / 2

    //player's dimensions
    this.width = 75
    this.height = 75

    //player's velocity or speed on each axis
    this.vx = 0
    this.vy = 0

    //player's color


    //This draws the player to the screen
    this.draw = function () {
        ctx.save()
        ctx.fillStyle = this.color
        ctx.translate(this.x, this.y)
        ctx.fillRect((-this.width / 2), (-this.height / 2), this.width, this.height)
        ctx.restore()

    }

    //This changes the player's position
    this.move = function () {
        this.x += this.bx
        this.y += this.by
    }
    
}
