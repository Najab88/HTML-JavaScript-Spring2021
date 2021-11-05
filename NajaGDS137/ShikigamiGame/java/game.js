canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
canvas.style.backgroundColor = "black";
var canvas
var ctx

//timer/moves player
//var timer
var interval = 1000 / 60
timer = setInterval(animate, interval)

//images
var bgx =0
var bgx2 =2048
var bg = new Image() //sky background
bg.src = "images/sky.jpg"
bg.onload = function () {
    animate()
}
var bg2 = new Image() //sky background
bg.src = "images/sky.jpg"
bg.onload = function () {
    animate()
}
bg.vx = -1
bg.vy = 0
bg2.vx = -1
bg2.vy = 0


var ha = new Image() // player sprite
ha.src = "images/haku.png"
ha.onload = function () {
    animate()
}

var cloud = new Image() // floating clouds
cloud.src = "images/cloud.png"
cloud.onload = function () {
    animate()
}

var bul = new Image() //bullets
bul.src = "images/gum2.png"
bul.onload = function () {
    animate()
}


//score = 0


// this is the player
var haku = new GameObject()
haku.color = "rgb(230, 24, 144, 0)"
haku.x = 512
haku.y = canvas.height / 2
haku.width = 60
haku.height = 80
var rotate = 0


// this is the enemy
var shiki = new GameObject()
shiki.color = "blue"
shiki.x = 512
shiki.y = 300
shiki.width = 70
shiki.height = 70
shiki.vx = 3
shiki.vy = 0


var dirX = 0
var dirY = 0

// this is the canvas size
var arena = new GameObject()
arena.width = canvas.width
arena.height = canvas.height

//bullets
var shot = false
var shooting = false
var bullets = new GameObject()
bullets.x = -900
bullets.y = haku.y
bullets.width = 25
bullets.height = 25
bullets.color = "rgb(230, 24, 144, 0)"


//___________________________________this is the scrolling background__________________________________
var amount = 8;
var particles = [];
var colors = ["white", "cyan", "grey"];

// random particles
for (var p = 0; p < amount; p++) {
    particles[p] = new GameObject({ width: 10, height: 10 })
    particles[p].x = Math.random() * canvas.height;
    particles[p].y = Math.random() * canvas.width;
    particles[p].vx = Math.random()*1+1
    //particles[p].color = colors[Math.floor(random(0, 2.9))]
    particles[p].Image = cloud;
}
//_______________________________________end scrolling bg________________________________________________



// player score
//var score = new GameObject()
//var score1 = 0
//var score2 = 0



//Animation Timer
timer = setInterval(animate, interval)

function animate() {
    //clear the screen
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //rotate ++

    bgx += bg.vx
    bgx2 += bg2.vx
    
  

    //__________________________________keypresses____________________________________________
    if (w) {
        //moves up 
        haku.y += -6
        
    }
    if (s) {
        //moves down 
        haku.y += 6
    }
    if (a) {
        //moves left
        haku.x += -6
    }
    if (d) {
        //moves down 
        haku.x += 6
    }

    //_______________________________________bulletpresses_____________________________________________
    if (ArrowUp && !shot) {
        //shoot up 
        shot = true
        reset(bullets)
        bullets.vy = dirY = -10
        bullets.vx = dirX = 0
    }
    if (ArrowDown && !shot) {
        //shoot down
        shot = true
        reset(bullets)
        bullets.vy = dirY = 10
        bullets.vx = dirX = 0
    }
    if (ArrowLeft && !shot) {
        //shoot left
        shot = true
        reset(bullets)
        bullets.vy = dirY = 0
        bullets.vx = dirX = -10
    }
    if (ArrowRight && !shot) {
        //shoot down 
        shot = true
        reset(bullets)
        bullets.vy = dirY = 0
        bullets.vx = dirX = 10
    }

    //________________________________________bullets____________________________________________________________

    bullets.move()

    if (!arena.hitObject(bullets)) {
        reset(bullets)
        bullets.x = -500
        hak(haku)
    }
    //bullet collisions

    if (bullets.hitObject(shiki)) {

        bullets.x = shiki.x
        shiki.x = 3000
    }
    

    ctx.drawImage(bg, bgx, 0, canvas.width, canvas.height)
    ctx.drawImage(bg2, bgx2, 0, canvas.width, canvas.height)
   
    //_______________________________________this is the scrolling background____________________________________
    for (var p = 0; p < particles.length; p++) {

        particles[p].x += particles[p].vx;

//random speed
        particles[p].vx = random(1, 2.9)

        //puts back on screen
        if (particles[p].x > canvas.width) {
            particles[p].x = 0
        }

        ctx.drawImage(cloud, particles[p].x, particles[p].y, 90, 90)
        
        
        
    }
//puts back on screen
if (bg.x > canvas.width) {
    bg.x = 0
} 
    
    //___________________________________________draw on screen__________________________________________
    
    
    bullets.drawRect()
    haku.drawRect()
    shiki.drawRect()
    ctx.drawImage(bul, bullets.x-20, bullets.y -20, 50, 50)
    ctx.drawImage(ha, haku.x -70,haku.y -78, 150, 150)
    
    //score.drawScore()

}

//__________________________________________functions______________________________________________________
function random(low, high) {
    return Math.random() * (high - low) + low;
}

// haku boundry
function hak(hak) {
    if (hak.y > canvas.height - hak.height / 2) {
        hak.y = canvas.height - hak.height / 2
    }
    if (hak.y < 0 + hak.height / 2) {
        hak.y = 0 + hak.height / 2
    }
    if (hak.x > canvas.width - hak.width / 2) {
        hak.x = canvas.width - hak.width / 2
    }
    if (hak.x < 0 + hak.width / 2) {
        hak.x = 0 + hak.width / 2
    }
}



function reset(bullets) {
    bullets.y = haku.y
    bullets.x = haku.x

    shot = false
    bullets.vy = 0
}



