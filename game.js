// Constants
ROWS_OF_GROUND = 2; // The number of rows from the bottom of the array that are going to serve as the ground

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

// Create the array for the virtual world part of the screen
var mapArray = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

// Grass image
var blackBgTileReady = false;
var blackBgTile = new Image();
blackBgTile.onload = function () {
    blackBgTileReady = true;
};
blackBgTile.src = "Content/blackBlock.png";

// Sand image
var greenBgTileReady = false;
var greenBgTile = new Image();
greenBgTile.onload = function () {
    greenBgTileReady = true;
};
greenBgTile.src = "Content/greenBlock.png";

var alphanumeric = [];
for (i = 48; i < 91; i++) {
    if (i < 58 || i > 64) {
        alphanumeric.push(String.fromCharCode(i));
    }
}
alphanumeric.push("period");
alphanumeric.push("QuestionMark");
alphanumeric.push("Apostrophe");
alphanumeric.push("ExclamationPoint");
alphanumeric.push("LeftParenth");
alphanumeric.push("RightParenth");
alphanumeric.push("Slash");

var chars = {}; // create an empty array

for (i = 0; i < 43; i++) {
    chars[alphanumeric[i]] = new Image();
}

for (var char in chars) {
    chars[char].src = "Content/Alphanumeric/" + char + ".png";
}
  

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
	columnSize: mapArray.length, // Number of elements in each column ( number of rows )
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


var zed = {
    currentQuestionResponse: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        maxChars: 0,
        question: null,
        responses: []
    },
    previousQuestionResponses: [],
    futureQuestionResponses: []
};

var createGround = function(){

	// Change the bottom x lines of the mapGrid to ground values
	for(i = mapArray.length - 1; i > ( mapArray.length - ( ROWS_OF_GROUND + 1 ) ); i--) {
	
		for(var j = 0; j < mapGrid.rowSize; j++){
		
			mapArray[i][j] = 1;

		}
		//mapArray[i] = 1;
	}
};

var initActionAndCommand = function () {
	// Set the width for the objects
    commandBackground.width = canvas.width;
    theAction.width = canvas.width;

    // Set the height for the objects
	commandBackground.height = 50; //The only value that should be messed with. This determines the height of the commandBackground line in pixels.
    theAction.height = canvas.height - commandBackground.height;

    //Set position of theAction
    theAction.x = 0;
    theAction.y = 0;
	
    //Set position of commandBackground
    commandBackground.x = 0;
    commandBackground.y = theAction.height;

    // Set the image for the objects
    theAction.image = theActionImage;
    commandBackground.image = commandBackgroundImage;
};

/* Set the values for the map grid */
var initMapGrid = function () {
	// Set the width for the objects
	mapGrid.width = canvas.width;

    // Set the start position for the objects
    mapGrid.x = 0;
    mapGrid.y = 0;

    // Set the height for the objects
    mapGrid.height = canvas.height - commandBackground.height;
	
    // Set the tile size
    mapGrid.tileHeight = mapGrid.height / mapGrid.columnSize;
    mapGrid.tileWidth = mapGrid.width / mapGrid.rowSize;
};

var initCommandLine = function () {
    commandLine.x = commandBackground.x + 10;
    commandLine.y = canvas.height - 20;
    commandLine.width = canvas.width - 20;
    commandLine.height = 10;
    commandLine.charWidth = 7;
    commandLine.string = [];
    commandLine.maxChars = 30;
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

var getCharacterPosition = function() {
	// Determine
};

addEventListener("keyup", function (e) {
    commandLine.keyPressed = null;
    commandLine.mayType = true;
}, false);

addEventListener("keydown", function (e) {
    if (commandLine.mayType == true) {
        console.log("keychange");
        commandLine.keyPressed = e.keyCode;
        commandLine.mayType = true;
    }
}, false);

var updateCommandLine = function () {
    //Update cursor position
    cursor.x = commandLine.x + (commandLine.charWidth * cursor.position);

    //Update cursor blinking on/off
    if (Date.now() > (cursor.lastBlink + cursor.blinkRate)) {
        cursor.blinking = !cursor.blinking;
        cursor.lastBlink = Date.now();
    }
};

var sendResponse = function () {

};

// Update game objects
var update = function (modifier) {

    var pressed = false;

    if (commandLine.mayType) {
        if (commandLine.keyPressed == 8) {
            if (cursor.position > 0) {
                commandLine.string.pop();
                cursor.position -= 1;
            }
            pressed = true;
        } else if (commandLine.keyPressed >= 48 && commandLine.keyPressed < 91) {
            if (cursor.position <= commandLine.maxChars) {
                commandLine.string.push(String.fromCharCode(commandLine.keyPressed));
                cursor.position += 1;
            }
            pressed = true;
        } else if (commandLine.keyPressed == 13) {
            commandLine.string = [];
            cursor.position = 0;
            sendResponse();
            pressed = true;
        } else {
            console.log("WRONG KID DIED"); //debug
        }
    }

    if (pressed) {
        commandLine.mayType = false;
    }

    updateCommandLine();
};

// Draw everything
var render = function () {
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
	
	// Create a circle for the character's head
	ctx.beginPath();
	ctx.arc(100,200,15,0,2*Math.PI);
	ctx.lineWidth = 5;
	ctx.strokeStyle = 'yellow';
	ctx.stroke();

	// Draw command screen
	if (commandBackgroundReady) {
	    ctx.drawImage(commandBackgroundImage, commandBackground.x, commandBackground.y, commandBackground.width, commandBackground.height);
	};
	if (commandLine.string.length > 0) {
	    for (i = 0; i < commandLine.string.length; i++) {
	        ctx.drawImage(chars[commandLine.string[i]], commandLine.x + (cursor.width * i), cursor.y, cursor.width, cursor.height);
	    }
	}
	if (cursorReady && cursor.blinking) {
	    ctx.drawImage(cursorImage, cursor.x, cursor.y, cursor.width, cursor.height);
	};
	
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

createGround();
initActionAndCommand();
initMapGrid();
initCommandLine();
initCursor();
//createCharacter();
var then = Date.now();
main();