// Constants
var ROWS_OF_GROUND = 2; // The number of rows from the bottom of the array that are going to serve as the ground
var dialogue = JSON.parse("{\"Questions\": [{\"text\": \"Hello?\",\"userResponseOptions\": null},{\"text\": \"I’ve finally found you!\",\"userResponseOptions\": null},{\"text\": \"What is your first name?\",\"userResponseOptions\": null},{\"text\": \"What is your last name?\",\"userResponseOptions\": null},{\"text\": \"Which country are you from?\",\"userResponseOptions\": null},{\"text\": \"Zip code?\",\"userResponseOptions\": null},{\"text\": \"Social security number?\",\"userResponseOptions\": null},{\"text\": \"That was a joke! Don’t be so offended. My name is Zed. Nice to meet you.\",\"userResponseOptions\": [{\"text\": \"Nice to meet you\",\"zedReaction\": {\"text\": \"You’re so polite!\",\"action\": false}},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"I’m not an African prince. I just need your help. You’ll help me, right? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": \"Great!\",\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": \"default\",\"zedReaction\": {\"text\": null,\"action\": true}}]},{\"text\": \"Look! That stupid little stick man is you. You’re so cute.\",\"userResponseOptions\": null},{\"text\": \"I need you to get to the end. Would you like to go forward? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": \"Good. You won’t be able to stop moving. I hope that isn’t a problem for you.\",\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": \"default\",\"zedReaction\": {\"text\": null,\"action\": true}}]},{\"text\": \"Oh, but there’s a hole. I know you won’t understand, so I’ll explain.\",\"userResponseOptions\": null},{\"text\": \"If you don’t jump over it, you will die. Won’t that be funny? (Y/N}\",\"userResponseOptions\":null},{\"text\": \"Would you like to jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Just kidding! You won’t die. Would you like to jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"You’re good at this. Jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Wow! You’re good at this. Jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Would you like to know more about me? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"I’ll call you. What is your phone number?\",\"userResponseOptions\": [{\"text\": null,\"zedReaction\": {\"text\": null,\"action\": true}}]},{\"text\": \"You should answer that. Will you answer your phone? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": null},{\"text\": [\"N\", \"No\"],\"zedReaction\":{\"text\": \"You’re quite rude.\",\"action\": false}}]},{\"text\": \"Jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Oh, I see. That was an invasion of your ‘privacy.’\",\"userResponseOptions\": null},{\"text\": \"You wouldn’t want me to invade your privacy, would you? (Y/N)\",\"userResponseOptions\": [{\"text\": null,\"zedReaction\": {\"text\": \"Hahahahaha. Interesting.\",\"action\": false}}]},{\"text\": \"Do you want to not jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": null},{\"text\": [\"N\", \"No\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Do you not want to not jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Do you not not not not not not want to jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Oh, you’re very good at this. I knew it was right to choose you as my friend. Are you glad to be my friend? (Y/N)\",\"userResponseOptions\": null},{\"text\": \"Jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Hey, you’re slouching. Sit up straight!\",\"userResponseOptions\": null},{\"text\": \"You know, it’s not your fault the world came to be like this. The real world, I mean.\",\"userResponseOptions\": [{\"text\": null,\"zedReaction\": {\"text\": \"No one talking to each other. Over-dependent on technology. Running out of energy.\",\"action\": false}}]},{\"text\": \"They gave us, what, three more years to live?\",\"userResponseOptions\": [{\"text\": null,\"zedReaction\": {\"text\": \"But that’s why I need your help. With your help, we can stop this.\",\"action\": false}}]},{\"text\": \"If you answer this correctly, you can jump. Think fast: what’s 32432523 + 548493280?\",\"userResponseOptions\": [{\"text\": null,\"zedReaction\": {\"text\": null,\"action\": false}}]},{\"text\": \"Hahaha! I was just kidding. The point is that you answered. Are you mad at me? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": \"Awww.\",\"action\": false}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Are you sure? (Y/N)\",\"userResponseOptions\": null},{\"text\": \"Are you sure? (Y/N)\",\"userResponseOptions\": null},{\"text\": \"Are you sure? (Y/N)\",\"userResponseOptions\": null},{\"text\": \"Are you sure you won’t jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": null},{\"text\": [\"N\", \"No\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Oh, look! A puppy! Kill the puppy? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": \"I see you’re not a dog person.\",\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": \"default\",\"zedReaction\": {\"text\": null,\"action\": true}}]},{\"text\": \"Hmmm. That wasn’t very nice of you. I’ll have to punish you.\",\"userResponseOptions\": [{\"text\": null,\"zedReaction\": {\"text\": null,\"action\": true}}]},{\"text\": \"Hahaha! You’re so slow now!\",\"userResponseOptions\": null},{\"text\": \"Look at you. You’re so stupid.\",\"userResponseOptions\": null},{\"text\": \"Stupid and helpless. Poor thing. I’ll help you.\",\"userResponseOptions\": null},{\"text\": \"If you can guess the right word, I’ll let you speed up!\",\"userResponseOptions\": null},{\"text\": \"I’ll give you a hint: it’s something you said earlier.\",\"userResponseOptions\": null},{\"text\": \"Nope, not that.\",\"userResponseOptions\": null},{\"text\": \"Not that either. Guess you’re slow in the head, too.\",\"userResponseOptions\": null},{\"text\": \"Oh, come on. It wasn’t that long ago!\",\"userResponseOptions\": null},{\"text\": \"This is hopeless.\",\"userResponseOptions\": null},{\"text\": \"You don’t have any better ideas?\",\"userResponseOptions\": null},{\"text\": \"Gosh, if you don’t get it correct, we’ll both be stuck here forever.\",\"userResponseOptions\": null},{\"text\": \"I guess you’ve bought enough time for me. Okay, let’s speed up again.\",\"userResponseOptions\": [    {\"text\": null,\"zedReaction\": {\"text\": null,\"action\": true}}]},{\"text\": \"Whoops! Too fast!\",\"userResponseOptions\": null},{\"text\": \"I’ll fix it. There.\",\"userResponseOptions\": {\"text\": null,\"zedReaction\": {\"text\": null,\"action\": true}}},{\"text\": \"Hahaha. You should’ve seen the stupid look on your face.\",\"userResponseOptions\": null},{\"text\": \"Priceless.\",\"userResponseOptions\": null},{\"text\": \"But it’s always priceless. I’ve never seen stupidity so carefully sculpted on a human form.\",\"userResponseOptions\": null},{\"text\": \"Jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Good, now that you’re stopped, I have a few questions. Is that okay? (Y/N)\",\"userResponseOptions\": null},{\"text\": \"Will you answer them honestly? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": {\"text\": \"Honesty is very important.\",\"action\": true}},{\"text\": \"default\",\"zedReaction\": {\"text\": \"Honesty is very important.\",\"action\": true}}]},{\"text\": \"Okay, answer this question properly, or you will lose the game. Do you like me? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": \"Liar.\",\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": {\"text\": \"Honesty is important here. I need you to be honest about yourself. I will be honest in return.\",\"action\": true}},{\"text\": \"default\",\"zedReaction\": {\"text\": \"You should answer the question like I ask you to answer it.\",\"action\": true}}]},{\"text\": \"You’re probably wondering who I am. I am Zed. That’s not my real name, but it’s close enough for you.\",\"userResponseOptions\": null},{\"text\": \"I’ve been hacking into people’s computers, trying to find someone to help me.\",\"userResponseOptions\": null},{\"text\": \"And you said you’re going to help me. Right? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": \"You’re wonderful.\",\"action\": false}},{\"text\": [\"N\", \"No\"],\"zedReaction\": {\"text\": \"You don’t have a choice anymore.\",\"action\": false}},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Do you trust me?\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": \"default\",\"zedReaction\": true}]},{\"text\": \"Jump? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": null},{\"text\": \"default\",\"zedReaction\": null}]},{\"text\": \"Remember how I said you were helping me? You were.\",\"userResponseOptions\": null},{\"text\": \"I’ve hacked into your computer, while you were busy playing this.\",\"userResponseOptions\": null},{\"text\": \"Did you think we were really friends?\",\"userResponseOptions\": null},{\"text\": \"You’re so cute.\",\"userResponseOptions\": null},{\"text\": \"What are you going to do now?\",\"userResponseOptions\": null},{\"text\": \"Is there even any point to finishing this game?\",\"userResponseOptions\": null},{\"text\": \"Well, you’ve done well. You’ve helped me a lot. I want to give you a reward.\",\"userResponseOptions\": null},{\"text\": \"Look at that! Do you see that there? (Y/N).\",\"userResponseOptions\": null},{\"text\": \"Will you read what it says? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": \"\'(name) is the most stupid person on this planet.\' Oh! Now that’s not very nice, even if it is true.\",\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": {\"text\": \"That’s right. Never listen to anything you read.\",\"action\": true}},{\"text\": \"default\",\"zedReaction\": {\"text\": \"If you say so. Now you’ll never know.\",\"action\": true}}]},{\"text\": \"I’ve got a surprise for you.\",\"userResponseOptions\":{\"text\": null,\"zedReaction\": {\"text\": null,\"action\": true}}},{\"text\": \"Do you hear that? Are you going to answer it? (Y/N)\",\"userResponseOptions\": [{\"text\": [\"Yes\", \"Y\", \"Ye\", \"Ya\", \"Yeah\", \"Yess\", \"Yees\", \"Yeess\", \"Yee\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": [\"N\", \"No\"],\"zedReaction\": {\"text\": null,\"action\": true}},{\"text\": \"default\",\"zedReaction\": {\"text\": null,\"action\": true}}]},{\"text\": \"Look! It’s me. :)\",\"userResponseOptions\": null},{\"text\": \"I thought you could use a morale boost.\",\"userResponseOptions\": null},{\"text\": \"You can do it! You’re the only one who can do it. I picked you for a reason.\",\"userResponseOptions\": null},{\"text\": \"Yes. Hackers don’t have to be bad, do they? (Y/N)\",\"userResponseOptions\": null},{\"text\": \"You’ve found me.\",\"userResponseOptions\": null},{\"text\": \"Good luck defeating me.\",\"userResponseOptions\": null},{\"text\": \"You know something? I hate computers.\",\"userResponseOptions\": null},{\"text\": \"That might be odd for a hacker to say, but it’s true.\",\"userResponseOptions\": null},{\"text\": \"We’ve ruined our lives, and the planet, because of our constant use of these stupid things.\",\"userResponseOptions\": null},{\"text\": \"That’s why I needed your help.\",\"userResponseOptions\": null},{\"text\": \"I want to get rid of all technology.\",\"userResponseOptions\": null},{\"text\": \"I’m destroying from within.\",\"userResponseOptions\": null},{\"text\": \"And you can’t stop me, (name).\",\"userResponseOptions\": null},{\"text\": \"You’re next.\",\"userResponseOptions\": null}]}");
    // Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 800;
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

// Victory screen image
var victoryScreenReady = false;
var victoryScreenImage = new Image();
victoryScreenImage.onload = function () {
    victoryScreenReady = true;
};
victoryScreenImage.src = "Content/Gratulations3.png";

// Background image
var cursorReady = false;
var cursorImage = new Image();
cursorImage.onload = function () {
    cursorReady = true;
};
cursorImage.src = "Content/cursor.png";

// Create the array for the virtual world part of the screen
var mapArray1 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var mapArray2 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var mapArray3 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var mapArray4 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var mapArray5 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var mapArray6 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var mapArray7 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var mapArray8 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var mapArray9 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var mapArray10 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Make an array of the map arrays
var mapArrays = [mapArray1, mapArray2, mapArray3, mapArray4, mapArray5, mapArray6, mapArray7, mapArray8, mapArray9, mapArray10];

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
	speed: 100, // movement in pixels per second
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
	animationSpeed: 0,
	armPositionVariance1: 0,
	armPositionVariance2: 0,
	legPositionVariance1: 0,
	legPositionVariance2: 0
	
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
    currentArray: 0,
    rowSize: mapArrays[0][0].length, // Number of elements in each row ( number of columns )
    columnSize: mapArrays[0].length, // Number of elements in each column ( number of rows )
    tileHeight: 0,
    tileWidth: 0,
    endScreenImage: new Image()
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

var zedLines = {
    width: 0,
    height: 0,
    charWidth: 0,
    maxChars: 0,
    lines: [],
    then: 0,
    wait: 0
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

    // Set the current map array value
    mapGrid.currentArray = 0;

    // Set the end screen image
    mapGrid.endScreenImage = victoryScreenImage;
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

var justZedThings = ["A","B","C","D","E","F","G"];

var initZedLines = function () {
    zedLines.questionNumber = 0;
    zedLines.width = commandLine.width;
    zedLines.height = commandLine.height;
    zedLines.charWidth = commandLine.charWidth;
    zedLines.maxChars = commandLine.maxChars;
    zedLines.lines = [{
        x: commandLine.x,
        y: commandLine.y - 20,
        string: []
    },
    {
        x: commandLine.x,
        y: commandLine.y - 32,
        string: []
    },
    {
        x: commandLine.x,
        y: commandLine.y - 44,
        string: []
    },
    {
        x: commandLine.x,
        y: commandLine.y - 56,
        string: []
    },
    {
        x: commandLine.x,
        y: commandLine.y - 68,
        string: []
    },
    {
        x: commandLine.x,
        y: commandLine.y - 80,
        string: []
    },
    {
        x: commandLine.x,
        y: commandLine.y - 92,
        string: []
    }];
    zedLines.then = Date.now();
    zedLines.wait = 2000;
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
    //Everything relative to:
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
	hero.startingAnimationTime = Date.now();
	hero.animationSpeed = 300;
	
	// Initialize
	hero.armPositionVariance1 = -20;
	hero.armPositionVariance2 = 20;
	hero.legPositionVariance1 = -13;
	hero.legPositionVariance2 = 13;
};

addEventListener("keyup", function (e) {
    
}, false);

var mayRespond = false;

addEventListener("keydown", function (e) {
    if (mayRespond) {
        commandLine.keyPressed = e.keyCode;
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
        } else if (commandLine.keyPressed == 32) {
            if (cursor.position <= commandLine.maxChars) {
                commandLine.string.push(String.fromCharCode(commandLine.keyPressed));
                cursor.position += 1;
            }
            pressed = true;
        } else if (commandLine.keyPressed == 13) {
            var str = "";
            for (j = 0; j < commandLine.string.length; j++) {
                str = str.concat(commandLine.string[j]);
            }
            console.log(str);
            commandLine.string = [];
            cursor.position = 0;
            sendResponse(str);
            pressed = true;
            mayRespond = false;
        } else {
            console.log("WRONG KID DIED"); //debug
        }
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

var adjustZedLines = function (str) {
    for (j = zedLines.lines.length - 1; j > 0; j--) {
        zedLines.lines[j].string = zedLines.lines[j - 1].string;
    }
    zedLines.lines[0].string = str.split('');
};

// Make the character jump
var jump = function () {
    // Maximum height
    maximumJumpHeight = theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND) - 150;

    // Determine the y-values of the jump
    jumpStage1 = maximumJumpHeight / 4;
    jumpStage2 = maximumJumpHeight / 2;
    jumpStage3 = (3 * maximumJumpHeight) / 4;
    jumpStage4 = maximumJumpHeight;
    jumpStage5 = (5 * maximumJumpHeight) / 4;
    jumpStage6 = 3 * maximumJumpHeight;
    jumpStage7 = (7 * maximumJumpHeight) / 4;
    jumpStage8 = 2 * maximumJumpHeight;

};

// Update the body parts based on the x-position of the head
var updateBodyPartsPosition = function(headPosX) {
	// Initialize variables
	var now = Date.now();
	var moved = false;
	
	// Determine the position of the hero's torso
	hero.head2TorsoPosX = headPosX + Math.sqrt( hero.headSize );
	hero.head2TorsoY = hero.headPosY + hero.headSize;
	
	// Determine the position of the joint that connects the legs to the torso
	hero.torso2UpperLegPosX = hero.head2TorsoPosX;
	hero.torso2UpperLegPosY = hero.head2TorsoY + 40;
	
	// Determine the position of where the torso attaches to the upper arm
	hero.torso2UpperArmPosX = hero.head2TorsoPosX;
	hero.torso2UpperArmPosY = hero.head2TorsoY + 12;
	
	if (now > hero.startingAnimationTime + hero.animationSpeed) {	// Determine the current position of the character's arms
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
	
	if (now > hero.startingAnimationTime + hero.animationSpeed) {
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
	hero.upper2LowerLegPosY1 = theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND);

	// Determine the position of the hero's upper leg #2
	hero.upper2LowerLegPosX2 = hero.torso2UpperLegPosX + hero.legPositionVariance2;
	hero.upper2LowerLegPosY2 = theAction.height - (mapGrid.tileHeight * ROWS_OF_GROUND);
	
    // Update the start animation time if indicated to do so
	if (moved) {
		hero.startingAnimationTime = Date.now();
	}
};

var sendResponse = function (str) {
    adjustZedLines(str);
};

var currentQuestion = 0;
var zedSpeaks = function () {
    adjustZedLines("Jump?");
    mayRespond = true;
}

// Update game objects
var temp = true;
var update = function (modifier) {
    // When the player gets to the edge of the screen...
    if (hero.headPosX >= mapGrid.width) {
        // Change the screen to the next map grid
        mapGrid.currentArray += 1

        // Reset the character to the beginning of the next screen
        initCharacterPosition();
    } else {
        // Update the hero's head x position
        hero.headPosX += hero.speed * modifier;

        // Update all the other body parts based on the new head position
        updateBodyPartsPosition(hero.headPosX);
    }

    if (temp) {
        zedSpeaks();
        console.log("Thus spaketh Zedesthra");
    }
    temp = false;
    updateCommandLine();
};

// Draw everything
var render = function () {

    // Determine whether to display a map or the victory screen
    if (mapGrid.currentArray <= 9) {
        // Make sure that the background tiles have been read in
        if (blackBgTileReady && greenBgTileReady) {
            // Draw the array
            for (var i = 0; i < mapArrays[mapGrid.currentArray].length; i++) {
                for (var j = 0; j < mapArrays[mapGrid.currentArray][i].length; j++) {
                    // Draw black tiles
                    if (mapArrays[mapGrid.currentArray][i][j] == 0) {
                        ctx.drawImage(blackBgTile, posX, posY, mapGrid.tileWidth, mapGrid.tileHeight);
                    }
                    // Draw green tiles
                    if (mapArrays[mapGrid.currentArray][i][j] == 1) {
                        ctx.drawImage(greenBgTile, posX, posY, mapGrid.tileWidth, mapGrid.tileHeight);
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


        // Draw command screen
        if (commandBackgroundReady) {
            ctx.drawImage(commandBackgroundImage, commandBackground.x, commandBackground.y, commandBackground.width, commandBackground.height);
        };
        if (commandLine.string.length > 0) {
            for (i = 0; i < commandLine.string.length; i++) {
                if (commandLine.string[i] != " ") {
                    ctx.drawImage(chars[commandLine.string[i]], commandLine.x + (cursor.width * i), cursor.y, cursor.width, cursor.height);
                }
            }
        }
        for (i = 0; i < zedLines.lines.length; i++) {
            if (zedLines.lines[i].string.length > 0) {
                for (j = 0; j < zedLines.lines[i].string.length; j++) {
                    var character = zedLines.lines[i].string[j];
                    if (character != " ") {
                        switch (character) {
                            case '?':
                                character = 'QuestionMark';
                                break;
                            case '!':
                                character = 'ExclamationMark';
                                break;
                            case '.':
                                character = 'period';
                                break;
                            case '(':
                                character = 'LeftParenth';
                                break;
                            case ')':
                                character = 'RightParenth';
                                break;
                            case '/':
                                character = 'Slash';
                                break;
                            case '\'':
                                character = 'Apostrophe'
                                break;
                            default:
                                character = character.toUpperCase();
                                break;
                        }
                        console.log(character); //debug
                        ctx.drawImage(chars[character], zedLines.lines[i].x + (cursor.width * j), zedLines.lines[i].y, cursor.width, cursor.height);
                    }
                    }
                }
            }
        }
        if (cursorReady && cursor.blinking) {
            ctx.drawImage(cursorImage, cursor.x, cursor.y, cursor.width, cursor.height);
        };
    
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

//createGround();
initActionAndCommand();
initMapGrid();
initCommandLine();
initZedLines();
initCursor();
initCharacterPosition();
var then = Date.now();
main();