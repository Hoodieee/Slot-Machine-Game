//Variables
let imgOne;
let imgTwo;
let imgThree;
let imgFour;
let imgFive;
let imgSix;
let imgSeven;
let imgEight;
let imgNine;
let imgTen;
let imgEleven;
let imgTwelve;
let imgNum;

let bet;
let balance;
let win;
let winAmt;

const divOneEl = document.getElementById('slot-one');
const divTwoEl = document.getElementById('slot-two');
const divThreeEl = document.getElementById('slot-three');
const divFourEl = document.getElementById('slot-four');
const divFiveEl = document.getElementById('slot-five');
const divSixEl = document.getElementById('slot-six');
const divSevenEl = document.getElementById('slot-seven');
const divEightEl = document.getElementById('slot-eight');
const divNineEl = document.getElementById('slot-nine');
const divTenEl = document.getElementById('slot-ten');
const divElevenEl = document.getElementById('slot-eleven');
const divTwelveEl = document.getElementById('slot-twelve');

const divBalance = document.getElementById('credits-balance');
const divBetAmt = document.getElementById('bet-amount');



//Event Listeners

document.getElementById('bet').addEventListener('click', betting)
document.getElementById('spin').addEventListener('click', spin);

const images =
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


const payoutLookup =[ 5, 10, 20, 50, 100, 200, 2, 5, 1, 1, 1];
init();

function init() {
    imgNum = 0;
    bet = 1;
    win = null;
    balance = 100;
    displayBalance();
    displayBet();
}

function betting() {
    (bet < 5) ? bet++ : bet =1;
    displayBet();
}

function imgOneGen(){ // displays an image on slot 1 depending on the value of imgNum
    imgOne = Math.floor(Math.random() * 6)
    divOneEl.innerHTML = images[imgOne];   
}
function imgTwoGen(){ // displays an image on slot 2 depending on the value of imgNum
    imgTwo = Math.floor(Math.random() * 6)
    divTwoEl.innerHTML = images[imgTwo];
}
function imgThreeGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgThree = Math.floor(Math.random() * 6)
    divThreeEl.innerHTML = images[imgThree];
}
function imgFourGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgFour = Math.floor(Math.random() * 6)
    divFourEl.innerHTML = images[imgFour];
}
function imgFiveGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgFive = Math.floor(Math.random() * 6)
    divFiveEl.innerHTML = images[imgFive];
}
function imgSixGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgSix = Math.floor(Math.random() * 6)
    divSixEl.innerHTML = images[imgSix];
}
function imgSevenGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgSeven = Math.floor(Math.random() * 6)
    divSevenEl.innerHTML = images[imgSeven];
}
function imgEightGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgEight = Math.floor(Math.random() * 6)
    divEightEl.innerHTML = images[imgEight];
}
function imgNineGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgNine = Math.floor(Math.random() * 6)
    divNineEl.innerHTML = images[imgNine];
}
function imgTenGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgTen = Math.floor(Math.random() * 4) + 7;
    divTenEl.innerHTML = images[imgTen];
}
function imgElevenGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgEleven = Math.floor(Math.random() * 4) + 7;
    divElevenEl.innerHTML = images[imgEleven];
}
function imgTwelveGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgTwelve = Math.floor(Math.random() * 4) + 7;
    divTwelveEl.innerHTML = images[imgTwelve];
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
    balance -= bet;
    displayBalance();
    setTimeout(checkWin, 3000);
    win = null;

}

function displayBalance() {
    divBalance.innerText= `Credits: ${balance}`;
}
function displayBet() {
    divBetAmt.innerText= `Bet: ${bet}`;
}

function checkWin () {
    if (imgOne === imgFour && imgFour === imgSeven){ //top row straight across
        if(bet === 5 && imgOne === 5 && imgTen === 8){ //jackpot
            winAmt = payoutLookup[imgTwo] * 1500;
        }else if(bet === 5) {
        winAmt = payoutLookup[imgOne] * payoutLookup[imgTen];
        }else winAmount = payoutLook[imgOne];
    }
    else if (imgTwo === imgFive && imgFive === imgEight){ // middle row straight across
        if(bet === 5 && imgTwo === 5 && imgEleven === 8){
        winAmt = payoutLookup[imgTwo] * payoutLookup[imgEleven];
        }
    }
    else if (imgThree === imgSix && imgSix === imgNine){ // bottom row straight across
        winAmt = payoutLookup[imgThree] * payoutLookup[imgTwelve];
    }
    else if (imgOne === imgFive && imgFive=== imgNine){ // diagonal top left to bottom right
        winAmt = payoutLookup[imgOne] * payoutLookup[imgTwelve];
    }
    else if (imgThree === imgFive && imgFive === imgSeven){ // diagonal bottom lect to to top right
        winAmt = payoutLookup[imgThree] * payoutLookup[imgTen];
    }
    else if (imgOne === imgFive && imgFive === imgSeven){ // zig zag top
        winAmt = payoutLookup[imgOne] * payoutLookup[imgTen];
    }
    else if (imgThree === imgFive && imgFive === imgNine){ // zig zag bottom
        winAmt = payoutLookup[imgThree] * payoutLookup[imgTwelve];
    }
    else if (win === null) return;

    win = winAmt * bet;
    console.log(`You win ${win} credits!`)
    balance += win;
    displayBalance();
    }
