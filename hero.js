var ROWS_OF_GROUND = 2; // The number of rows from the bottom of the array that are going to serve as the ground

var hero = {
    xSpeed: 100, // movement in pixels per second in the x direction
    ySpeed: 100, // movement in pixels per second in the y direction
    x: 0,
    y: 0,
    armPosition: 1,
    legPosition: 1,
    //Everything relative to:
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
    torso2UpperLegPosX1: 0,
    torso2UpperLegPosY1: 0,
    torso2UpperLegPosX2: 0,
    torso2UpperLegPosY2: 0,
    upper2LowerLegPosX1: 0,
    upper2LowerLegPosY1: 0,
    upper2LowerLegPosX2: 0,
    upper2LowerLegPosY2: 0,
    startingAnimationTime: 0,
    animationxSpeed: 0,
    armPositionVariance1: 0,
    armPositionVariance2: 0,
    legPositionVariance1: 0,
    legPositionVariance2: 0,
    jumpingUpdate: false,

    initImage: function () {
        var heroReady = false;
        var heroImage = new Image();
        heroImage.onload = function () {
            heroReady = true;
        };
        heroImage.src = "Content/hero.jpeg";
    },

    initCharacterPosition: function () {
            //// HEAD ////

            // Determine the head size
        hero.headSize = 15;

            // Determine the position of the circle for the character's head at the start of the level
            //Everything relative to:
        hero.headPosY = theAction.height - (theAction.mapGrid.tileHeight * ROWS_OF_GROUND) - 90;
        hero.headPosX = theAction.x + hero.headSize + 5; // Set this so that the hero starts 5 units from the left edge of the screen

            //// TORSO ////

            // Determine the position of where the hero's head attaches to the torso
        hero.head2TorsoPosX = hero.headPosX + Math.sqrt(hero.headSize);
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
        hero.upper2LowerLegPosY1 = theAction.height - (theAction.mapGrid.tileHeight * ROWS_OF_GROUND);

            //// LEG #2 ////

            // Determine the position of the hero's upper leg #2
        hero.upper2LowerLegPosX2 = hero.torso2UpperLegPosX - 13;
        hero.upper2LowerLegPosY2 = theAction.height - (theAction.mapGrid.tileHeight * ROWS_OF_GROUND);


        hero.startingAnimationTime = Date.now();
        hero.animationxSpeed = 300;

            // Initialize
        hero.armPositionVariance1 = -20;
        hero.armPositionVariance2 = 20;
        hero.legPositionVariance1 = -13;
        hero.legPositionVariance2 = 13;
    },

    // Update the body parts based on the x-position of the head
    updateBodyPartsPosition: function(headPosX) {
        // Initialize variables
        var now = Date.now();
        var moved = false;

        //var currentPosYVariance = 1;

        //// Maximum height
        //MAX_JUMP_HEIGHT = theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND) - 150;
        //
        //if (now > hero.startingAnimationTime + hero.animationSpeed) {
        //    // Current y-position variance
        //    if (hero.head2TorsoY == (theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND))) {
        //        currentPosYVariance = 1;
        //    } else if (hero.head2TorsoY == MAX_JUMP_HEIGHT) {
        //        currentPosYVariance = -1;
        //    }
        //
        //    // Indicate that the start animation time should be updated
        //    moved = true;
        //}	

        // Determine the position of the hero's torso
        hero.head2TorsoPosX = headPosX + Math.sqrt( hero.headSize );
        hero.head2TorsoPosY = hero.headPosY + hero.headSize;
	
        // Determine the position of the joint that connects the legs to the torso
        hero.torso2UpperLegPosX = hero.head2TorsoPosX;
        hero.torso2UpperLegPosY = hero.head2TorsoPosY + 40;
	
        // Determine the position of where the torso attaches to the upper arm
        hero.torso2UpperArmPosX = hero.head2TorsoPosX;
        hero.torso2UpperArmPosY = hero.head2TorsoPosY + 12;
	
        if (false) {//now > hero.startingAnimationTime + hero.animationSpeed) {	// Determine the current position of the character's arms
            // Set the direction of the arm position
            if (-20 <= hero.armPositionVariance1) {
                armPositionDirection = -1;
            } else if (20 >= hero.armPositionVariance1) {
                armPositionDirection = 1;
            } else {
                console.log("error");
            }
	
            // Determine the position variance from the torso of arm #1
            hero.armPositionVariance1 = hero.armPositionVariance1  + (10 * armPositionDirection);
            // Determine the position variance from the torso of arm #2
            hero.armPositionVariance2 = hero.armPositionVariance2 + (10 * armPositionDirection);

            // Indicate that the start animation time should be updated
            moved = true;
        }
	
        // Determine the joint between the upper and lower arm of the hero's lower arm #1
        hero.upper2LowerArmPosX1 = hero.torso2UpperArmPosX + hero.armPositionVariance1;
        hero.upper2LowerArmPosY1 = hero.torso2UpperArmPosY + 25;
	
        // Determine the joint between the upper and lower arm of the hero's lower arm #2
        hero.upper2LowerArmPosX2 = hero.torso2UpperArmPosX + hero.armPositionVariance2;
        hero.upper2LowerArmPosY2 = hero.torso2UpperArmPosY + 25;
	
        if (false) {//now > hero.startingAnimationTime + hero.animationSpeed) {
            // Set the direction of the arm position
            if (-13 <= hero.legPositionVariance1) {
                legPositionDirection = -1;
            } else if (13 >= hero.legPositionVariance1) {
                legPositionDirection = 1;
            } else {
                console.log("error");
            }

            // Determine the position variance from the torso of arm #1
            hero.legPositionVariance1 = hero.legPositionVariance1 + (10 * legPositionDirection);
            // Determine the position variance from the torso of arm #2
            hero.legPositionVariance2 = hero.legPositionVariance2 + (10 * legPositionDirection);

            // Indicate that the start animation time should be updated
            moved = true;
        }
	
        // Determine the position of the hero's upper leg #1
        hero.upper2LowerLegPosX1 = hero.torso2UpperLegPosX + hero.legPositionVariance1;
        hero.upper2LowerLegPosY1 = theAction.height - (theAction.mapGrid.tileHeight * ROWS_OF_GROUND);

        // Determine the position of the hero's upper leg #2
        hero.upper2LowerLegPosX2 = hero.torso2UpperLegPosX + hero.legPositionVariance2;
        hero.upper2LowerLegPosY2 = theAction.height - (theAction.mapGrid.tileHeight * ROWS_OF_GROUND);

        ////Jump
        //if (hero.jumpingUpdate) {
        //    // Determine the position of the hero's torso
        //    hero.head2TorsoPosY = hero.head2TorsoPosY + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);
        //
        //    // Determine the position of the joint that connects the legs to the torso
        //    hero.torso2UpperLegPosY = hero.torso2UpperLegPosY + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);
        //
        //    // Determine the position of where the torso attaches to the upper arm
        //    hero.torso2UpperArmPosY = hero.torso2UpperArmPosY + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);
        //
        //    // Determine the joint between the upper and lower arm of the hero's lower arm #1
        //    hero.upper2LowerArmPosY1 = hero.upper2LowerArmPosY1 + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);
        //
        //    // Determine the joint between the upper and lower arm of the hero's lower arm #2
        //    hero.upper2LowerArmPosY2 = hero.upper2LowerArmPosY2 + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);
        //
        //    // Determine the position of the hero's upper leg #1
        //    hero.upper2LowerLegPosY1 = hero.upper2LowerLegPosY1 + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);
        //
        //    // Determine the position of the hero's upper leg #2
        //    hero.upper2LowerLegPosY2 = hero.upper2LowerLegPosY2 + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);
        //}
	
        // Update the start animation time if indicated to do so
        if (moved) {
            hero.startingAnimationTime = Date.now();
        }
    },
    
    draw: function () {
        // Create a circle for the character's head
        ctx.beginPath();
        ctx.arc(hero.headPosX, hero.headPosY, hero.headSize, 0, 2 * Math.PI);
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
    }

};

//Update the y-value of the character to simulate jumping
// NOTE: the x-value will be updated by the same code that causes the constant velocity of character's normal movement
//var jump = function () {
//     Initialize variables
//    var now = Date.now();
//    var moved = false;
//    var currentPosYVariance = 1;

//     Maximum height
//    MAX_JUMP_HEIGHT = theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND) - 150;

//    if (now > hero.startingAnimationTime + hero.animationSpeed) {
//         Current y-position variance
//        if (hero.head2TorsoY == (theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND))) {
//            currentPosYVariance = 1;
//        } else if (hero.head2TorsoY == MAX_JUMP_HEIGHT) {
//            currentPosYVariance = -1;
//        }

//         Indicate that the start animation time should be updated
//        moved = true;
//    }

//     Determine the position of the circle for the character's head at the start of the level
//    hero.headPosY = theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND) - 90;
    
//     Change the y-position  of the character's head
//    hero.head2TorsoY = hero.head2TorsoY + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);

//     Determine the position of the hero's torso
//    hero.head2TorsoY = hero.headPosY + hero.headSize + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);

//     Determine the position of the joint that connects the legs to the torso
//    hero.torso2UpperLegPosY = hero.head2TorsoY + 40 + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);

//     Determine the position of where the torso attaches to the upper arm
//    hero.torso2UpperArmPosY = hero.head2TorsoY + 12 + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);

//     Determine the joint between the upper and lower arm of the hero's lower arm #1
//    hero.upper2LowerArmPosY1 = hero.torso2UpperArmPosY + 25 + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);

//     Determine the joint between the upper and lower arm of the hero's lower arm #2
//    hero.upper2LowerArmPosY2 = hero.torso2UpperArmPosY + 25 + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);

//     Determine the position of the hero's upper leg #1
//    hero.upper2LowerLegPosY1 = hero.torso2UpperLegPosY + 35 + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);

//     Determine the position of the hero's upper leg #2
//    hero.upper2LowerLegPosY2 = hero.torso2UpperLegPosY + 35 + ((MAX_JUMP_HEIGHT * currentPosYVariance) / 4);

//     Update the start animation time if indicated to do so
//    if (moved) {
//        hero.startingAnimationTime = Date.now();
//    }
//};