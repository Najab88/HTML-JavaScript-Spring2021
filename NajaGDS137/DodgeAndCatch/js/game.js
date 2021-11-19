var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var interval = 1000 / 60;
var timer = setInterval(animate, interval);
//__________________________________________________________________________________________________________________________________________
//__________________________________________________________________________________________________________________________________________

var score = new GameObject()
score.x = 500
score.y = 500
var score1 = 0

var time

var player = new GameObject()
player.width = 50
player.height = 50
player.x = canvas.width / 2
player.y = canvas.height - player.height / 2 - 25
player.color = "#ffff00"

player.vx = 0

//____________________________________________This is the circle array______________________________________________


var amount = 5
var circle = new Array()
var colors = ["cyan", "magenta", "violet"]



for (var i = 0; i < amount; i++) {
    circle[i] = new GameObject({ width: 30, height: 30 });

    var randomColor = Math.round(Math.random());
    circle[i].color = colors[Math.floor(rand(0, 2.9))]

    circle[i].x = Math.random() * canvas.width;
    circle[i].y = Math.random() * -canvas.height;
    circle[i].vy = rand(1, 7)

}
//____________________________________________This is the circle array______________________________________________


var squareamount = 5
var square = new Array()
var squarecolors = ["black", "orange", "brown"]



for (var i = 0; i < squareamount; i++) {
    square[i] = new GameObject({ width: 30, height: 30 });

    var randomColor = Math.round(Math.random());
    square[i].color = squarecolors[Math.floor(rand(0, 2.9))]

    square[i].x = Math.random() * -canvas.width;
    square[i].y = Math.random() * canvas.height;
    square[i].vy = rand(1, 5)


}
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.x += player.vx



    //______________________________circle array__________________________________________________________
    for (var c = 0; c < circle.length; c++) {

        circle[c].y += circle[c].vy


        // resets circle
       if (circle[c].y > canvas.height) {
            circle[c].y = 0 + Math.random() / canvas.width + 10
            circle[c].x = Math.random() * canvas.height + 10
        } 
        // circle collides
        if (circle[c].hitTestObject(player)) {
            player.color = "red"
            score1 = 0

            for (var i = 0; i < amount; i++) {

                circle[i].x = Math.random() * canvas.width;
                circle[i].y = Math.random() * -canvas.height;
                circle[i].vy = rand(1, 7)

            }

            for (var i = 0; i < squareamount; i++) {

                square[i].x = Math.random() * -canvas.width;
                square[i].y = Math.random() * canvas.height;
                square[i].vy = rand(1, 5)


            }

            clearTimeout(time)
            time = setTimeout(reset, 500)


        }


        circle[c].drawCircle()
    }

    //______________________________square array__________________________________________________________
    for (var s = 0; s < square.length; s++) {

        square[s].y += square[s].vy

        //resets square
        if (square[s].y > canvas.height) {
            square[s].y = 0 + Math.random() / canvas.width + 10
            square[s].x = Math.random() * canvas.height + 10
        }
        // square collides
        if (square[s].hitTestObject(player)) {
            score1 += 1
            player.color = "green"

            square[s].x = Math.random() * -canvas.width;
            square[s].y = Math.random() * canvas.height;
            square[s].vy = rand(1, 5)

            clearTimeout(time)
            time = setTimeout(reset, 500)



            // how to use timer to change colors
            //how to set reset
        }


        square[s].drawRect()
    }




    playerbound(player)
    //____________________________________________PLAYER CONTROLLS________________________________________
    if (a) {
        //moves left
        player.x += -6

    }
    if (d) {
        //moves right
        player.x += 6
        s
    }



    //_____________________________________DRAW ON SCREEN____________________________________________________________


    player.drawRect()
    score.drawScore()
}



// random function

// player boundry
function playerbound(play) {


    if (play.x + play.width > canvas.width + play.width / 2) {
        play.x = canvas.width - play.width / 2
        player.color = "black" // right side
    }
    if (play.x < 0 + play.width / 2) {
        play.x = 0 + play.width / 2
        player.color = "blue" // left side
    }


}

function reset() {

    player.color = "#ffff00"
}

function rand(low, high) {
    return Math.random() * (high - low) + low;
}