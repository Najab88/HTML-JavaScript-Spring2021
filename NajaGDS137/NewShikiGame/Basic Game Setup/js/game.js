var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var interval = 1000 / 60;
var timer = setInterval(animate, interval);



//____________________________ This is the background images__________________________________________
var bgx = 0
var bg = new Image() //sky background1
bg.src = "images/sky.jpg"

var bgx2 = 1224
var bg2 = new Image() //sky background2
bg2.src = "images/sky.jpg"

var bgx3 = 2448
var bg3 = new Image() //sky background3
bg3.src = "images/sky.jpg"

//bg speed
bg.vx = -1
bg2.vx = -1
bg3.vx = -1



//________________________________________PowerUP__________________________________________________
var oni = new Image() //powerup image
oni.src = "images/oni.png"


var powerup = new GameObject()
{
    powerup.color = "rgb(230, 24, 144,0)"
    //powerup.x =  Math.random() * canvas.height
    //powerup.y =  Math.random() * canvas.height
    powerup.width = 45
    powerup.height = 45
    powerup.y = -900
    powerup.vy = 3
}
//____________________________________________player_________________________________________________
var himg = new Image() //player image
himg.src = "images/haku.png"

var himg2 = new Image() //player image
himg2.src = "images/haku.png"

var haku = new GameObject()
haku.color = "rgb(230, 24, 144,0)"
haku.x = 512
haku.y = canvas.height / 2
haku.width = 55
haku.height = 55

//____________________________________________Boss_________________________________________________
var yub= new Image() //boss image
yub.src = "images/yub.png"

var boss = new GameObject()
boss.color = "rgb(230, 24, 144)"
boss.x = 1030
boss.y = 200
boss.width = 180
boss.height = 200

//_______________________________________________bullets______________________
var bul = new Image() //bullets image
bul.src = "images/fire.png"


var shot = false
var shooting = false
var bullets = new GameObject()
bullets.x = -900
bullets.y = haku.y
bullets.width = 25
bullets.height = 25
bullets.color = "rgb(230, 24, 144,0)"

//_____________________________________________Enemy__________________________________________

var paper = new Image() //enemy image
paper.src = "images/paper.png"

var amount = 6
var shiki = new Array()



for (var i = 0; i < amount; i++) {
    shiki[i] = new GameObject({width: 50, height: 50 })

    
    shiki[i].x = Math.random() * canvas.width;
    shiki[i].y = Math.random() * -canvas.height
    
    shiki[i].vx = random(1, 7)
    shiki[i].color = "rgb(230, 24, 144,0)"
}

//____________________________________this is health bar________________________________
var health = new GameObject()
health.x = 180
health.y = 22
health.width = 312
health.height = 30
health.color = "cyan"
var startHealth = 100
var healthbar = startHealth

var health2 = new GameObject()
health2.x = 180
health2.y = 22
health2.width = 312
health2.height = 30
health2.color = "red"

var topbar = new GameObject()
topbar.y = 35
topbar.width = 1224
topbar.height = 73
topbar.color = "pink"

//______________________________________Arena______________________________________________________________________
var arena = new GameObject()
arena.width = canvas.width
arena.height = canvas.height


var gravity = 0

//_______________________________________________this is the player score____________________________________
var score = new GameObject()
score.x = 500
score.y = 500
var score1 = startHealth
var score2 = 0



var fX = .80;
	var fY = .80;
	
	var angle = 0;




function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // background image speed
    bgx += bg.vx
    bgx2 += bg2.vx
    bgx3 += bg3.vx


    // draw bg on screen

    ctx.drawImage(bg, bgx, 0, canvas.width + 5, canvas.height)
    ctx.drawImage(bg2, bgx2, bg2.y, canvas.width + 5, canvas.height)
    ctx.drawImage(bg3, bgx3, bg2.y, canvas.width + 5, canvas.height)
    // topbar.drawRect()
    health2.drawBar()
    health.drawBar()
   
    //_________________________________________________________________powerup____________________________________
    powerup.y += powerup.vy

    //resets powerup
    if (powerup.y > 900 + powerup.height) {
        powerup.y = -9000 + Math.random() / canvas.width
        powerup.x = Math.random() * canvas.height + 130
    }
    if (haku.hitObject(powerup)) {
        score1 += 10
        powerup.y = -9000 + Math.random() / canvas.width
        powerup.x = Math.random() * canvas.height + 130
    }

    


    //_______________________________BOSS__________________________________________________
    if (boss.hitObject(haku))
    {
        score1 -= 5
    }
    if (boss.hitObject(bullets))
    {
        score2 +=5
    }


    //______________________________enemy__________________________________________________________
    for (var i = 0; i < amount; i++) {

        shiki[i].x += -shiki[i].vx
        //shiki[i].y += shiki[i].vy;

        //resets enemies
        if (shiki[i].x < 0 - shiki[i].width) {
            // shiki[i].x = canvas.width
            shiki[i].x = canvas.width * 1
            shiki[i].y = Math.random() * canvas.height -25
        }
        // if enemies hits bullets
        if (shiki[i].hitObject(bullets)) {
            shiki[i].x = 3000
            score2++
        }
        //if enemes hit player
        if (shiki[i].hitObject(haku)) {
            shiki[i].x = 3000
score1 -=2
            //health bar movement
            health.width = score1 / startHealth * 312
        }
        //_____________________________When health reaches 0, reset game over!_____________________
    if (score1 <= 0)
    {
        // reset paper
        for (var i = 0; i < amount; i++) {
            
            
            shiki[i].x = Math.random() * canvas.width;
            shiki[i].y = Math.random() * -canvas.height
            shiki[i].vx = random(1, 7)
            
        }
         //reset powerup
         powerup.y = -9000 + Math.random() / canvas.width
         powerup.x = Math.random() * canvas.height + 130
        
         // reset boss


         // reset player


         // reset score
         score2 = 0
       
    }
        
        shiki[i].drawTri()
        ctx.drawImage(paper, shiki[i].x-50, shiki[i].y-43, 100, 100)
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


    // __________________________________________________move haku______________________________________________
    if (w) {
        //moves up 
        haku.y += -6
         
    }
    if (s) {

        haku.y += 6
    }
    if (a) {
        //moves left
        haku.x += -6
        
        
    }
    if (d ) {
        //moves down 
        haku.x += 6
    }
    
    


    //_____________________________________bullet shoot keys_________________________________________
    if (ArrowUp && !shot) {
        //shoot up 
        shot = true
        reset(bullets)
        bullets.vy = dirY = -10
        bullets.vx = dirX = 0

    }
    if (ArrowDown && !shot) {
        //shootdown 
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
        //Shoot Right 

        shot = true
        reset(bullets)
        bullets.vy = dirY = 0
        bullets.vx = dirX = 10
        
    }
    bullets.move()

    if (!arena.hitObject(bullets)) {
        reset(bullets)
        bullets.x = -500


    }
    hak(haku)
    pointYub()
    
    powerup.drawRect()
    ctx.drawImage(oni, powerup.x - 32, powerup.y - 40, 70, 80)
    bullets.drawRect()
    ctx.drawImage(bul, bullets.x - 25, bullets.y - 35, 70, 70)
    haku.drawRect()
    
    boss.drawRect()
    ctx.drawImage(yub,boss.x-105,boss.y-100, boss.width,boss.height)
    ctx.drawImage(himg, haku.x-52, haku.y-78, 135, 135)
    
    
    score.drawScore()
    //bullet.drawDebug();
}



function random(low, high) {
    return Math.random() * (high - low) + low;
}

// player boundry 
function hak(hak) {

    if (hak.y > canvas.height - hak.height / 2) {
        hak.y = canvas.height - hak.height / 2
        //hak.color = "black" //bottom
    }
    if (hak.y < topbar.height + 20) {
        hak.y = topbar.height + 20
        //hak.color = "red" // top
    }
    if (hak.x > topbar.width - hak.width / 2) {
        hak.x = topbar.width - hak.width / 2
        //hak.color = "blue" // right
    }
    if (hak.x < 0 + hak.width / 2) {
        hak.x = 0 + hak.width / 2
        //hak.color = "purple"// left
    }

}

function pointYub() 
{
	var dx = haku.x - boss.x
	var dy = haku.y - boss.y
	

	var radians = Math.atan2(dy, dx)

	boss.angle = radians *180/Math.PI 
	boss.vx = Math.cos(radians)*boss.force
	boss.vy = Math.sin(radians)*boss.force

	boss.move()

   
    
}
function reset(bullets) {
    bullets.y = haku.y
    bullets.x = haku.x

    shot = false
    bullets.vy = 0
}



