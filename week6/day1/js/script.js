var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

function randomRange(high, low){
    return Math.random() * (high - low) + low
}

function GameObject(){
    //examples of properties in a class
    this.radius = randomRange(10,2)
    this.color = `rgb(${randomRange(0,255)},${randomRange(0,255)},${randomRange(0,255)})`
    this.x = randomRange(canvas.width,0)
    this.y = randomRange(canvas.height,0)
    this.vx = randomRange(30,0)
    this.vy = randomRange(30,0)

    //examples of a method in a class
    this.drawCircle = function(){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true)
        ctx.closePath()
        ctx.fill()
    }
    // this method handles the movement
    this.move = function(){
        //this.x += this.vx
        this.y += this.vy

        if(this.y > canvas.height + this.radius){
            this.y = -this.radius
        }
    }
}

//create an instance of the game object class
var particles = new GameObject()

//particle.x = 10
//particle.drawCircle()

//create an arry or particles (0,1,2)
var particles = []

var numParticles = 1000
var timer = requestAnimationFrame(main)
//for loop
for(var i = 0; i<numParticles; i++){
    particles[i] = new GameObject()
    particles[i].drawCircle()
}

function main(){
ctx.clearRect(0,0,canvas.width, canvas.height)

for(var i=0; i<particles.length; i++){
   // particles[i].y += 1
   particles[i].move()
    particles[i].drawCircle()
}
timer = requestAnimationFrame(main)
}