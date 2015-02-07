// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 400;
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

// Virtual world background image
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



/* // Google image
var googleReady = false;
var googleImage = new Image();
googleImage.onload = function () {
    googleReady = true;
};
googleImage.src = "google-panda-penguin.jpg"; */

// Create the array for the virtual world part of the screen
var mapArray = [
	[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
	[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0]
];

// Grass image
var blackBgTileReady = false;
var blackBgTile = new Image();
blackBgTile.onload = function () {
    blackBgTileReady = true;
};
blackBgTile.src = "Content/whiteBlock.png";

// Sand image
var greenBgTileReady = false;
var greenBgTile = new Image();
greenBgTile.onload = function () {
    greenBgTileReady = true;
};
greenBgTile.src = "Content/greenBlock.png";

// Set start position for grass and sand
var posX = 0;
var posY = 0;

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

// Create an object for the map grid
var mapGrid = {
	x: 0,
    y: 0,
    width: 0,
    height: 0,
	rowSize: mapArray[0].length, // Number of elements in each row ( number of columns )
	columnSize: mapArray.Length, // Number of elements in each column ( number of rows )
    tileHeight: 0,
	tileWidth: 0
};

var commandLine = {
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
	// Set the width for the objects
    commandBackground.width = canvas.width;
    theAction.width = canvas.width;
	
    // Set the height for the objects
	commandBackground.height = 50; //The only value that should be messed with. This determines the height of the commandBackground line in pixels.
    theAction.height = canvas.height - commandBackground.height;
	
	// Set the start position for the objects
    theAction.x = 0;
    theAction.y = 0;
	
	commandBackground.x = 0;
	commandBackground.y = theAction.height;
	
	// Set the image for the objects
    theAction.image = theActionImage;
    commandBackground.image = commandBackgroundImage;
};

/* Set the values for the map grid */
var initMapGrid = function () {
	// Set the width for the objects
	mapGrid.Width = canvas.width;

	// Set the start position for the objects
	mapGrid.x = 0;
	mapGrid.y = 0;

    // Set the height for the objects
	mapGrid.height = canvas.height - commandBackground.height;
	
	// Set the tile size
	mapGrid.tileHeight = mapGrid.height / mapGrid.columnSize;
	mapGrid.tileWidth = mapGrid.width / mapGrid.rowSize;
}

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
	// Draw action screen
	if (theActionReady) {
	    ctx.drawImage(theActionImage, theAction.x, theAction.y, theAction.width, theAction.height);
	}

	// Make sure that the grass and sand have been read in
	if( blackBgTileReady && greenBgTileReady ) {
		// Draw the array
		for( var i = 0; i < mapArray.length; i++ ) {
			for(var j = 0; j < mapArray[i].length; j++ ) {
				// Draw grass image for elements in array that equal zero
				if( mapArray[i][j] == 0 ) {
					ctx.drawImage( blackBgTile, posX, posY, mapGrid.tileWidth, mapGrid.tileHeight );
				}
				// Draw sand image for elements in array that equal one
				if( mapArray[i][j] == 1 ) {
					ctx.drawImage( greenBgTile, posX, posY, mapGrid.tileWidth, mapGrid.tileHeight );
				}

				//Change the x-axis start position for the next tile
				posX += mapGrid.tileWidth;
			}
			// Reset the x-axis position back to 0 so that the rows transition properly
			posX = 0;
			
			// Change the y-axis start position for the next tile row
			posY += mapGrid.tileHeight;
		}
	}

/* 	// Draw rectangle
	ctx.beginPath();
	ctx.rect(0, 0, 100, 100);
	ctx.fillStyle = 'yellow';
	ctx.fill();
	ctx.lineWidth = 7;
	ctx.strokeStyle = 'red';
	ctx.stroke(); */

/* 	// Draw google image
	if (googleReady) {
	    ctx.drawImage(googleImage, 0, 0, 500, 500);
	} */

	// Draw command screen
	if (commandBackgroundReady) {
	    ctx.drawImage(commandBackgroundImage, commandBackground.x, commandBackground.y, commandBackground.width, commandBackground.height);
	}
	if (cursorReady && cursor.blinking) {
	    ctx.drawImage(cursorImage, cursor.x, cursor.y, cursor.width, cursor.height);
	}
	
	// Reset position values
	posX = 0;
	posY = 0;
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