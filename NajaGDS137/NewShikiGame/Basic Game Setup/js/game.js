var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var interval = 1000 / 60;
var timer = setInterval(animate, interval);

var sound = document.querySelector("#sound");
var healthup = document.querySelector("#healthup");


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


/*var soundbox = new GameObject() //play sound
soundbox.color = "rgb(230, 24, 144)"
soundbox.x = 1000
soundbox.y = canvas.height / 2
soundbox.width = 2
soundbox.height = canvas.height*/


var win1 = new Image() //win background
win1.src = "images/win.png"

var lose = new Image() //win background
lose.src = "images/lose.png"

//bg speed
bg.vx = -1
bg2.vx = -1
bg3.vx = -1
//soundbox.vx = -2

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
    powerup.y = 4000
    powerup.vy = 3
}
//____________________________________________player_________________________________________________
var himg = new Image() //player image
himg.src = "images/haku.png"

var hkglow = false
var hkglow2 = false


var himg2 = new Image() //player green
himg2.src = "images/hkglw.png"

var himg3 = new Image() //player red
himg3.src = "images/hakured.png"

var haku = new GameObject()
haku.color = "rgb(230, 24, 144,0)"
haku.x = 512
haku.y = canvas.height / 2
haku.width = 55
haku.height = 55
haku.vx = 0

//____________________________________________Boss_________________________________________________
var yub = new Image() //boss image
yub.src = "images/yub.png"

var bird = new Image() //boss image
bird.src = "images/bird.png"


var boss = new GameObject()
boss.color = "rgb(230, 24, 144,0)"
boss.x = 10024//2400
boss.y = 200
boss.width = 140
boss.height = 140
boss.vx = 1
boss.vy = 1
var bosshealth = 5000



//_______________________________________________bullets______________________
var bul = new Image() //bullets image
bul.src = "images/fire.png"


var shot = false
var shooting = false
var bulamount = 10
var bullets = new Array()

//_____________________________________________Enemy__________________________________________

var paper = new Image() //enemy image
paper.src = "images/paper.png"

var amount = 24
var shiki = new Array()



for (var i = 0; i < amount; i++) {
    shiki[i] = new GameObject({ width: 50, height: 50 })


    shiki[i].x = Math.random() * canvas.width + 600
    shiki[i].y = Math.random() * -canvas.height
  

    shiki[i].vx = random(1, 7)
    shiki[i].width = random(20, 37)
    shiki[i].height = random(20, 37)
    shiki[i].color = "rgb(230, 24, 144,0)"
    if (shiki[i] < canvas.width)
    {
        shiki[i].amount +=100
    }

}

//____________________________________this is health bar________________________________
var health = new GameObject()
health.x = 25
health.y = 10
health.width = 300
health.height = 30
health.color = "cyan"
var startHealth = 100
var healthbar = startHealth

var health2 = new GameObject()
health2.x = 25
health2.y = 10
health2.width = 300
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
var score22 = new GameObject()
var howplay= new GameObject()
score.x = 500
score.y = 500
var score1 = startHealth
var score2 = 0
var score3 = bosshealth


var bulletCount = 0

    


//________________________________________________This is the token explode_________________________________________
var token = new Image() //player image
token.src = "images/token.png"


var tamount = 200
var tokens = []

var colors = []
colors[0] = "rgb(81, 173, 254)"
colors[1] = "rgb(46, 222, 254)"
colors[2] = "rgb(52, 109, 103)"
colors[3] = "rgb(244, 242, 243)"

// set size of tokens

for (var i = 0; i < tamount; i++) {
    tokens[i] = new GameObject({ x: canvas.width/2, y:canvas.height/2, width: 30, height: 30 })
    tokens[i].color = colors[Math.floor(random(0, 3.9))]
   
    tokens[i].vx = random(-25, 10)
    tokens[i].vy = random(-25, 10)
}


function animate() {


    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // background image speed
    bgx += bg.vx
    bgx2 += bg2.vx
    bgx3 += bg3.vx
   // soundbox.x += soundbox.vx
    
    haku.x += haku.vx
    // draw bg on screen

    ctx.drawImage(bg, bgx, 0, canvas.width + 5, canvas.height)
    ctx.drawImage(bg2, bgx2, bg2.y, canvas.width + 5, canvas.height)
    ctx.drawImage(bg3, bgx3, bg2.y, canvas.width + 5, canvas.height)
    //soundbox.drawRect()
    // topbar.drawRect()
    health2.drawBar()
    health.drawBar()
   
    //_________________________________________________________________powerup____________________________________
    powerup.y += powerup.vy

    //resets powerup
    if (powerup.y > 900 + powerup.height) {
        powerup.y = -4000 + Math.random() / canvas.width
        powerup.x = Math.random() * canvas.height + 130
    }
    if (haku.hitObject(powerup)) {
        score1 = score1 + 10
        health.width = health.width + 10
        powerup.y = -9000 + Math.random() / canvas.width
        powerup.x = Math.random() * canvas.height + 130
        healthup.play()

        if (score1 > 100) {
            score1 = 100

        }
        if (health.width > 300) {
            health.width = 300

        }
        if (health.width < 0) {
            health.width = 0

        }

        if (hkglow == false) {
            glow()
        }
       
    }

    if (boss.hitObject(haku)) {
        score1 -= 5
        health.width = health.width - 5

        
      
        if (hkglow2 == false) {
            glow2()
        }
    }

    //______________________________Bullets__________________________________________________________
    for (b in bullets) {
        bullets[b].x += bullets[b].vx
        bullets[b].y += bullets[b].vy
        bullets[b].color = "rgb(230, 24, 144, 0)"
        bullets[b].drawRect()
        ctx.drawImage(bul, bullets[b].x - 25, bullets[b].y - 35, 70, 70)

        for (i in shiki) {
            if (shiki[i].hitObject(bullets[b])) {
                shiki[i].x = 3000
                score2++
                bullets[b].x = -500;
                bullets[b].y = -500

            }
        }

        if (boss.hitObject(bullets[b])) {
            score2 += 35
            score3 -= 80
            bosshealth -= 80
            bullets[b].x = -500;
            bullets[b].y = -500
        }
        if (bullets[b].x > canvas.width)
        {
            bullets[b].x = -500000000000000000000000
        }if (bullets[b].y > canvas.height)
        {
            bullets[b].y = -500000000000000000000000
        }
    }
    
    //______________________________enemy__________________________________________________________
    for (var i = 0; i < amount; i++) {

        shiki[i].x += -shiki[i].vx
        //shiki[i].y += shiki[i].vy;

        //resets enemies
        if (shiki[i].x < 0 - shiki[i].width) {
            // shiki[i].x = canvas.width
            
            shiki[i].x = canvas.width * 1
            shiki[i].y = Math.random() * canvas.height - 25
            shiki[i].amount +6
        }
        // if enemies hits bullets

        //if enemes hit player
        if (shiki[i].hitObject(haku)) {
            shiki[i].x = 3000
            
            score1 = score1 - 2
            
            if (score1 <= 0) {
                score1 = 0

            }
            //health bar movement
            health.width = health.width - 2

            if (hkglow2 == false) {
                glow2()
            }

        }

        shiki[i].drawTri()
        ctx.drawImage(paper, shiki[i].x - 50, shiki[i].y - 43, 100, 100)
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
    /*if (soundbox.hitObject(haku) ) {
      play()
       


    }*/


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
    if (d) {
        //moves down 
        haku.x += 6
    }





    //_____________________________________bullet shoot keys_________________________________________
    if (ArrowUp && canShoot) {
        //shoot up
        canShoot = false;
        bullets[bulletCount] = new GameObject({ width: 25, height: 25, angle: 270, x: haku.x, y: haku.y, vx: Math.cos(270 * Math.PI / 180) * 10, vy: Math.sin(270 * Math.PI / 180) * 10 })
        bulletCount++;
        sound.currentTime = 1
        sound.play()
        clearTimeout(time);
        time = setTimeout(set, delay);
        
    }
    if (ArrowDown && canShoot) {
        //shootdown 
        canShoot = false;
        bullets[bulletCount] = new GameObject({ width: 25, height: 25, angle: 90, x: haku.x, y: haku.y, vx: Math.cos(90 * Math.PI / 180) * 10, vy: Math.sin(90 * Math.PI / 180) * 10 })
        bulletCount++;
        sound.currentTime = 1
        sound.play()
        clearTimeout(time);
        time = setTimeout(set, delay);
    }
    if (ArrowLeft && canShoot) {
        //shoot left
        canShoot = false;
        bullets[bulletCount] = new GameObject({ width: 25, height: 25, angle: 180, x: haku.x, y: haku.y, vx: Math.cos(180 * Math.PI / 180) * 10, vy: Math.sin(180 * Math.PI / 180) * 10 })
        bulletCount++;
        sound.currentTime = 1
        sound.play()
        clearTimeout(time);
        time = setTimeout(set, delay);
    }
    if (ArrowRight && canShoot) {
        //Shoot Right 
        canShoot = false;
        bullets[bulletCount] = new GameObject({ width: 25, height: 25, angle: 0, x: haku.x, y: haku.y, vx: Math.cos(0 * Math.PI / 180) * 10, vy: Math.sin(0 * Math.PI / 180) * 10 })
        bulletCount++;
        sound.currentTime = 1
        sound.play()
        clearTimeout(time);
        time = setTimeout(set, delay);
    }
    // bullets[i].move()


    // draw on screen
    hak(haku)
    pointYub()
    score.drawScore()
    score22.drawScore2()
    howplay.drawScore3()
    powerup.drawRect()
    ctx.drawImage(oni, powerup.x - 32, powerup.y - 40, 70, 80)
 
    haku.drawRect()
    //ctx.drawImage(yub, boss.x - 150, boss.y - 120, 312, 200)

    

    if (hkglow == false) {
        ctx.drawImage(himg, haku.x - 52, haku.y - 78, 135, 135)
    }//green
    if (hkglow == true) {
        ctx.drawImage(himg2, haku.x - 52, haku.y - 78, 135, 135)
    }
    
    if (hkglow2 == false) {
        ctx.drawImage(himg, haku.x - 52, haku.y - 78, 135, 135)
    }
    //red
    if (hkglow2 == true) {
        ctx.drawImage(himg3, haku.x - 52, haku.y - 78, 135, 135)
    }

    //______________________________BOSS_______________________________________________
    if (bosshealth  <= 2500)
     {

        ctx.drawImage(bird, boss.x - 120, boss.y - 100, 212, 200)
     }
    if (bosshealth  > 2500)
     {
        ctx.drawImage(yub, boss.x - 120, boss.y - 100, 212, 200)
     }
    boss.drawRect();

    // _________________GAME OVER!!!!_____________________________________________________
    if (score1 <= 0)
     { // you lose
             
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(lose, 0,0,canvas.width, canvas.height)
            hkglow = false
            score1 = 0
            score2 = 0
        
           powerup.x =0
           canShoot= false
           
            
    }
    if (bosshealth < 0) {

        // you win
        setTimeout(explode)
        win()

    }
    
}

// random math gen
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

// boss movement
function pointYub() {

    var dy = haku.y - boss.y
    var dx = haku.x - boss.x
    var radians = Math.atan2(dy, dx)

    boss.angle = radians * 180 / Math.PI
    boss.vx = Math.cos(radians) * boss.force
    boss.vy = Math.sin(radians) * boss.force

    boss.x += boss.vx
    boss.y += boss.vy

    boss.move()
}

function glow() {
    if (hkglow == false) {
        hkglow = true
        setTimeout(function () { hkglow = false }, 700)
    }

}
function glow2() {
    if (hkglow2 == false) {
        hkglow2 = true
        setTimeout(function () { hkglow2 = false }, 700)
    }

}

function explode() {

    boss.x = -10000

    //_______________________________Explode____________________________________________
    for (var t = 0; t < tokens.length; t++) {

        tokens[t].drawCircle();

        tokens[t].x += tokens[t].vx;
        tokens[t].y += tokens[t].vy;
     
        
    }

}


function win()
{
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(win1, 0,0,canvas.width, canvas.height)
    hkglow = false
    score1 = 0
    score2 = 0
   powerup.x =0
   canShoot= false
   
    
}

var canShoot = true
var time
var delay = 350

function set() {
    console.log(canShoot)
    canShoot = true;
}

function play() {
    var audio = document.getElementById("audio")
    var audio = new Audio("sounds/dboy.mp3")
    audio.play()
    audio.currentTime=20

}
function how()
{
context.save();
	context.fillStyle = "black";
	context.font = "bold 10px Arial"
	context.fillText("You Lose", 300, 25)
	context.restore();
}