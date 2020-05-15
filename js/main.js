//-----Global Variables
let bet;
let balance;
let win;
let winAmt;
let totalBet;
let playLine;
let timeMult;


//-----Cached Audio files
const bgSound = new Audio("audio/bgSound.wav");
const payoutSound = new Audio("audio/payout.wav");
const jackpotSound = new Audio("audio/jackpot.mp3");
const spinSound = new Audio("audio/spin.wav");
const winSound = new Audio("audio/win.wav");
const pullSound = new Audio("audio/handle.wav");
const stopSound = new Audio("audio/stop.wav");
const betSound = new Audio("audio/bet.wav");
const paylineSound = new Audio("audio/payline.wav");

//-----Cached Elements
const divLines = document.getElementById('play-lines');
const divBalance = document.getElementById('credits-balance');
const divBetAmt = document.getElementById('bet-amount');
const divTotal = document.getElementById('total-bet');
const messageEl = document.getElementById('message');
const slotEl = document.querySelectorAll(".slot");
const listenBet = document.getElementById('bet');
const listenSpin = document.getElementById('spin');
const listenLine = document.getElementById('playline');
const listenMaxBet = document.getElementById('maxbet');
const topConsoleEl = document.getElementById("top-console");
const lightboardEl = document.getElementById('lightboard');
const gameEl = document.getElementById('game');
const displayEl = document.getElementById('display');
const lightbulbEl = document.getElementById('lightbulb')
const pullbarEl = document.getElementById('pullbar');
const shadeEl = document.getElementById('gray11');
const slotElevenEl = document.getElementById('slot-eleven');

//Event Listeners
listenBet.addEventListener('click', betting)
listenSpin.addEventListener('click', spin);
listenLine.addEventListener('click', addLine)
listenMaxBet.addEventListener('click', maxBet)
pullbarEl.addEventListener('mousedown', barDown);
pullbarEl.addEventListener('mouseup', barUp);

// Array to lookup image files by index value
const imagesLookup =[
    "https://i.imgur.com/6Ts68im.jpg",
    "https://i.imgur.com/YI8snM7.jpg",
    "https://i.imgur.com/iZIom8z.jpg",
    "https://i.imgur.com/3txHJ7q.jpg",
    "https://i.imgur.com/QXB5wUJ.jpg",
    "https://i.imgur.com/b6DgvoY.jpg",
    "https://i.imgur.com/HTrVlD7.jpg",
    "https://i.imgur.com/6SAON7s.jpg",
    "https://i.imgur.com/QyZNaNu.jpg",
    "https://i.imgur.com/5Er6hxm.jpg",
    "https://i.imgur.com/5Er6hxm.jpg"
];

// Objects to hold values for each Image slot
const imgOne = {location: 'imageone', value: 0};
const imgTwo = {location: 'imagetwo', value: 0};
const imgThree = {location: 'imagethree', value: 0};
const imgFour = {location: 'imagefour', value: 0};
const imgFive = {location: 'imagefive', value: 0};
const imgSix = {location: 'imagesix', value: 0};
const imgSeven = {location: 'imageseven', value: 0};
const imgEight = {location: 'imageeight', value: 0};
const imgNine = {location: 'imagenine', value: 0};
const imgTen = {location: 'imageten', value: 0};
const imgEleven = {location: 'imageeleven', value: 0};
const imgTwelve = {location: 'imagetwelve', value: 0};

// Array for payout lookup by index(index number is same as image number)
const payoutLookup =[ 1, 5, 10, 20, 50, 100, 2, 5, 1, 1, 1]; // 2,5,1,1,1 are multipliers

//check functions stored in an array. Accessed depending on how many lines pla
const checks= [middleAcross, topAcross, bottomAcross, diagonalOne, diagonalTwo, zigZagOne, zigZagTwo, zigZagThree, zigZagFour];

init();

function newGame() {
    init();
}

// Initializes the slot machine with the default values
function init() {
    bet = 1;
    win = 0;
    winAmt = 0;
    balance = 1000;
    playLine = 1;
    totalBet = 0;
    displayBalance();
    displayBet();
    displayLines();
    displayTotalBet();
    removeMessage();
}
// Assigns bet amount and display it-- called by eventListener
function betting() {
    (bet < 5) ? bet++ : bet =1;
    betSound.play();
    displayBet();
    displayTotalBet(); // update new total bet
}
// Assigns number of lines to play- called by evenListener
function addLine() {
    (playLine < 9) ? playLine++ : playLine = 1; // prevents user from playing more than 9 paylines
    paylineSound.play();
    displayLines();
    displayTotalBet(); 
}
// Sets max bet and max lines and spins the slots
function maxBet() {
    bet = 5;
    playLine = 9;
    displayBet();
    displayLines();
    displayTotalBet();
    removeHighlight(); //removes highlighted red boxes
    removeMessage(); //clears out message with original logo
    spin();
}

function imgOneGen(){ // displays an image on slot depending on the value of imgOne
    imgOne.value = Math.floor(Math.random() * 6)
    displayImg(imgOne);
}
function imgTwoGen(){ 
    imgTwo.value = Math.floor(Math.random() * 6)
    displayImg(imgTwo);
}
function imgThreeGen(){ 
    imgThree.value = Math.floor(Math.random() * 6)
    displayImg(imgThree);
}
function imgFourGen(){ 
    imgFour.value = Math.floor(Math.random() * 6)
    displayImg(imgFour);
}
function imgFiveGen(){ 
    imgFive.value = Math.floor(Math.random() * 6)
    displayImg(imgFive);
}
function imgSixGen(){ 
    imgSix.value = Math.floor(Math.random() * 6)
    displayImg(imgSix);
}
function imgSevenGen(){ 
    imgSeven.value = Math.floor(Math.random() * 6)
    displayImg(imgSeven);
}
function imgEightGen(){ 
    imgEight.value = Math.floor(Math.random() * 6)
    displayImg(imgEight);
}
function imgNineGen(){ 
    imgNine.value = Math.floor(Math.random() * 6)
    displayImg(imgNine);
}
function imgTenGen(){ 
    imgTen.value = Math.floor(Math.random() * 5) + 6;
    displayImg(imgTen);
    totalBet === 45 ? unshade() : shade() ;
}
function imgElevenGen(){ 
    imgEleven.value = Math.floor(Math.random() * 5) + 6;
    displayImg(imgEleven);
    totalBet === 45 ? unshade() : shade() ;
}
function imgTwelveGen(){ 
    imgTwelve.value = Math.floor(Math.random() * 5) + 6;
    displayImg(imgTwelve);
    totalBet === 45 ? unshade() : shade() ;
}


function scrollOne() { // scroll function randomizes and stops according to interval and timeout per column
    const scrollTimerOne= setInterval(function() {
        imgOneGen();
        imgTwoGen();
        imgThreeGen();
    }, 60);
    setTimeout(function(){
        clearInterval(scrollTimerOne);
        stopSound.play();
    }, 2000);    
}

function scrollTwo() {
    const scrollTimerTwo= setInterval(function() {
        imgFourGen();
        imgFiveGen();
        imgSixGen();
    }, 50);
    setTimeout(function(){
        clearInterval(scrollTimerTwo);
        stopSound.play();
    }, 2500);
}

function scrollThree() {
    const scrollTimerThree= setInterval(function() {
        imgSevenGen();
        imgEightGen();
        imgNineGen();
    }, 40);
    setTimeout(function(){
        clearInterval(scrollTimerThree);
        stopSound.play();
    }, 3000);
    
}
function scrollFour() {
    const scrollTimerFour= setInterval(function() {
        imgTenGen();
        imgElevenGen();
        imgTwelveGen();
    }, 40);
    setTimeout(function(){
        clearInterval(scrollTimerFour);
        stopSound.play();
    }, 3500);
    
}

function spin() {
    if(balance === 0){ // if the palyer has a "0" balance and tries to spin again, display message and reveal a play again button
        messageEl.innerHTML= 'Game Over<button id="newgame">Play Again</button>'
        document.getElementById("newgame").addEventListener('click', init);
        return;
    } else if (balance - totalBet < 0){ // prevents the player from betting more than balance
        messageEl.innerHTML= "Insufficient funds";
        return;
    }
    else{
        spinSound.play();
        removeHighlight();
        removeMessage();
        stopListen(); // game buttons stop listening
        scrollOne();
        scrollTwo();
        scrollThree();
        scrollFour();
        win = 0;
        delayMultiplier = timeMult + 1;
        balance -= totalBet;
        displayBalance();
        displayTotalBet();
        setTimeout(checkWin, 3500);
        for (let i = 0; i < 10; i++){ // resets checkTiming array to null for new round
            checkTiming[i] = null;
        }
    }
}

function displayBalance() {
    divBalance.innerText= `${balance}`;
}
function displayBet() {
    divBetAmt.innerText= `${bet}`;
}
function displayLines() {
    divLines.innerText= `${playLine}`;
}
function displayTotalBet() {
    totalBet = bet * playLine;
    divTotal.innerText= `${totalBet}`;
    totalBet === 45 ? unshade() : shade() ; // max bet allows bonus multiplier feature
}


const checkTiming =[null,null,null,null,null,null,null,null,null,null]; //stores a win at a index and then uses the index number to multiply the delay time
//checkTiming array is being used to spread out and coordinate the timing of the display Message and the win animations

function middleAcross() { // middle row straight across
    timeMult = checkTiming.indexOf(null); // check checkTiming for null to see if there are another winners. Null = no winner
    if (imgTwo.value === imgFive.value && imgFive.value === imgEight.value){ 
        if(bet === 5 && imgTwo.value === 5 && imgEleven.value === 8){
            winAmt = payoutLookup[imgTwo.value] * 1500;
        }else if(bet === 5) {
            winAmt = payoutLookup[imgTwo.value] * payoutLookup[imgEleven.value] * bet;
        }else if(bet < 5){
            winAmt = payoutLookup[imgTwo.value] * bet;
        }
        let msg = `Line 2 Win : $ ${winAmt}`;
        setTimeout(function() {
            if(bet === 5 && imgTwo.value === 5 && imgEleven.value === 8){
                jpAnimation
            } else{
                displayMessage(msg);
                winAnimation();
            }
            highlightWin(imgTwo, imgFive, imgEight, imgEleven);
        }, 4000 * timeMult); // multiply 4000 ms by index number of first null
        checkTiming[timeMult] = 1; //replace the value at the index of the null to 1 so that the next null will be at the next index number.
    } else {
        return ;
    } 
}

function topAcross() { //top row straight across
    timeMult = checkTiming.indexOf(null); 
    if (imgOne.value === imgFour.value && imgFour.value === imgSeven.value){ 
        if(bet === 5 && imgOne.value === 5 && imgEleven.value === 8){ 
            winAmt = payoutLookup[imgTwo.value] * 1500;
        }else if(bet === 5) {
            winAmt = payoutLookup[imgOne.value] * payoutLookup[imgEleven.value] * bet;
        }else if(bet < 5){
            winAmt = payoutLookup[imgOne.value] * bet;
        }
        let msg = `Line 1 Win : $ ${winAmt}`;
        setTimeout(function() {
            if(bet === 5 && imgOne.value === 5 && imgEleven.value === 8){ 
                jpAnimation();
            } else{
                displayMessage(msg);
                winAnimation();
            }
            highlightWin(imgOne, imgFour, imgSeven, imgEleven);
        }, 4000 * timeMult); 
        checkTiming[timeMult] = 1; 
    } else {
        return;
    }
} 

function bottomAcross() { // bottom row straight across
    timeMult = checkTiming.indexOf(null);
    if (imgThree.value === imgSix.value && imgSix.value === imgNine.value){ 
        if(bet === 5 && imgThree.value === 5 && imgEleven.value === 8){
            winAmt = payoutLookup[imgThree.value] * 1500;
        }else if(bet === 5) {
            winAmt = payoutLookup[imgThree.value] * payoutLookup[imgEleven.value] * bet;
        }else if(bet < 5){
            winAmt = payoutLookup[imgThree.value] * bet;
        }
        let msg = `Line 3 Win : $ ${winAmt}`;
        setTimeout(function() {
            if(bet === 5 && imgThree.value === 5 && imgEleven.value === 8){
                jpAnimation();
            } else{
                displayMessage(msg);
                winAnimation();
            }
            highlightWin(imgThree, imgSix, imgNine, imgEleven)
        }, 4000 * timeMult);
        checkTiming[timeMult] = 1;
    } else {
        return ;
    }
}

function diagonalOne() { // diagonal top left to bottom right
    timeMult = checkTiming.indexOf(null);
    if (imgOne.value === imgFive.value && imgFive.value === imgNine.value){ 
        if(bet === 5 && imgOne.value === 5 && imgEleven.value === 8){
            winAmt = payoutLookup[imgOne.value] * 1500;
        }else if(bet === 5) {
            winAmt = payoutLookup[imgOne.value] * payoutLookup[imgEleven.value] * bet;
        }else if(bet < 5){
            winAmt = payoutLookup[imgOne.value] * bet;
        }
        let msg = `Line 4 Win : $ ${winAmt}`;
        setTimeout(function() {
            if(bet === 5 && imgOne.value === 5 && imgEleven.value === 8){
                jpAnimation();
            } else{
                displayMessage(msg);
                winAnimation();
            }
            highlightWin(imgOne, imgFive, imgNine, imgEleven);
        }, 4000 * timeMult);
        checkTiming[timeMult] = 1;
    } else {
        return;
    }
}

function diagonalTwo() { // diagonal bottom lect to to top right
    timeMult = checkTiming.indexOf(null);
    if (imgThree.value === imgFive.value && imgFive.value === imgSeven.value){ 
        if(bet === 5 && imgThree.value === 5 && imgEleven.value === 8){
            winAmt = payoutLookup[imgThree.value] * 1500
        }else if(bet === 5) {
            winAmt = payoutLookup[imgThree.value] * payoutLookup[imgEleven.value] * bet;
        }else if(bet < 5){
            winAmt = payoutLookup[imgThree.value] * bet;
        }
        let msg =`Line 5 Win : $ ${winAmt}`;
        setTimeout(function() {
            if(bet === 5 && imgThree.value === 5 && imgEleven.value === 8){
                jpAnimation();
            } else{
                displayMessage(msg);
                winAnimation();
            }
            highlightWin(imgThree, imgFive, imgSeven, imgEleven);
        }, 4000 * timeMult);
        checkTiming[timeMult] = 1;
    } else {
        return;
    }
}

function zigZagOne() { // zig zag bot -> mid -> bot
    timeMult = checkTiming.indexOf(null);
    if (imgOne.value === imgFive.value && imgFive.value === imgSeven.value){ // zig zag top
        if(bet === 5 && imgOne.value === 5 && imgEleven.value === 8){
            winAmt = payoutLookup[imgOne.value] * 1500;
        }else if(bet === 5) {
            winAmt = payoutLookup[imgOne.value] * payoutLookup[imgEleven.value] * bet;
        }else if(bet < 5){
            winAmt = payoutLookup[imgOne.value] * bet;
        }
        let msg = `Line 6 Win : $ ${winAmt}`;
        setTimeout(function() {
            if(bet === 5 && imgOne.value === 5 && imgEleven.value === 8){
                jpAnimation();
            } else{
                displayMessage(msg);
                winAnimation();
            }
            highlightWin(imgOne, imgFive, imgSeven, imgEleven);
        }, 4000 * timeMult);
        checkTiming[timeMult] = 1;
    } else {
        return;
    }
}

function zigZagTwo() { // zig zag top -> mid -> top
    timeMult = checkTiming.indexOf(null);
    if (imgThree.value === imgFive.value && imgFive.value === imgNine.value){ // zig zag bottom
        if(bet === 5 && imgThree.value === 5 && imgEleven.value === 8){
            winAmt = payoutLookup[imgThree.value] * 1500;
        }else if(bet === 5) {
            winAmt = payoutLookup[imgThree.value] * payoutLookup[imgEleven.value] * bet;
        }else if(bet < 5){
            winAmt = payoutLookup[imgThree.value] * bet;
        }
        let msg = `Line 7 Win : $ ${winAmt}`;
        setTimeout(function() {
            if(bet === 5 && imgThree.value === 5 && imgEleven.value === 8){
                jpAnimation();
            } else{
                displayMessage(msg);
                winAnimation();
            }
            highlightWin(imgThree, imgFive, imgNine, imgEleven);
         }, 4000 * timeMult);
        checkTiming[timeMult] = 1;
    } else {
        return;
    }
}

function zigZagThree() {// zig zag mid -> top -> mid
    timeMult = checkTiming.indexOf(null);
    if (imgTwo.value === imgFour.value && imgFour.value === imgEight.value){ 
        if(bet === 5 && imgTwo.value === 5 && imgEleven.value === 8){
            winAmt = payoutLookup[imgTwo.value] * 1500;
        }else if(bet === 5) {
            winAmt = payoutLookup[imgTwo.value] * payoutLookup[imgEleven.value] * bet;
        }else if(bet < 5){
            winAmt = payoutLookup[imgTwo.value] * bet;
        }
        let msg = `Line 8 Win : $ ${winAmt}`
        setTimeout(function() {
            if(bet === 5 && imgTwo.value === 5 && imgEleven.value === 8){
                jpAnimation();
            }else {
                displayMessage(msg); 
                winAnimation();    
            }
            highlightWin(imgTwo, imgFour, imgEight, imgEleven);
        }, 4000 * timeMult);
        checkTiming[timeMult] = 1;
    } else {
        return;
    }        
}

function zigZagFour() { // zigzag mid -> bot -> mid
    timeMult = checkTiming.indexOf(null); 
    if (imgTwo.value === imgSix.value && imgSix.value === imgEight.value){ // zig zag bottom
        if(bet === 5 && imgTwo.value === 5 && imgEleven.value === 8){
            winAmt = payoutLookup[imgTwo.value] * 1500;
        }else if(bet === 5) {
            winAmt = payoutLookup[imgTwo.value] * payoutLookup[imgEleven.value] * bet;
        }else if(bet < 5){
            winAmt = payoutLookup[imgTwo.value] * bet;
        }
        let msg =`Line 9 Win : $ ${winAmt}`;
        setTimeout(function() {
            if(bet === 5 && imgTwo.value === 5 && imgEleven.value === 8) {
                jpAnimation();
            } else {
                displayMessage(msg);
                winAnimation();
            }
            highlightWin(imgTwo, imgSix, imgEight, imgEleven);
        }, 4000 * timeMult);
        checkTiming[timeMult] = 1; 
    } else {
        return;
    }
}

function checkWin () { // add winAmt to accumulator "win" from all playlines 
for (let i = 0; i< playLine; i++){
    checks[i]();
    win += winAmt ;
    winAmt = 0;
}
setTimeout(startListen, checkTiming.indexOf(null) * 3500); // allows game buttons to start listening again
balance += win;
displayBalance();
}

function highlightWin(slotOne, slotTwo, slotThree, slotFour) { // highlights the winning slots with a red border for each pay line
    setTimeout(function() {
        document.getElementById(`${slotOne.location}`).style.border = "3px solid red";
    }, 250);
    setTimeout(function(){
        document.getElementById(`${slotTwo.location}`).style.border = "3px solid red";
    }, 500);
    setTimeout(function(){
        document.getElementById(`${slotThree.location}`).style.border = "3px solid red";
    }, 750);

    if (totalBet === 45){
        setTimeout(function(){
            document.getElementById(`${slotFour.location}`).style.border = "3px solid red";
        }, 1000);
    }
    setTimeout(function() {
        document.getElementById(`${slotOne.location}`).style.border = "";
        document.getElementById(`${slotTwo.location}`).style.border = "";
        document.getElementById(`${slotThree.location}`).style.border = "";
        document.getElementById(`${slotFour.location}`).style.border = "";
    }, 4000); //clears the highlights after 4 seconds
 
}
    
function displayImg(img) { // function to show images in slots
    document.getElementById(`${img.location}`).src = imagesLookup[img.value];
}

function displayMessage(msg) { // displays win messages
    messageEl.style.fontSize = '15px';
    messageEl.innerText = msg;
}

function displayJackpot() { // displays jackpot message on the middle console under the scrolls
    messageEl.style.fontSize = '30px';
    messageEl.innerText = "JACKPOT WIN";
}

function stopListen() { // turns off event listeners. Used to prevent multiple spins in between scrolls
    listenBet.removeEventListener('click', betting);
    listenSpin.removeEventListener('click', spin);
    listenLine.removeEventListener('click', addLine);
    listenMaxBet.removeEventListener('click', maxBet);
    pullbarEl.removeEventListener('mousedown', barDown);
    pullbarEl.removeEventListener('mouseup', barUp);
}

function startListen() { // turns on event listeners to listen for next bet,spin, addline, maxbet, or bar pull
    listenBet.addEventListener('click', betting)
    listenSpin.addEventListener('click', spin);
    listenLine.addEventListener('click', addLine)
    listenMaxBet.addEventListener('click', maxBet)
    pullbarEl.addEventListener('mousedown', barDown);
    pullbarEl.addEventListener('mouseup', barUp);
}

function removeHighlight() { //clears out the red border highlights
    for (let i = 0; i< slotEl.length; i++){
    slotEl[i].style.border= "";
    }
}

function removeMessage() { // clears out the message display and change back to game logo
    messageEl.style.fontSize = '20px';
    messageEl.innerHTML = `Lucky &nbsp;<img src="https://i.imgur.com/tKmPe3f.png">&nbsp;'s`;
}

function topConsoleDisplay() { // function used to display message on top display for Jackpot
    const jpTop = setInterval (function() {
            topConsoleEl.innerHTML = "JACKPOT WIN";
            topConsoleEl.style.fontSize = "60px";
        setTimeout(function() {
            topConsoleEl.innerHTML = "JACKPOT WIN";
            topConsoleEl.style.fontSize = "50px";
        }, 500);
    }, 1000)
    setTimeout(function() {
        clearInterval(jpTop);
        setTimeout(function() {
            topConsoleEl.innerHTML = `Lucky &nbsp;<img src="https://i.imgur.com/tKmPe3f.png">&nbsp;'s`;
            topConsoleEl.style.fontSize= "50px";          
        }, 500);
    }, 6000)
}

function changeBorder() { // changes the color of the borders as part of the jackpot animation
    const borderInt = setInterval (function() {
        let r = Math.floor((Math.random() * 254) + 1);
        let g = Math.floor((Math.random() * 254) + 1);
        let b = Math.floor((Math.random() * 254) + 1);
        let newColor = `rgb(${r}, ${g}, ${b})`;
        console.log(newColor);
        lightboardEl.style.border = `8px solid ${newColor}`;
        lightboardEl.style.boxShadow = `0px 3px 100px ${newColor}`;
        gameEl.style.border = `8px solid ${newColor}`;
        gameEl.style.boxShadow = `0px 3px 100px ${newColor}`;
        displayEl.style.border = `8px solid ${newColor}`;
        displayEl.style.boxShadow = `0px 3px 100px ${newColor}`;
        lightbulbEl.style.borderTop = `3px solid ${newColor}`;
        lightbulbEl.style.borderLeft = `3px solid ${newColor}`;
        lightbulbEl.style.borderRight = `3px solid ${newColor}`;
        lightbulbEl.style.boxShadow = `0px 3px 100px ${newColor}`;
        lightbulbEl.style.backgroundColor = `${newColor}`;
        lightbulbEl.style.backgroundImage = `radial-gradient(white, ${newColor})`;
    }, 200);
    setTimeout(function() {
        clearInterval(borderInt);
        lightboardEl.style.border = `8px solid red`;
        lightboardEl.style.boxShadow = `0px 3px 40px white`;
        gameEl.style.border = `8px solid red`;
        gameEl.style.boxShadow = `0px 3px 40px white`;
        displayEl.style.border = `8px solid red`;
        displayEl.style.boxShadow = `0px 3px 40px white`;
        lightbulbEl.style.borderTop = `3px solid black`;
        lightbulbEl.style.borderLeft = `3px solid black`;
        lightbulbEl.style.borderRight = `3px solid black`;
        lightbulbEl.style.boxShadow = `0px 3px 40px white`;
        lightbulbEl.style.backgroundColor = `yellow`;
        lightbulbEl.style.backgroundImage = `radial-gradient(white, yellow)`;
    },6000)
}

function jpAnimation() { // runs jackpot animation
    jackpotSound.play();
    displayJackpot();
    topConsoleDisplay();
    changeBorder();
}

function barDown() { // pulls bar down on mouse down
    pullbarEl.innerHTML = '<img src="https://i.imgur.com/LV3qIO1.png">'
    pullSound.play();
}

function barUp() { // brings bar back up and spins slots on mouse up 
    pullbarEl.innerHTML = '<img src="https://i.imgur.com/UQkRMsH.png">'
    spin();
}

function winAnimation(){ // regular win animation
    payoutSound.play();
    const lightChange = setInterval (function() {
        lightbulbEl.style.backgroundColor = "white";
        lightbulbEl.style.backgroundImage = "radial-gradient(white, yellow)";
        lightbulbEl.style.boxShadow = "0 3px 100px yellow";
        lightboardEl.style.boxShadow = `0px 3px 100px red`;
        gameEl.style.boxShadow = `0px 3px 100px red`;
        displayEl.style.boxShadow = `0px 3px 100px red`;
        setTimeout(function() {
            lightbulbEl.style.backgroundColor = "yellow";
            lightbulbEl.style.backgroundImage = "radial-gradient(yellow, white)";
            lightbulbEl.style.boxShadow = "";
            lightboardEl.style.boxShadow = `0px 3px 40px white`;
            gameEl.style.boxShadow = `0px 3px 40px white`;
            displayEl.style.boxShadow = `0px 3px 40px white`;
        }, 500);
    }, 1000)
    setTimeout(function() {
        clearInterval(lightChange);
        setTimeout(function() {
        lightbulbEl.style.backgroundColor = "yellow";
        lightbulbEl.style.backgroundImage = "radial-gradient(yellow, white)";
        lightbulbEl.style.boxShadow = "";      
        }, 500);
    }, 4000)
}

function unshade() { // unshades the bonus box 
    shadeEl.style.backgroundColor = "transparent";
    slotElevenEl.style.border= "3px solid blue";
}

function shade() { //shades the whole bonus column
    shadeEl.style.backgroundColor = "rgba(117, 114, 114, .8)";
    slotElevenEl.style.border= "";
}


