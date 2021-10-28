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


//paddle position
haku.x = 512
haku.y = canvas.height / 2
haku.width = 50
haku.height = 50

shiki.x = 512
shiki.y = 300
shiki.width = 70
shiki.height = 70

var bullet = new GameObject()
bullet.x = 512
bullet.y = 400
bullet.width = 15
bullet.height = 15
bullet.vx = 0
bullet.vy = 20
bullet.color = "red"





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
        //moves up 
        haku.x += -6
    }
    if (d) {
        //moves down 
        haku.x += 6

    }
    if (space) {
        bullet.y += -20
    }

    //bullets shooting



    //paddle restriction

    hak(haku)
    //bull(bullet)
    haku.drawRect()
    bullet.drawRect()
    shiki.drawRect()
    //score.drawScore()



}

// haku boundry
function hak(hak) {
    if (hak.y + hak.height > canvas.height + hak.height / 2) {
        hak.y = canvas.height - hak.height / 2
    }
    if (hak.y < 0 + hak.height / 2) {
        hak.y = 0 + hak.height / 2
    }
    if (hak.x + hak.height > canvas.height + hak.height) {
        hak.x = canvas.height - hak.height
    }
    if (hak.x < 0 + hak.height) {
        hak.x = 0 + hak.height
    }
}



