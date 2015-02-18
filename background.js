var theAction = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    image: new Image(),
    // Create an object for the map grid
    mapGrid: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        currentArray: 0,
        rowSize: mapArrays[0][0].length, // Number of elements in each row ( number of columns )
        columnSize: mapArrays[0].length, // Number of elements in each column ( number of rows )
        tileHeight: 0,
        tileWidth: 0,
        endScreenImage: new Image()
    },

    theActionReady: false,
    theActionImage: new Image(),
    blackBgTileReady: false,
    blackBgTileImage: new Image(),
    greenBgTileReady: false,
    greenBgTileImage: new Image()
}

theAction.initImage = function () {
    // Virtual world background image
    theAction.theActionImage.onload = function () {
        theAction.theActionReady = true;
    };
    theAction.theActionImage.src = "Content/black.jpg";

    // Black pixel
    theAction.blackBgTileImage.onload = function () {
        theAction.blackBgTileReady = true;
    };
    theAction.blackBgTileImage.src = "Content/blackBlock.png";

    // Green pixel
    theAction.greenBgTileImage.onload = function () {
        theAction.greenBgTileReady = true;
    };
    theAction.greenBgTileImage.src = "Content/greenBlock.png";

    //Set image
    theAction.image = theAction.theActionImage;
};

var commandBackground = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    image: new Image(),

    commandBackgroundReady: false,
    commandBackgroundImage: new Image(),
    cursorReady: false,
    cursorImage: new Image(),

    chars: {}
};

commandBackground.initImage = function () {
    // Background image
    commandBackground.commandBackgroundImage.onload = function () {
        commandBackground.commandBackgroundReady = true;
    };
    commandBackground.commandBackgroundImage.src = "Content/black.jpg";

    // Cursor (for command line) image
    commandBackground.cursorImage.onload = function () {
        commandBackground.cursorReady = true;
    };
    commandBackground.cursorImage.src = "Content/cursor.png";

    //Get images for text characters
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

    for (i = 0; i < 43; i++) {
        commandBackground.chars[alphanumeric[i]] = new Image();
    }

    for (var char in commandBackground.chars) {
        commandBackground.chars[char].src = "Content/Alphanumeric/" + char + ".png";
    }

    //Set image
    commandBackground.image = commandBackground.commandBackgroundImage;
};

var initActionAndCommand = function () {
    // Set the width for the objects
    commandBackground.width = canvas.width;
    theAction.width = canvas.width;

    // Set the height for the objects
    commandBackground.height = 120; //The only value that should be messed with. This determines the height of the commandBackground line in pixels.
    theAction.height = canvas.height - commandBackground.height;

    //Set position of theAction
    theAction.x = 0;
    theAction.y = 0;

    //Set position of commandBackground
    commandBackground.x = 0;
    commandBackground.y = theAction.height;
};
