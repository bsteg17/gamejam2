// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "Content/grass.png";

// Background image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "Content/hero.jpeg";

// Background image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "Content/monser.jpg";

// Background image
var theActionReady = false;
var theActionImage = new Image();
theActionImage.onload = function () {
    theActionReady = true;
};
theActionImage.src = "Content/black.jpg";

// Background image
var commandBackgroundReady = false;
var commandBackgroundImage = new Image();
commandBackgroundImage.onload = function () {
    commandBackgroundReady = true;
};
commandBackgroundImage.src = "Content/black.jpg";

// Background image
var cursorReady = false;
var cursorImage = new Image();
cursorImage.onload = function () {
    cursorReady = true;
};
cursorImage.src = "Content/cursor.png";



// Game objects
var hero = {
	speed: 256, // movement in pixels per second
	x: 0,
	y: 0
};
var monster = {
	x: 0,
	y: 0
};
var monstersCaught = 0;

var theAction = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    image: new Image()
};

var commandBackground = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    image: new Image()
};

var commandLine = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    charWidth: 5,
    string: [],
    keyPressed: null,
    mayType: false
};

var cursor = {
    x:0,
    y: 0,
    position: 0,
    width:0,
    height: 0,
    blinkRate: 0,
    lastBlink: 0,
    blinking: false
};

var initActionAndCommand = function () {

    commandBackground.width = canvas.width;
    theAction.width = canvas.width;

    theAction.x = 0;
    theAction.y = 0;
    
    commandBackground.height = 50; //The only value that should be messed with. This determines the height of the commandBackground line in pixels.
    theAction.height = canvas.height - commandBackground.height;
    commandBackground.x = 0;
    commandBackground.y = theAction.height;

    theAction.image = theActionImage;
    commandBackground.image = commandBackgroundImage;
};

var initCommandLine = function () {
    commandLine.x = commandBackground.x + 10;
    commandLine.y = canvas.height - 20;
    commandLine.width = canvas.width - 20;
    commandLine.height = 10;
    commandLine.charWidth = 5;
    commandLine.string = [];
    commandLine.keyPressed = null;
    commandLine.mayType = true;
};

var initCursor = function () {
    cursor.position = 0;
    cursor.x = commandLine.x + (commandLine.charWidth * cursor.position);
    cursor.y = commandLine.y;
    cursor.width = commandLine.charWidth;
    cursor.height = commandLine.height;
    cursor.lastBlink = Date.now();
    cursor.blinkRate = 300;
    cursor.blinking = true;
};

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
    commandLine.keyPressed = e.keyCode;
    console.log(e.keyCode); //debug
}, false);

addEventListener("keyup", function (e) {
    commandLine.keyPressed = null;
    commandLine.mayType = true;
}, false);

// Reset the game when the player catches a monster
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

var updateCommandLine = function () {
    //Update cursor position
    cursor.x = commandLine.x + (commandLine.charWidth * cursor.position);

    //Update cursor blinking on/off
    if (Date.now() > (cursor.lastBlink + cursor.blinkRate)) {
        cursor.blinking = !cursor.blinking;
        cursor.lastBlink = Date.now();
    }
};

// Update game objects
var update = function (modifier) {
	//if (38 in keysDown) { // Player holding up
	//	hero.y -= hero.speed * modifier;
	//}
	//if (40 in keysDown) { // Player holding down
	//	hero.y += hero.speed * modifier;
	//}
	//if (37 in keysDown) { // Player holding left
	//	hero.x -= hero.speed * modifier;
	//}
	//if (39 in keysDown) { // Player holding right
	//	hero.x += hero.speed * modifier;
	//}

	//// Are they touching?
	//if (
	//	hero.x <= (monster.x + 32)
	//	&& monster.x <= (hero.x + 32)
	//	&& hero.y <= (monster.y + 32)
	//	&& monster.y <= (hero.y + 32)
	//) {
	//	++monstersCaught;
	//	reset();
    //}

    if (commandLine.mayType) {
        switch (commandLine.keyPressed) {
            case 69:
                commandLine.string.push(' ');
                cursor.position += 1;
                break;
            default:
                console.log("WRONG KID DIED"); //debug
        }
        commandLine.mayType = false;
    }

    updateCommandLine();
};

// Draw everything
var render = function () {
	if (theActionReady) {
	    ctx.drawImage(theActionImage, theAction.x, theAction.y, theAction.width, theAction.height);
	}
	if (commandBackgroundReady) {
	    ctx.drawImage(commandBackgroundImage, commandBackground.x, commandBackground.y, commandBackground.width, commandBackground.height);
	}
	if (cursorReady && cursor.blinking) {
	    ctx.drawImage(cursorImage, cursor.x, cursor.y, cursor.width, cursor.height);
	}
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame

// Let's play this game!

initActionAndCommand();
initCommandLine();
initCursor();
var then = Date.now();
reset();
main();