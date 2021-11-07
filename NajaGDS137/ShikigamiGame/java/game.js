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
var bgx = 0
var bg = new Image() //sky background
bg.src = "images/sky.jpg"
bg.onload = function () {
    animate()
}
var bgx2 = 1224
var bg2 = new Image() //sky background
bg2.src = "images/sky.jpg"
bg2.onload = function () {
    animate()
}
var bgx3 = 2448
var bg3 = new Image() //sky background
bg3.src = "images/sky.jpg"
bg3.onload = function () {
    animate()
}
//bg speed
bg.vx = -1
bg2.vx = -1
bg3.vx = -1




var ha = new Image() // player sprite
ha.src = "images/haku.png"
ha.onload = function () {
    animate()
}


var paper = new Image() // floating clouds
paper.src = "images/paper.png"
paper.onload = function () {
   animate()
}


var amount = 10
var shiki = new Array()
shiki.vx=-3



for (var i = 0; i < amount; i++) {
     shiki[i] = new GameObject()
     shiki[i].width = random(60, 120)
     shiki[i].height = random(60, 120)
     shiki[i].x = Math.random() * canvas.width // or (rand 0,canvas.width)
     shiki[i].y = Math.random() * canvas.height
     shiki[i].vy = random(1, 10)
     shiki[i].vx = random(1, 10)
   
    //particles[i].Image = cloud;

}


var bul = new Image() //bullets
bul.src = "images/fire.png"
bul.onload = function () {
    animate()
}


//score = 0

//this is health bar
var health = new GameObject()
health.x = 255
health.y = 56
health.width = 412
health.height = 30
health.color = "cyan"
var startHealth = 100 
var healthbar = startHealth


// this is the player
var haku = new GameObject()
haku.color = "rgb(230, 24, 144, 0)"
haku.x = 512
haku.y = canvas.height / 2
haku.width = 60
haku.height = 80
var rotate = 0


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


var gravity = 0



// player score 
var score = new GameObject()
score.x = 500
score.y = 500
var score1 = startHealth
var score2 = 0




//Animation Timer
timer = setInterval(animate, interval)

function animate() {
    //clear the screen
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //rotate ++

    bgx += bg.vx
    bgx2 += bg2.vx

   
   

    ctx.drawImage(bg, bgx, 0, canvas.width + 5, canvas.height)
    ctx.drawImage(bg2, bgx2, bg2.y, canvas.width + 5, canvas.height)
    ctx.drawImage(bg3, bgx3, bg2.y, canvas.width + 5, canvas.height)
    health.drawRect()

    for (var i = 0; i <  shiki.length; i++) {

        shiki[i].x += -shiki[i].vx;
		//shiki[i].y += shiki[i].vy;

        //rando, enemy speed
        shiki[i].vx = random(1,4.9)
        
        //resets enemies
        if (shiki[i].x < 0 ) {
			shiki[i].x = canvas.width
           
		}
        // if enemies hits bullets
        if (shiki[i].hitObject(bullets)) {
			shiki[i].x = 3000
            score2++

		}//if enemes hit player
        if (shiki[i].hitObject(haku)) {
			shiki[i].x = 3000
            score1 -=2

		}
        


        ctx.drawImage(paper,  shiki[i].x,  shiki[i].y,  shiki[i].width,  shiki[i].height)
    }


    //________________________________health Bar____________________________________________
   
   
    if (healthbar > 0) {
        ctx.fillStyle = "blue"
        ctx.fillRect(48, 40, health.width, health.height)
    }



    //__________________________________keypresses____________________________________________
    if (w) {
        //moves up 
        haku.y += -6
        //shiki.y = haku.y * 2

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

    //___________________________Resets scrolling BG________________________________________
    if (bgx < 0 - canvas.width) {

        bgx = canvas.width

    }
    if (bgx2 < 0 - canvas.width) {

        bgx2 = canvas.width

    }
    if (bgx3 < 0 - canvas.width) {

        bgx3 = canvas.width

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

    //if (bullets.hitObject(shiki)) {

     //   bullets.x = shiki.x
      //  shiki.x = 3000
   // }

    //___________________________________________draw on screen__________________________________________

    
    bullets.drawRect()
    haku.drawRect()
    ctx.drawImage(bul, bullets.x - 20, bullets.y - 24, 60, 60)
    ctx.drawImage(ha, haku.x - 70, haku.y - 78, 150, 150)
    score.drawScore()
    
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





