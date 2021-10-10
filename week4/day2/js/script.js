var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var timer = requestAnimationFrame(main)
var x = 5

var forest = new Image()
forest.src = "images/forest.png"
forest.onload = function () {
    main()
}
var kodama = new Image()
kodama.src = "images/kodama.png"
kodama.onload = function () {
    main()
}
function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //draw images
    ctx.drawImage(forest, 0, 0, 800, 600)
    ctx.drawImage(kodama, x, 300, 300, 300)
    console.log("working")

    //update position
    x += .5
    if (x > canvas.width + 20) {
        x = -100
    }
    timer = requestAnimationFrame(main)
}


