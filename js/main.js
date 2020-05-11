//Variables

// Hold Values for each slot


let imgNum;

let bet;
let balance;
let win;
let winAmt;
let totalBet;
let playLine;
let winTop;
let winMid;
let winBot;
let winDiaOne;
let winDiaTwo;
let winZigOne;
let winZigTwo;
let winZigThree;
let winZigFour;


const divLines = document.getElementById('play-lines');
const divBalance = document.getElementById('credits-balance');
const divBetAmt = document.getElementById('bet-amount');
const divTotal = document.getElementById('total-bet');




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

const payoutLookup =[ 5, 10, 20, 50, 100, 200, 2, 5, 1, 1, 1]; // 2,5,1,1,1 are multipliers

//check functions stored in an array 
const checks= [middleAcross, topAcross, bottomAcross, diagonalOne, diagonalTwo, zigZagOne, zigZagTwo, zigZagThree, zigZagFour];

init();

function init() {
    bet = 1;
    win = 0;
    balance = 1000;
    playLine = 1;
    winTop = 0;
    winMid = 0;
    winBot = 0;
    winDiaOne = 0;
    winDiaTwo = 0;
    winZigOne = 0;
    winZigTwo = 0;
    winZigThree = 0;
    winZigFour = 0;
    totalBet = 0;
    displayBalance();
    displayBet();
    displayLines();
    displayTotalBet();
}

function betting() {
    (bet < 5) ? bet++ : bet =1;
    displayBet();
}
function addLine() {
    (playLine < 9) ? playLine++ : playLine = 1;
    displayLines();
}
function maxBet() {
    bet = 5;
    playLine = 9;
    displayBet();
    displayLines();
    displayTotalBet();
    spin();
}

function imgOneGen(){ // displays an image on slot 1 depending on the value of imgNum
    imgOne.value = Math.floor(Math.random() * 6)
    displayImg(imgOne);
}
function imgTwoGen(){ // displays an image on slot 2 depending on the value of imgNum
    imgTwo.value = Math.floor(Math.random() * 6)
    displayImg(imgTwo);
}
function imgThreeGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgThree.value = Math.floor(Math.random() * 6)
    displayImg(imgThree);
}
function imgFourGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgFour.value = Math.floor(Math.random() * 6)
    displayImg(imgFour);
}
function imgFiveGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgFive.value = Math.floor(Math.random() * 6)
    displayImg(imgFive);
}
function imgSixGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgSix.value = Math.floor(Math.random() * 6)
    displayImg(imgSix);
}
function imgSevenGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgSeven.value = Math.floor(Math.random() * 6)
    displayImg(imgSeven);
}
function imgEightGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgEight.value = Math.floor(Math.random() * 6)
    displayImg(imgEight);
}
function imgNineGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgNine.value = Math.floor(Math.random() * 6)
    displayImg(imgNine);
}
function imgTenGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgTen.value = Math.floor(Math.random() * 5) + 6;
    displayImg(imgTen);
}
function imgElevenGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgEleven.value = Math.floor(Math.random() * 5) + 6;
    displayImg(imgEleven);
}
function imgTwelveGen(){ // displays an image on slot 3 depending on the value of imgNum
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
    divBalance.innerText= `Credits: $ ${balance}`;
}
function displayBet() {
    divBetAmt.innerText= `Bet: $ ${bet}`;
}
function displayLines() {
    divLines.innerText= `Total Lines: ${playLine}`;
}
function displayTotalBet() {
    totalBet = bet * playLine;
    divTotal.innerText= `Total Bet: $ ${totalBet}`;
}


function topAcross() {
    if (imgOne.value === imgFour.value && imgFour.value === imgSeven.value){ //top row straight across
        if(bet === 5 && imgOne.value === 5 && imgTen.value === 8){ //jackpot
            winTop = payoutLookup[imgTwo.value] * 1500;
            highlightWin(imgOne, imgFour, imgSeven);
            return;
        }else if(bet === 5) {
            winTop = payoutLookup[imgOne.value] * payoutLookup[imgTen.value];
            highlightWin(imgOne, imgFour, imgSeven);
            return;
        }else {
            winTop = payoutLookup[imgOne.value];
            highlightWin(imgOne, imgFour, imgSeven);
            return;
        }
    } else {
        winTop = 0;
    }
}
function middleAcross() {
    if (imgTwo.value === imgFive.value && imgFive.value === imgEight.value){ // middle row straight across
        if(bet === 5 && imgTwo === 5 && imgEleven === 8){
            winMid = payoutLookup[imgTwo.value] * 1500;
            highlightWin(imgTwo, imgFive, imgEight);
            return;
        }else if(bet === 5) {
            winMid = payoutLookup[imgTwo.value] * payoutLookup[imgEleven.value];
            highlightWin(imgTwo, imgFive, imgEight);
            return;
        }else {
            winMid = payoutLookup[imgTwo.value];
            highlightWin(imgTwo, imgFive, imgEight);
            return;
        }
    }else {
        winMid = 0;
    }
}
function bottomAcross() {
    if (imgThree.value === imgSix.value && imgSix.value === imgNine.value){ // bottom row straight across
        if(bet === 5 && imgThree === 5 && imgTwelve === 8){
            winBot = payoutLookup[imgThree.value] * 1500;
            highlightWin(imgThree, imgSix, imgNine)
            return;
        }else if(bet === 5) {
            winBot = payoutLookup[imgThree.value] * payoutLookup[imgTwelve.value];
            highlightWin(imgThree, imgSix, imgNine)
            return;
        }else {
            winBot = payoutLookup[imgThree.value];
            highlightWin(imgThree, imgSix, imgNine)
            return;
        }
    } else {
        winBot = 0;
    }
}
function diagonalOne() {
    if (imgOne.value === imgFive.value && imgFive.value === imgNine.value){ // diagonal top left to bottom right
        if(bet === 5 && imgTwo.value === 5 && imgTwelve.value === 8){
            winDiaOne = payoutLookup[imgOne.value] * 1500;
            highlightWin(imgOne, imgFive, imgNine);
            return;
        }else if(bet === 5) {
            winDiaOne = payoutLookup[imgOne.value] * payoutLookup[imgTwelve.value];
            highlightWin(imgOne, imgFive, imgNine);
            return;
        }else {
            winDiaOne = payoutLookup[imgOne.value];
            highlightWin(imgOne, imgFive, imgNine);
            return;
        }
    } else {
        winDiaOne = 0;
    }
}
function diagonalTwo() {
    if (imgThree.value === imgFive.value && imgFive.value === imgSeven.value){ // diagonal bottom lect to to top right
        if(bet === 5 && imgThree.value === 5 && imgTen.value === 8){
            winDiaTwo = payoutLookup[imgThree.value] * 1500
            highlightWin(imgThree, imgFive, imgSeven);
            return;
        }else if(bet === 5) {
            winDiaTwo = payoutLookup[imgThree.value] * payoutLookup[imgTen.value];
            highlightWin(imgThree, imgFive, imgSeven);
            return;
        }else {
            winDiaTwo = payoutLookup[imgThree.value];
            highlightWin(imgThree, imgFive, imgSeven);
            return;
        }
    } else {
        winDiaTwo = 0;
    }
}
function zigZagOne() {
    if (imgOne.value === imgFive.value && imgFive.value === imgSeven.value){ // zig zag top
        if(bet === 5 && imgOne.value === 5 && imgTen.value === 8){
            winZigOne = payoutLookup[imgOne.value] * 1500;
            highlightWin(imgOne, imgFive, imgSeven);
            return;
        }else if(bet === 5) {
            winZigOne = payoutLookup[imgOne.value] * payoutLookup[imgTen.value];
            highlightWin(imgOne, imgFive, imgSeven);
            return;
        }else {
            winZigOne = payoutLookup[imgOne.value];
            highlightWin(imgOne, imgFive, imgSeven);
            return;
        }
    }else {
        winZigOne = 0;
    }
}
function zigZagTwo() {
    if (imgThree.value === imgFive.value && imgFive.value === imgNine.value){ // zig zag bottom
        if(bet === 5 && imgThree.value === 5 && imgTwelve.value === 8){
            winZigTwo = payoutLookup[imgThree.value] * 1500;
            highlightWin(imgThree, imgFive, imgNine);
            return;
        }else if(bet === 5) {
            winZigTwo = payoutLookup[imgThree.value] * payoutLookup[imgTwelve.value];
            highlightWin(imgThree, imgFive, imgNine);
            return;
        }else {
            winZigTwo = payoutLookup[imgThree.value];
            highlightWin(imgThree, imgFive, imgNine);
            return;
        }
    } else {
        winZigTwo = 0;
    }
}
function zigZagThree() {
    if (imgTwo.value === imgFour.value && imgFour.value === imgEight.value){ // zig zag bottom
        if(bet === 5 && imgTwo.value === 5 && imgEleven.value === 8){
            winZigThree = payoutLookup[imgTwo.value] * 1500;
            highlightWin(imgTwo, imgFour, imgEight);
            return;
        }else if(bet === 5) {
            winZigThree = payoutLookup[imgTwo.value] * payoutLookup[imgEleven.value];
            highlightWin(imgTwo, imgFour, imgEight);
            return;
        }else {
            winZigThree = payoutLookup[imgTwo.value];
            highlightWin(imgTwo, imgFour, imgEight);
            return;
        }
        
    } else {
        winZigThree = 0;
        }
}
function zigZagFour() {
    if (imgTwo.value === imgSix.value && imgSix.value === imgEight.value){ // zig zag bottom
        if(bet === 5 && imgTwo.value === 5 && imgEleven.value === 8){
            winZigFour = payoutLookup[imgTwo.value] * 1500;
            highlightWin(imgTwo, imgSix, imgEight);
            return;
        }else if(bet === 5) {
            winZigFour = payoutLookup[imgTwo.value] * payoutLookup[imgEleven.value];
            highlightWin(imgTwo, imgSix, imgEight);
            return;
        }else {
            winZigFour = payoutLookup[imgTwo.value];
            highlightWin(imgTwo, imgSix, imgEight);
            return;
        }
    } else {
        winZigFour = 0;
    }
}

function checkWin () {
    for (let i = 0; i< playLine; i++){
        checks[i]();
    }
    
    win = (winTop + winMid + winBot + winDiaOne + winDiaTwo + winZigOne + winZigTwo + winZigThree + winZigFour) * bet;
    if (win!== 0){
    console.log(`You win ${win} credits!`)
    }
    balance += win;
    displayBalance();
    winTop = 0;
    winMid = 0;
    winBot = 0;
    winDiaOne = 0;
    winDiaTwo = 0;
    winZigOne = 0;
    winZigTwo = 0;
    winZigThree = 0;
    winZigFour = 0;
    
}



    function highlightWin(slotOne, slotTwo, slotThree) {
        document.getElementById(`${slotOne.location}`).style.border = "3px solid red";
        document.getElementById(`${slotTwo.location}`).style.border = "3px solid red";
        document.getElementById(`${slotThree.location}`).style.border = "3px solid red";
        console.log(slotOne.location);
        console.log(slotTwo.location);
        console.log(slotThree.location);
    }

    function displayImg(img) {
        
        document.getElementById(`${img.location}`).innerHTML = imagesLookup[img.value];
    }

    