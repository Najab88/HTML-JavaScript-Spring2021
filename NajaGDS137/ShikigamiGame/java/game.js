canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
var canvas
var ctx

//timer/moves player
//var timer
var interval = 1000 / 60
timer = setInterval(animate, interval)

//images
//var img = document.getElementById("gum")
///var img2 = document.getElementById("gum2")

//score = 0


// this is the player
var haku = new GameObject()
haku.color = "rgb(230, 24, 144)"

var shiki = new GameObject()
shiki.color = "blue"

var dirX = 0
var dirY = 0

var arena = new GameObject()
arena.width = canvas.width
arena.height = canvas.height

//paddle position
haku.x = 512
haku.y = canvas.height / 2
haku.width = 50
haku.height = 50

shiki.x = 512
shiki.y = 300
shiki.width = 70
shiki.height = 70


//bullets
var bullets = new GameObject()
bullets.x = -900
bullets.y = haku.y
bullets.width = 25
bullets.height = 25
bullets.color = "red"

var shot = false
var shooting = false



// player score
//var score = new GameObject()
//var score1 = 0
//var score2 = 0



//Animation Timer
timer = setInterval(animate, interval)

function animate() {
    //clear the screen
    ctx.clearRect(0, 0, canvas.width, canvas.height)



    //keypresses
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
    if (ArrowRight && !shot ) {
        //shoot down 
        
        shot = true
        reset(bullets)
        bullets.vy = dirY = 0
        bullets.vx = dirX = 10

    }
   

    bullets.move()


    /* //puts bullet back
     if (bullets.y < 0 - bullets.height / 2) {
 
         reset(bullets)
         bullets.x = -500
     	
     }
        //bottom
     if (bullets.y > canvas.height + bullets.height / 2) {
 
         reset(bullets)
         bullets.y = -500
         
     }*/

    if (!arena.hitObject(bullets)) {
        reset(bullets)
        bullets.x = -500

    
        hak(haku)
    }
   
    bullets.drawRect()
    haku.drawRect()
    shiki.drawRect()
    //score.drawScore()





    // haku boundry
    function hak(hak) {
        if (hak.y > canvas.height - hak.height / 2) {
            hak.y = canvas.height - hak.height / 2
        }
        if (hak.y < 0 + hak.height / 2) {
            hak.y = 0 + hak.height / 2
        }
        if (hak.x > canvas.width - hak.width/2) {
            hak.x = canvas.width - hak.width/2
        }
        if (hak.x < 0 + hak.width /2) {
            hak.x = 0 + hak.width /2
        }
    }

    function reset(bullets) {
        bullets.y = haku.y
        bullets.x = haku.x

        shot = false
        bullets.vy = 0
    }
}