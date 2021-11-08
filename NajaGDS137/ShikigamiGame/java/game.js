canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
canvas.style.backgroundColor = "black";


var canvas
var ctx

//timer/moves player
//var timer
var interval = 1000 / 60
timer = setInterval(animate, interval)

//____________________________ This is the background images__________________________________________
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


//____________________________________________player_________________________________________________

var ha = new Image() // player sprite image
ha.src = "images/haku.png"
ha.onload = function () {
    animate()
}
//player
var haku = new GameObject()
haku.color = "rgb(230, 24, 144, 0)"
haku.x = 512
haku.y = canvas.height / 2
haku.width = 60
haku.height = 80

// moves with mouse
canvas.addEventListener("mousemove", function (evt) {
    var rect = canvas.getBoundingClientRect();

    haku.x = evt.clientX - rect.left
    haku.y = evt.clientY - rect.top
})

//_____________________________________Bullets__________________________________________________

var bul = new Image() //bullets image
bul.src = "images/fire.png"
bul.onload = function () {
    animate()
}

//bullets
var shot = false
var shooting = false
var bullets = new GameObject()
bullets.x = -900
bullets.y = haku.y
bullets.width = 25
bullets.height = 25
bullets.color = "rgb(230, 24, 144, 0)"

//____________________________________________This is the enemy array______________________________________________

var paper = new Image() // enemy/shiki image
paper.src = "images/paper.png"
paper.onload = function () {
    animate()
}

var amount = 10
var shiki = new Array()
shiki.vx = -3


for (var i = 0; i < amount; i++) {
    shiki[i] = new GameObject()
    shiki[i].width = random(60, 120)
    shiki[i].height = random(60, 120)
    shiki[i].x = Math.random() * canvas.width // or (rand 0,canvas.width)
    shiki[i].y = Math.random() * canvas.height 
    shiki[i].vy = random(1, 10)
    shiki[i].vx = random(1, 10)

}


//____________________________________this is health bar________________________________
var health = new GameObject()
health.x = 155
health.y = 56
health.width = 212
health.height = 30
health.color = "cyan"
var startHealth = 100
var healthbar = startHealth

var topbar = new GameObject()
topbar.y=35
topbar.width = 1224
topbar.height=73
topbar.color="pink"

//_______________________________________________this is the arena_________________________________
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





function animate() {
    //clear the screen
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //rotate ++

    bgx += bg.vx
    bgx2 += bg2.vx



    ctx.drawImage(bg, bgx, 0, canvas.width + 5, canvas.height)
    ctx.drawImage(bg2, bgx2, bg2.y, canvas.width + 5, canvas.height)
    ctx.drawImage(bg3, bgx3, bg2.y, canvas.width + 5, canvas.height)
    topbar.drawRect()
    health.drawBar()


    //______________________________enemy__________________________________________________________
    for (var i = 0; i < shiki.length; i++) {

        shiki[i].x += -shiki[i].vx;
        //shiki[i].y += shiki[i].vy;

        //resets enemies
        if (shiki[i].x < 0) {
            shiki[i].x = canvas.width

        }
        // if enemies hits bullets
        if (shiki[i].hitObject(bullets)) {
            shiki[i].x = 3000
            score2++

        }//if enemes hit player
        if (shiki[i].hitObject(haku)) {
            shiki[i].x = 3000
            score1 -= 50

        }




        ctx.drawImage(paper, shiki[i].x, shiki[i].y, shiki[i].width, shiki[i].height)
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
    if (w && !shot) {
        //moves up 
        // haku.y += -6
        //shiki.y = haku.y * 2
        shot = true
        reset(bullets)
        bullets.vy = dirY = -10
        bullets.vx = dirX = 0

    }
    if (s && !shot) {
        //moves down 
        //haku.y += 6

        shot = true
        reset(bullets)
        bullets.vy = dirY = 10
        bullets.vx = dirX = 0
    }
    if (a && !shot) {
        //moves left
        // haku.x += -6
        shot = true
        reset(bullets)
        bullets.vy = dirY = 0
        bullets.vx = dirX = -10
    }
    if (d && !shot) {
        //moves down 
        //haku.x += 6
        shot = true
        reset(bullets)
        bullets.vy = dirY = 0
        bullets.vx = dirX = 10
    }
    /*if (space  && !shot) {
         shot = true
         reset(bullets)
         bullets.vy = dirY = 0
         bullets.vx = dirX = 10
     }*/

    bullets.move()

    if (!arena.hitObject(bullets)) {
        reset(bullets)
        bullets.x = -500
        hak(haku)
    }
    //bullet collisions
    //___________________________draw on screen__________________________________________
    ctx.save()
    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.moveTo(canvas.width, 73)
    ctx.lineTo(0, 73)
    ctx.closePath()
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.restore()


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
    if (hak.y <  topbar.height+39 ) {
        hak.y =  topbar.height+39
    }
    if (hak.x >  topbar.width - hak.width / 2) {
        hak.x =  topbar.width - hak.width / 2
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
function restartGame() {
    location.reload();
}




