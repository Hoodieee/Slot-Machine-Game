//Global Variables
let bet;
let balance;
let win;
let winAmt;
let totalBet;
let playLine;
let timeMult;


//Cached Elements
const divLines = document.getElementById('play-lines');
const divBalance = document.getElementById('credits-balance');
const divBetAmt = document.getElementById('bet-amount');
const divTotal = document.getElementById('total-bet');
const messageEl = document.getElementById('message');




//Event Listeners
document.getElementById('bet').addEventListener('click', betting)
document.getElementById('spin').addEventListener('click', spin);
document.getElementById('playline').addEventListener('click', addLine)
document.getElementById('maxbet').addEventListener('click', maxBet)


// lookup images by index value
const imagesLookup =
    ['<img src="https://i.imgur.com/6Ts68im.jpg">',
    '<img src="https://i.imgur.com/YI8snM7.jpg">',
    '<img src="https://i.imgur.com/iZIom8z.jpg">',
    '<img src="https://i.imgur.com/3txHJ7q.jpg">',
    '<img src="https://i.imgur.com/QXB5wUJ.jpg">',
    '<img src="https://i.imgur.com/b6DgvoY.jpg">',
    '<img src="https://i.imgur.com/HTrVlD7.jpg">',
    '<img src="https://i.imgur.com/6SAON7s.jpg">',
    '<img src="https://i.imgur.com/QyZNaNu.jpg">',
    '<img src="https://i.imgur.com/5Er6hxm.jpg">',
    '<img src="https://i.imgur.com/5Er6hxm.jpg">'
];

// Objects to hold values for each Image slot
const imgOne = {location: 'slot-one', value: 0};
const imgTwo = {location: 'slot-two', value: 0};
const imgThree = {location: 'slot-three', value: 0};
const imgFour = {location: 'slot-four', value: 0};
const imgFive = {location: 'slot-five', value: 0};
const imgSix = {location: 'slot-six', value: 0};
const imgSeven = {location: 'slot-seven', value: 0};
const imgEight = {location: 'slot-eight', value: 0};
const imgNine = {location: 'slot-nine', value: 0};
const imgTen = {location: 'slot-ten', value: 0};
const imgEleven = {location: 'slot-eleven', value: 0};
const imgTwelve = {location: 'slot-twelve', value: 0};

// Array for payout lookup by index(index number is same as image number)
const payoutLookup =[ 1, 5, 10, 20, 150, 100, 2, 5, 1, 1, 1]; // 2,5,1,1,1 are multipliers

//check functions stored in an array 
const checks= [middleAcross, topAcross, bottomAcross, diagonalOne, diagonalTwo, zigZagOne, zigZagTwo, zigZagThree, zigZagFour];

init();

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
}
// Assigns bet amount and display- called by eventListener
function betting() {
    (bet < 5) ? bet++ : bet =1;
    displayBet();
    displayTotalBet(); // update new total bet
}
// Assigns number of lines to play- called by evenListener
function addLine() {
    (playLine < 9) ? playLine++ : playLine = 1;
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
    spin();
}

function imgOneGen(){ // displays an image on slot 1 depending on the value of imgOne
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
}
function imgElevenGen(){ 
    imgEleven.value = Math.floor(Math.random() * 5) + 6;
    displayImg(imgEleven);
}
function imgTwelveGen(){ 
    imgTwelve.value = Math.floor(Math.random() * 5) + 6;
    displayImg(imgTwelve);
}


function scrollOne() {
    const scrollTimerOne= setInterval(function() {
        imgOneGen();
        imgTwoGen();
        imgThreeGen();
    }, 60);
    setTimeout(function(){
        clearInterval(scrollTimerOne);
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
    }, 3500);
    
}

function spin() {
    for (let i = 0; i < 10; i++){
        checkTiming[i] = null;
    }
    scrollOne();
    scrollTwo();
    scrollThree();
    scrollFour();
    balance -= totalBet;
    displayBalance();
    displayTotalBet();
    setTimeout(checkWin, 3000);
    win = 0;

}

function displayBalance() {
    divBalance.innerText= `Credits: $${balance}`;
}
function displayBet() {
    divBetAmt.innerText= `Bet: $${bet}`;
}
function displayLines() {
    divLines.innerText= `Lines: ${playLine}`;
}
function displayTotalBet() {
    totalBet = bet * playLine;
    divTotal.innerText= `Total Bet: $${totalBet}`;
}



const checkTiming =[null,null,null,null,null,null,null,null,null,null]; //stores a win at a index and then uses the index number to multiply the delay time




function topAcross() { //top row straight across
    timeMult = checkTiming.indexOf(null); // check checkTiming for null to see if there are another winners. Null = no winner
    setTimeout(function() {
        if (imgOne.value === imgFour.value && imgFour.value === imgSeven.value){ 
            if(bet === 5 && imgOne.value === 5 && imgEleven.value === 8){ 
                winAmt = payoutLookup[imgTwo.value] * 1500;
            }else if(bet === 5 && imgOne.value !== 5) {
                winAmt = payoutLookup[imgOne.value] * payoutLookup[imgEleven.value] * bet;
            }else if(bet < 5){
                winAmt = payoutLookup[imgOne.value] * bet;
            }
            let msg = `Line 1 Win : $ ${winAmt}`;
            displayMessage(msg);
            highlightWin(imgOne, imgFour, imgSeven, imgEleven);
        } else {
            winAmt = 0;
        }
    }, 4000 * timeMult); // multiply 4000 ms by index number of first null
    checkTiming[timeMult] = 1; //replace the value at the index of the null to 1 so that the next null will be at the next index number.
}  
function middleAcross() { // middle row straight across
    timeMult = checkTiming.indexOf(null);
    setTimeout(function() {
        if (imgTwo.value === imgFive.value && imgFive.value === imgEight.value){ 
            if(bet === 5 && imgTwo === 5 && imgEleven === 8){
                winAmt = payoutLookup[imgTwo.value] * 1500;
            }else if(bet === 5 && imgTwo.value !== 5) {
                winAmt = payoutLookup[imgTwo.value] * payoutLookup[imgEleven.value] * bet;
            }else if(bet < 5){
                winAmt = payoutLookup[imgTwo.value] * bet;
            }
            let msg = `Line 2 Win : $ ${winAmt}`;
            displayMessage(msg);
            highlightWin(imgTwo, imgFive, imgEight, imgEleven);
        } else {
            winAmt = 0;
        }
    }, 4000 * timeMult);
    checkTiming[timeMult] = 1;
}
function bottomAcross() { // bottom row straight across
    timeMult = checkTiming.indexOf(null);
    setTimeout(function() {
        if (imgThree.value === imgSix.value && imgSix.value === imgNine.value){ 
            if(bet === 5 && imgThree === 5 && imgEleven === 8){
                winAmt = payoutLookup[imgThree.value] * 1500;
            }else if(bet === 5 && imgThree.value !== 5) {
                winAmt = payoutLookup[imgThree.value] * payoutLookup[imgEleven.value] * bet;
            }else if(bet < 5){
                winAmt = payoutLookup[imgThree.value] * bet;
            }
            let msg = `Line 3 Win : $ ${winAmt}`;
            displayMessage(msg);
            highlightWin(imgThree, imgSix, imgNine, imgEleven)
        } else {
            winAmt = 0;
        }
    }, 4000 * timeMult);
    checkTiming[timeMult] = 1;
}
function diagonalOne() { // diagonal top left to bottom right
    timeMult = checkTiming.indexOf(null);
    setTimeout(function() {
        if (imgOne.value === imgFive.value && imgFive.value === imgNine.value){ 
            if(bet === 5 && imgOne.value === 5 && imgEleven.value === 8){
                winAmt = payoutLookup[imgOne.value] * 1500;
            }else if(bet === 5 && imgOne.value !== 5) {
                winAmt = payoutLookup[imgOne.value] * payoutLookup[imgEleven.value] * bet;
            }else if(bet < 5){
                winAmt = payoutLookup[imgOne.value] * bet;
            }
            let msg = `Line 4 Win : $ ${winAmt}`;
            displayMessage(msg);
            highlightWin(imgOne, imgFive, imgNine, imgEleven);
        } else {
            winAmt = 0;
        }
    }, 4000 * timeMult);
    checkTiming[timeMult] = 1;
}
function diagonalTwo() { // diagonal bottom lect to to top right
    timeMult = checkTiming.indexOf(null);
    setTimeout(function() {
        if (imgThree.value === imgFive.value && imgFive.value === imgSeven.value){ 
            if(bet === 5 && imgThree.value === 5 && imgEleven.value === 8){
                winAmt = payoutLookup[imgThree.value] * 1500
            }else if(bet === 5 && imgThree.value !== 5) {
                winAmt = payoutLookup[imgThree.value] * payoutLookup[imgEleven.value] * bet;
            }else if(bet < 5){
                winAmt = payoutLookup[imgThree.value] * bet;
            }
            let msg =`Line 5 Win : $ ${winAmt}`;
            displayMessage(msg);
            highlightWin(imgThree, imgFive, imgSeven, imgEleven);
        } else {
            winAmt = 0;
        }
    }, 4000 * timeMult);
    checkTiming[timeMult] = 1;
}
function zigZagOne() { // zig zag bot -> mid -> bot
    timeMult = checkTiming.indexOf(null);
    setTimeout(function() {
        if (imgOne.value === imgFive.value && imgFive.value === imgSeven.value){ // zig zag top
            if(bet === 5 && imgOne.value === 5 && imgEleven.value === 8){
                winAmt = payoutLookup[imgOne.value] * 1500;
            }else if(bet === 5 && imgOne.value !== 5) {
                winAmt = payoutLookup[imgOne.value] * payoutLookup[imgEleven.value] * bet;
            }else if(bet < 5){
                winAmt = payoutLookup[imgOne.value] * bet;
            }
            let msg = `Line 6 Win : $ ${winAmt}`;
            displayMessage(msg);
            highlightWin(imgOne, imgFive, imgSeven, imgEleven);
        } else {
            winAmt = 0;
        }
    }, 4000 * timeMult);
    checkTiming[timeMult] = 1;
}
function zigZagTwo() { // zig zag top -> mid -> top
    timeMult = checkTiming.indexOf(null);
    setTimeout(function() {
        if (imgThree.value === imgFive.value && imgFive.value === imgNine.value){ // zig zag bottom
            if(bet === 5 && imgThree.value === 5 && imgEleven.value === 8){
                winAmt = payoutLookup[imgThree.value] * 1500;
            }else if(bet === 5 && imgThree.value !== 5) {
                winAmt = payoutLookup[imgThree.value] * payoutLookup[imgEleven.value] * bet;
            }else if(bet < 5){
                winAmt = payoutLookup[imgThree.value] * bet;
            }
            let msg = `Line 7 Win : $ ${winAmt}`;
            displayMessage(msg);
            highlightWin(imgThree, imgFive, imgNine, imgEleven);
        } else {
            winAmt = 0;
        }
    }, 4000 * timeMult);
    checkTiming[timeMult] = 1;
}
function zigZagThree() {// zig zag mid -> top -> mid
    timeMult = checkTiming.indexOf(null);
    setTimeout(function() {
        if (imgTwo.value === imgFour.value && imgFour.value === imgEight.value){ 
            if(bet === 5 && imgTwo.value === 5 && imgEleven.value === 8){
                winAmt = payoutLookup[imgTwo.value] * 1500;
            }else if(bet === 5 && imgTwo.value !== 5) {
                winAmt = payoutLookup[imgTwo.value] * payoutLookup[imgEleven.value] * bet;
            }else if(bet < 5){
                winAmt = payoutLookup[imgTwo.value] * bet;
            }
            let msg = `Line 8 Win : $ ${winAmt}`
            displayMessage(msg);     
            highlightWin(imgTwo, imgFour, imgEight, imgEleven);
        } else {
            winAmt = 0;
        }
    }, 4000 * timeMult);
    checkTiming[timeMult] = 1;
}
function zigZagFour() { // zigzag mid -> bot -> mid
    timeMult = checkTiming.indexOf(null); 
    setTimeout(function() {
        if (imgTwo.value === imgSix.value && imgSix.value === imgEight.value){ // zig zag bottom
            if(bet === 5 && imgTwo.value === 5 && imgEleven.value === 8){
                winAmt = payoutLookup[imgTwo.value] * 1500;
            }else if(bet === 5 && imgTwo.value !== 5) {
                winAmt = payoutLookup[imgTwo.value] * payoutLookup[imgEleven.value] * bet;
            }else if(bet < 5){
                winAmt = payoutLookup[imgTwo.value] * bet;
            }
            let msg =`Line 9 Win : $ ${winAmt}`;
            displayMessage(msg);
            highlightWin(imgTwo, imgSix, imgEight, imgEleven);
        } else {
            winAmt = 0;
        }
    }, 4000 * timeMult);
    checkTiming[timeMult] = 1; 
}

function checkWin () {
    for (let i = 0; i< playLine; i++){
        checks[i]();
        win += winAmt ;
    }
    balance += win;
    displayBalance();
    win = 0;
    winAmt = 0;
}

function highlightWin(slotOne, slotTwo, slotThree, slotFour) { // highlights the winning slots with a red border
    setTimeout(function() {
        document.getElementById(`${slotOne.location}`).style.border = "5px solid red";
    }, 250);
    setTimeout(function(){
        document.getElementById(`${slotTwo.location}`).style.border = "5px solid red";
    }, 500);
    setTimeout(function(){
        document.getElementById(`${slotThree.location}`).style.border = "5px solid red";
    }, 750);

    if (slotFour.value !== 1 || bet !== 5){
    setTimeout(function(){
        document.getElementById(`${slotFour.location}`).style.border = "5px solid red";
    }, 1000);
    }

    setTimeout(function(){ //clears the highlights after 4 seconds
        document.getElementById(`${slotOne.location}`).style.border = "";
        document.getElementById(`${slotTwo.location}`).style.border = "";
        document.getElementById(`${slotThree.location}`).style.border = "";
        document.getElementById(`${slotFour.location}`).style.border = "";
    }, 4000);
}


    
function displayImg(img) { // function to show images in slots
    document.getElementById(`${img.location}`).innerHTML = imagesLookup[img.value];
}

function displayMessage(msg) { // displays win messages
    messageEl.innerText = msg;
    setTimeout(function() {
        messageEl.innerText = "";
    }, 4000);

}

    