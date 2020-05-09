//Variables
let imgOne;
let imgTwo;
let imgThree;
let imgNum;
let bet;
let balance;
let win;

const divOneEl = document.getElementById('one');
const divTwoEl = document.getElementById('two');
const divThreeEl = document.getElementById('three');
const divBalance = document.getElementById('credits-balance');
const divBetAmt = document.getElementById('bet-amount');



//Event Listeners

document.getElementById('bet').addEventListener('click', betting)
document.getElementById('spin').addEventListener('click', spin);

const images = {
    '0': '<img src="https://i.imgur.com/qaM8dQJ.jpg">',
    '1': '<img src="https://i.imgur.com/WhfcQUd.jpg">',
    '2': '<img src="https://i.imgur.com/OFGdd8u.jpg">',
    '3': '<img src="https://i.imgur.com/5z65Py2.jpg">',
    '4': '<img src="https://i.imgur.com/YhS7iWm.jpg">',
    '5': '<img src="https://i.imgur.com/9yXUu1f.jpg">'
}
init();

function init() {
    imgNum = 0;
    bet = 1;
    win = 0;
    balance = 100;
    displayBalance();
    displayBet();
}


function imgNumGen() { // goes through imgNum 0-1-2-3-4-5 to show a smooth scrolling effect
    imgNum = Math.floor(Math.random() * 6)
}

function randomNumGen() {
    Math.floor(Math.random() + 1) //returns a value of 1,2, or 3
}

// function randomIntervalGen() {
//     let intVal = randomNumGen()
//     if(intVal === 1) return 20;
//     if(intVal === 2) return 40;
//     if(intVal === 3) return 60;

// }
function betting() {
    (bet < 5) ? bet++ : bet =1;
    displayBet();
}

function imgOneGen(){ // displays an image on slot 1 depending on the value of imgNum
    imgNumGen();
    imgOne = imgNum
    divOneEl.innerHTML = images[imgOne];
    
}

function imgTwoGen(){ // displays an image on slot 2 depending on the value of imgNum
    imgNumGen();
    imgTwo = imgNum
    divTwoEl.innerHTML = images[imgTwo];
}

function imgThreeGen(){ // displays an image on slot 3 depending on the value of imgNum
    imgNumGen();
    imgThree = imgNum
    divThreeEl.innerHTML = images[imgThree];
}

function scrollOne() {
    const scrollTimerOne= setInterval(imgOneGen, 60);
    setTimeout(function(){
        clearInterval(scrollTimerOne);
    }, 2000);    
}

function scrollTwo() {
    const scrollTimerTwo= setInterval(imgTwoGen, 50);
    setTimeout(function(){
        clearInterval(scrollTimerTwo);
    }, 2500);
}

function scrollThree() {
    const scrollTimerThree= setInterval(imgThreeGen, 40);
    setTimeout(function(){
        clearInterval(scrollTimerThree);
    }, 3000);
    
}

function spin() {
    scrollOne();
    scrollTwo();
    scrollThree();
    balance -= bet;
    displayBalance();
    setTimeout(checkWin, 3000);
    win = 0;

}

function displayBalance() {
    divBalance.innerText= `Credits: ${balance}`;
}
function displayBet() {
    divBetAmt.innerText= `Bet: ${bet}`;
}

function checkWin () {
    if (imgOne === imgTwo && imgTwo === imgThree && imgThree === imgOne){
    win = 10 * bet;
    console.log("You Win!!");
    balance += win;
    displayBalance();
    }
}
// const winPayout {
//     '0': 5,
//     '1': 10,
//     '2': 20,
//     '3': 50,
//     '4': 100,
//     '


function scroll() {
    imgNum < 6 ? imgNum++ : imgNum = 0;
        imgNum++;
    }