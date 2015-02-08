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

/* var alphanumeric = [];
for (i = 48; i < 91; i++) {
    if (i < 58 || i > 64) {
        alphanumeric.push(String.fromCharCode(i));
    }
    console.log(alphanumeric[i]); //debug
} */

/* //Character images
var charReady = [];
for (i = 0; i < 37; i++) {
    charReady.push(false);
}
var charImages = [];
for (i = 0; i < 37; i++) {
    charImages.push(new Image());
    charImages[i].onload = function () {
        charReady = true;
    };
    charImages[i].src = "Content/Alphanumeric/" + alphanumeric[i] + ".png";
} */

// Set start position for grass and sand
var posX = 0;
var posY = 0;

// Game objects
var hero = {
	speed: 256, // movement in pixels per second
	x: 0,
	y: 0,
	armPosition: 1,
	legPosition: 1,
	headPosX: 0,
	headPosY: 0,
	headSize: 0,
	head2TorsoPosX: 0,
	head2TorsoY: 0,
	torso2UpperArmPosX1: 0,
	torso2UpperArmPosY1: 0,
	torso2UpperArmPosX2: 0,
	torso2UpperArmPosY2: 0,
	upper2LowerArmPosX1: 0,
	upper2LowerArmPosY1: 0,
	upper2LowerArmPosX2: 0,
	upper2LowerArmPosY2: 0,
	lowerArm2AirPosX1: 0,
	lowerArm2AirPosY1: 0,
	lowerArm2AirPosX2: 0,
	lowerArm2AirPosY2: 0,
	torso2UpperLegPosX1: 0,
	torso2UpperLegPosY1: 0,
	torso2UpperLegPosX2: 0,
	torso2UpperLegPosY2: 0,
	upper2LowerLegPosX1: 0,
	upper2LowerLegPosY1: 0,
	upper2LowerLegPosX2: 0,
	upper2LowerLegPosY2: 0,
	lowerLeg2GroundPosX1: 0,
	lowerLeg2GroundPosY1: 0,
	lowerLeg2GroundPosX2: 0,
	lowerLeg2GroundPosY2: 0
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

var createGround = function(){
	// Change the bottom x lines of the mapGrid to ground values
	for(i = mapArray.length - 1; i > ( mapArray.length - ( ROWS_OF_GROUND + 1 ) ); i--) {
		for(var j = 0; j < mapGrid.rowSize; j++){
			// Change the value to indicate it as a ground value
			mapArray[i][j] = 1;
		}
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
    commandLine.charWidth = 5;
    commandLine.string = [];
    commandLine.maxChars = 10;
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

var initCharacterPosition = function() {
	//// HEAD ////
	
	// Determine the head size
	hero.headSize = 15;

	// Determine the position of the circle for the character's head at the start of the level
	hero.headPosY = theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND) - 90;
	hero.headPosX = theAction.x + hero.headSize + 5 // Set this so that the hero starts 5 units from the left edge of the screen
	
	//// TORSO ////
	
	// Determine the position of where the hero's head attaches to the torso
	hero.head2TorsoPosX = hero.headPosX + Math.sqrt( hero.headSize );
	hero.head2TorsoY = hero.headPosY + hero.headSize;
	
	// Determine the position of where the torso attaches to the upper arm
	hero.torso2UpperArmPosX = hero.head2TorsoPosX;
	hero.torso2UpperArmPosY = hero.head2TorsoY + 12;
	
	// Determine the position of where the torso attaches to the upper leg
	hero.torso2UpperLegPosX = hero.head2TorsoPosX;
	hero.torso2UpperLegPosY = hero.head2TorsoY + 40;
	
	//// ARM #1 ////
	
	// Determine the joint between the upper and lower arm of the hero's lower arm #1
	hero.upper2LowerArmPosX1 = hero.torso2UpperArmPosX + 20;
	hero.upper2LowerArmPosY1 = hero.torso2UpperArmPosY + 25;
	
	//// ARM #2 ////
	
	// Determine the joint between the upper and lower arm of the hero's lower arm #2
	hero.upper2LowerArmPosX2 = hero.torso2UpperArmPosX - 20;
	hero.upper2LowerArmPosY2 = hero.torso2UpperArmPosY + 25;
	
	//// LEG #1 ////
	
	// Determine the position of the hero's upper leg #1
	hero.upper2LowerLegPosX1 = hero.torso2UpperLegPosX + 13;
	hero.upper2LowerLegPosY1 = theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND);
	//hero.upper2LowerLegPosY1 = ( theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND) ) - hero.torso2UpperLegPosY;
	
	//// LEG #2 ////
	
	// Determine the position of the hero's upper leg #2
	hero.upper2LowerLegPosX2 = hero.torso2UpperLegPosX - 13;
	hero.upper2LowerLegPosY2 = theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND);
	//hero.upper2LowerLegPosY2 = ( theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND) ) - hero.torso2UpperLegPosY;
};

addEventListener("keyup", function (e) {
    commandLine.mayType = true;
}, false);

addEventListener("keydown", function (e) {
    if (commandLine.mayType == true) {
        commandLine.keyPressed = e.keyCode;
    }
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

var sendResponse = function () {

};

// Update the body parts based on the x-position of the head
var updateBodyPartsPosition = function(headPosX) {
	// Determine the position of the hero's torso
	hero.head2TorsoPosX = headPosX + Math.sqrt( hero.headSize );
	hero.head2TorsoY = hero.headPosY + hero.headSize;
	
	// Determine the position of the joint that connects the legs to the torso
	hero.torso2UpperLegPosX = hero.head2TorsoPosX;
	hero.torso2UpperLegPosY = hero.head2TorsoY + 40;
	
	// Determine the position of where the torso attaches to the upper arm
	hero.torso2UpperArmPosX = hero.head2TorsoPosX;
	hero.torso2UpperArmPosY = hero.head2TorsoY + 12;
	
	// Determine the current position of the character's arms
	if(hero.armPosition == 0) {
		// Determine the position variance from the torso of arm #1
		armPositionVariance1 = -20
		// Determine the position variance from the torso of arm #2
		armPositionVariance2 = 20
		
		// Update the arm position value
		hero.armPosition = hero.armPosition + 1;
	} else if (hero.armPosition == 1) {
		// Determine the position variance from the torso of arm #1
		armPositionVariance1 = 0
		// Determine the position variance from the torso of arm #2
		armPositionVariance2 = 0

		// Update the arm position value
		hero.armPosition = hero.armPosition - 1;
	} else {
		// Output error message
		console.log( "error" );
	}
	
	// Determine the joint between the upper and lower arm of the hero's lower arm #1
	hero.upper2LowerArmPosX1 = hero.torso2UpperArmPosX + armPositionVariance1;
	hero.upper2LowerArmPosY1 = hero.torso2UpperArmPosY + 25;
	
	// Determine the joint between the upper and lower arm of the hero's lower arm #2
	hero.upper2LowerArmPosX2 = hero.torso2UpperArmPosX + armPositionVariance2;
	hero.upper2LowerArmPosY2 = hero.torso2UpperArmPosY + 25;
	
	if(hero.legPosition == 0) {
		// Determine the position variance from the torso of arm #1
		legPositionVariance1 = -13
		// Determine the position variance from the torso of arm #2
		legPositionVariance2 = 13
		
		// Update the arm position value
		hero.legPosition = hero.legPosition + 1;
	} else if (hero.legPosition == 1) {
		// Determine the position variance from the torso of arm #1
		legPositionVariance1 = 0
		// Determine the position variance from the torso of arm #2
		legPositionVariance2 = 0
		
		// Update the arm position value
		hero.legPosition = hero.legPosition - 1;
	} else {
		// Output error message
		console.log( "error" );
	}
	
	// Determine the position of the hero's upper leg #1
	hero.upper2LowerLegPosX1 = hero.torso2UpperLegPosX + legPositionVariance1;
	hero.upper2LowerLegPosY1 = theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND);

	// Determine the position of the hero's upper leg #2
	hero.upper2LowerLegPosX2 = hero.torso2UpperLegPosX + legPositionVariance2;
	hero.upper2LowerLegPosY2 = theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND);
};

// Update game objects
var update = function (modifier) {
	
	// Update the hero's head x position
	hero.headPosX += hero.speed * modifier;
	
	// Update all the other body parts based on the new head position
	updateBodyPartsPosition(hero.headPosX)
	
	
	
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
        if (commandLine.keyPressed == 8) {
            if (cursor.position > 0) {
                commandLine.string.pop();
                cursor.position -= 1;
            }
            commandLine.mayType = false;
        } else if (commandLine.keyPressed >= 48 && commandLine.keyPressed < 91) {
            if (cursor.position <= commandLine.maxChars) {
                commandLine.string.push(String.fromCharCode(commandLine.keyPressed));
                cursor.position += 1;
            }
            commandLine.mayType = false;
        } else if (commandLine.keyPressed == 13) {
            commandLine.string = [];
            cursor.position = 0;
            sendResponse();
        } else {
            console.log("WRONG KID DIED"); //debug
        }
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
	ctx.arc(hero.headPosX, hero.headPosY, hero.headSize, 0, 2*Math.PI);
	ctx.lineWidth = 3;
	ctx.strokeStyle = 'chartreuse';
	ctx.stroke();
	
	// Create a line for the character's torso
	ctx.moveTo(hero.head2TorsoPosX, hero.head2TorsoY);
	ctx.lineTo(hero.torso2UpperLegPosX, hero.torso2UpperLegPosY);
	ctx.stroke();
	
	//// ARM #1 ////
	
	// Create a line for the character's first upper arm
	ctx.moveTo(hero.torso2UpperArmPosX, hero.torso2UpperArmPosY);
	ctx.lineTo(hero.upper2LowerArmPosX1, hero.upper2LowerArmPosY1);
	ctx.stroke();
	
  	//// ARM #2 ////
	
	// Create a line for the character's second arm
	ctx.moveTo(hero.torso2UpperArmPosX, hero.torso2UpperArmPosY);
	ctx.lineTo(hero.upper2LowerArmPosX2, hero.upper2LowerArmPosY2);
	ctx.stroke();
	
	//// LEG #1 ////
	
	// Create a line for the character's second arm
	ctx.moveTo(hero.torso2UpperLegPosX, hero.torso2UpperLegPosY);
	ctx.lineTo(hero.upper2LowerLegPosX1, hero.upper2LowerLegPosY1);
	ctx.stroke();
	
	//// LEG #2 ////
	
	// Create a line for the character's second arm
	ctx.moveTo(hero.torso2UpperLegPosX, hero.torso2UpperLegPosY);
	ctx.lineTo(hero.upper2LowerLegPosX2, hero.upper2LowerLegPosY2);
	ctx.stroke();
	

	/* // Draw command screen
	if (commandBackgroundReady) {
	    ctx.drawImage(commandBackgroundImage, commandBackground.x, commandBackground.y, commandBackground.width, commandBackground.height);
	};
	if (commandLine.string.length > 0) {
	    for (i = 0; i < commandLine.string.length; i++) {
	        ctx.drawImage(charImages[i], commandLine.x + (cursor.width * commandLine.position), cursor.y, cursor.width, cursor.height);
	    }
	}
	if (cursorReady && cursor.blinking) {
	    ctx.drawImage(cursorImage, cursor.x, cursor.y, cursor.width, cursor.height);
	}; */
	
	// Reset position values
	posX = 0;
	posY = 0;
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 10000);
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
initCharacterPosition();
var then = Date.now();
reset();
main();