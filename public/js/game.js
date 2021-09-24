
var canvas = document.getElementById(`canvas`);
var context = canvas.getContext(`2d`);

var interval = 1000 / 60;
var timer = setInterval(animate, interval);

var startButton = new GameObject();
startButton.img.src = "images/button.png"
startButton.x = 725 //moves button over
startButton.y = 425 // moves button down
var menuBackground = new GameObject();
// make image here

menuBackground.img.src = "images/menu.png"
menuBackground.width = canvas.width 
menuBackground.height = canvas.height


gameStates[`menu`] = function () 
{
	if (startButton.overlap(mouse))
    {
	   if (mouse.pressed) 
		{
			gameStates.changeState(`game`)
		}
		startButton.color = `yellow`
	}
	else {
		startButton.color = `red`
	}
	
	menuBackground.drawStaticImage();
	startButton.render(`drawStaticImage`,0,0)
	//draw image here
}
/*------------Use this if you want to implement States---------------*/
gameStates.changeState(`menu`);

var gravity = 1;
var friction = { x: .85, y: .97 }

//Avatar
var wiz = new GameObject({ width: 128, height: 128, spriteData: playerData }).makeSprite(playerData)
wiz.force = .7
wiz.jumpHeight = -30

//Very back background
var sky = new GameObject({ width: canvas.width, height: canvas.height, color: "cyan" })
//sky.img.src = `images/sky.png`
//The ground
var ground = new GameObject({ width: canvas.width * 10, height: 64, y: canvas.height - 32, color: "rgba(0, 0, 0, 0)" })
ground.img.src = `images/sky.png`
//A platform

var plat = new GameObject({ width: 256, height: 64, y: canvas.height - 220, color: "rgba(0, 0, 0, 0)" })
plat.img.src = `images/platform.png`

//A level object when it is moved other objects move with it.
var level = new GameObject({ x: 0, y: 0 });
ground.world = level;
plat.world = level;

//Cave foreground Tile Grid
var cave = new Grid(caveData, { world: level, x: 1024, tileHeight: 128, tileWidth: 128 });
//Cave background Tile Grid
var caveBack = new Grid(caveBackData, { world: level, x: 1024, tileHeight: 128, tileWidth: 128 });
// cave hit
var caveHit = new Grid(caveHitData, { world: level, x: 1024, tileHeight: 128, tileWidth: 128 });
//left hit border
//var leftBorder = new GameObject({x:canvas.width/2-190, height:canvas.height,world:level});

//This is a group used for collisions
var g1 = new Group();

g1.color = `rgb(251,0,254)`;

//Adds items to a group
g1.add([ground, plat,]) //leftBorder

//removes items from a group
//g1.remove([plat, cave.grid])

//Used to draw the rectangles
var rects = new Group();
rects.add([ground, plat])

//used to render the sprites
var sprites = new Group();
sprites.add([caveBack.grid, wiz, cave.grid])

//cave hit
var caveWalls = new Group();
caveWalls.add([caveHit.grid, g1.items])

//
var levelItems = new Group();
levelItems.add([caveBack.grid, wiz, ground, plat, cave.grid]);

//background
var bg = new GameObject({ x: level.x, y: level.y, width: canvas.width * 4, height: canvas.height })
bg.img.src = `images/largerpbg.png`

//farbackground
var rbg = new GameObject({ x: level.x, y: level.y, width: 1024, height: 512 })
rbg.img.src = `images/repeatbg.png`

//bullets
var bullets = []
var canShoot = true;
var shotTimer = 0;
var shotDelay = 30;
var currentBullet = 0;

for (let i = 0; i < 100; i++) {
	bullets[i] = new GameObject()
	bullets[i].img.src = "images/pearseed.png"
	bullets[i].y = 1000
	bullets[i].width = 20
	bullets[i].height = 20

}
console.log(bullets)

gameStates[`game`] = function () {

	if (!keys[`W`] && !keys[`S`] && !keys[`D`] && !keys[`A`] && !keys[` `] && wiz.canJump) {
		wiz.changeState(`idle`)
		//sounds.play(`snore`)
	}

	if (keys[`W`] && wiz.canJump) {
		wiz.canJump = false;
		wiz.vy = wiz.jumpHeight;
		wiz.changeState(`jump`)
		sounds.play(`bounce`)
	}
	if (keys[`S`]) {
		
		wiz.changeState(`crouch`)
	}
	else {
		
	}
	if (keys[`D`] && wiz.currentState != `crouch`) {
		wiz.changeState(`walk`)
		wiz.vx += wiz.force
		wiz.dir = 1;
	}
	if (keys[`A`] && wiz.currentState != `crouch`) {
		wiz.changeState(`walk`)
		wiz.vx += -wiz.force
		wiz.dir = -1;
	}
	
	//bullets
	shotTimer--;
	if (shotTimer <= 0) {
		canShoot = true
	}
	else {
		canShoot = false
	}
	if (keys[` `]) {
		if (canShoot) {
			wiz.changeState('attack')
			shotTimer = shotDelay
			console.log(`Boom`)

			bullets[currentBullet].vx=20*wiz.dir;
			bullets[currentBullet].world = level;
			bullets[currentBullet].x = wiz.x - level.x + 56; //moves bullet posiition over
			bullets[currentBullet].y = wiz.y - 1; //moves bullet position up
			sounds.play(`shoot`)

			currentBullet++;

			if (currentBullet >= bullets.length) {
				currentBullet = 0
			}
		}
	}
	else {
		shotTimer = 0
	}

	wiz.vy += gravity
	wiz.vx *= friction.x
	wiz.vy *= friction.y
	wiz.x += Math.round(wiz.vx)
	wiz.y += Math.round(wiz.vy)


	let offset = { x: Math.round(wiz.vx), y: Math.round(wiz.vy) }

	while (g1.collide(wiz.bottom) && wiz.vy >= 0) {
		wiz.canJump = true;
		wiz.vy = 0;
		wiz.y--;
		offset.y--;
	}
	while (caveWalls.collide(wiz.top) && wiz.vy <= 0) {

		wiz.vy = 0;
		wiz.y++;
		offset.y++;
	}
	while (caveWalls.collide(wiz.right) && wiz.vx >= 0) {

		wiz.vx = 0;
		wiz.x--;
		offset.x--;
	}
	while (caveWalls.collide(wiz.left) && wiz.vx <= 0) {

		wiz.vx = 0;
		wiz.x++;
		offset.x++;
	}

	//Makes the level move
	wiz.x -= offset.x;
	level.x -= offset.x;
	rbg.x -= offset.x * .25;





	bg.x = level.x * .75;

	if (rbg.x < -rbg.width || rbg.x > rbg.width) {
		rbg.x = 0;
	}
	if (rbg.x < -rbg.width || rbg.x > rbg.width) {
		rbg.x = 0;
	}


	//sky.drawStaticImage()
	rbg.drawStaticImage([0, 0]);
	rbg.drawStaticImage([-rbg.width, 0]);
	rbg.drawStaticImage([rbg.width, 0]);
	bg.drawStaticImage([0, 0]);
	plat.drawStaticImage([-130, -50]);
	ground.drawStaticImage([-ground.width / 2, -65, ground.width, 96]);

	rects.render(`drawRect`)

	sprites.play().render(`drawSprite`);

	//bullets image
	for (let i = 0; i < bullets.length; i++) {
		bullets[i].move()
		bullets[i].drawStaticImage()
		bullets[i].angle += 10 //rotates bullet


	}
}

/*----------------------------------------------------------------------*/

//-------------------------AnimationLoop--------------------------------

function animate() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	/*-----------Use for State Machine ---------------------------------*/
	gameStates[gameStates.currentState]();
	/*-------------------------------------------------------------------*/
}



