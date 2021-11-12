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

//____________________________________________player_________________________________________________
//var playerImage= document.getElementById("haku")

var haku = new GameObject()
haku.color = "rgb(230, 24, 144)"
haku.x = 512
haku.y = canvas.height / 2
haku.width = 55
haku.height = 55


//_______________________________________________bullets______________________
var shot = false
var shooting = false
var bullet = new GameObject()
bullet.x = -900
bullet.y = haku.y
bullet.width = 25
bullet.height = 25
bullet.color = "red"

//_____________________________________________Enemy__________________________________________


var amount = 10
var enemy = []
var enemyAdd= +1
//enemy.vx = 3


for (var i = 0; i < amount; i++) {
    enemy[i] = new GameObject()
    enemy[i].color = "orange"
    enemy[i].width = -random(60, 60,) 
    enemy[i].height = -random(60, 60) 
    // random screen spawn
    enemy[i].x = Math.random() * canvas.width // or (rand 0,canvas.width)
    enemy[i].y = Math.random() * canvas.height-100
   
   //random speeds
    enemy[i].vy = random(1, 8) 
    enemy[i].vx = random(1, 8)

  
}


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


//______________________________enemy__________________________________________________________
for (var i = 0; i < amount; i++) {

   enemy[i].x += -enemy[i].vx
   

    //resets enemies
    if (enemy[i].x < 0) {
        enemy[i].x = canvas.width

    }

     // if enemies hits bullets
     if (enemy[i].hitObject(bullets)) {
        enemy[i].x = 3000
        score2++

    }//if enemes hit player
    if (shiki[i].hitObject(haku)) {
        shiki[i].x = 3000
        score1 -= 50

    }

    enemy[i].drawTri();
   
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
    if (d) {
        //moves down 
        haku.x += 6
    }
    // ctx.drawImage(playerImage, haku.x-70, haku.y-78, 50, 50)


    //_____________________________________bullet shoot keys_________________________________________
    if (ArrowUp && !shot) {
        //shoot up 
        shot = true
        reset(bullet)
        bullet.vy = dirY = -10
        bullet.vx = dirX = 0

    }
    if (ArrowDown && !shot) {
        //shootdown 
        shot = true
        reset(bullet)
        bullet.vy = dirY = 10
        bullet.vx = dirX = 0
    }
    if (ArrowLeft && !shot) {
        //shoot left

        shot = true
        reset(bullet)
        bullet.vy = dirY = 0
        bullet.vx = dirX = -10
    }
    if (ArrowRight && !shot) {
        //Shoot Right 

        shot = true
        reset(bullet)
        bullet.vy = dirY = 0
        bullet.vx = dirX = 10
    }

    // player boundry bottom
    if (haku.y > canvas.height - haku.width / 2) {
        haku.y = canvas.height - haku.width / 2

        haku.color = "black"

    }
    //  top screen
    if (haku.y < 0 + haku.width / 2) {
        haku.y = 0 + haku.width / 2

        haku.color = "red"
    }// right screen
    if (haku.x > canvas.width - haku.height / 2) {
        haku.x = canvas.width - haku.height / 2

        haku.color = "blue"

    }
    //  left
    if (haku.x < 0 + haku.height / 2) {
        haku.x = 0 + haku.height / 2

        haku.color = "purple"
    }

   
    bullet.move()
    bullet.drawRect()
    haku.drawRect()
    
}


function random(low, high) {
    return Math.random() * (high - low) + low;
}

function reset(bullets) {
    bullets.y = haku.y
    bullets.x = haku.x

    shot = false
    bullets.vy = 0
}



