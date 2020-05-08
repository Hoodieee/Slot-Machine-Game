//Variables
let imgOne;
let imgTwo;
let imgThree;
let imgNum;
let bet;
let balance;

const divOneEl = document.getElementById('one');
const divTwoEl = document.getElementById('two');
const divThreeEl = document.getElementById('three');

const images = {
    '0': '<img src="https://i.imgur.com/qaM8dQJ.jpg">',
    '1': '<img src="https://i.imgur.com/WhfcQUd.jpg">',
    '2': '<img src="https://i.imgur.com/OFGdd8u.jpg">',
    '3': '<img src="https://i.imgur.com/5z65Py2.jpg">',
    '4': '<img src="https://i.imgur.com/YhS7iWm.jpg">',
    '5': '<img src="https://i.imgur.com/9yXUu1f.jpg">'
}
function betting() {
    (bet < 5) ? bet++ : bet =1;
}
function init() {
    imgNum = 0;
    bet = 1;
    balance = 100;

}

function imgNumGen() { // set a value for imgNum scrolling through 0-5
    if(imgNum < 5) {
        imgNum ++;
    } else if(imgNum = 5)
        imgNum = 0;
}



function imgOneGen(){
    imgNumGen();
    divOneEl.innerHTML = images[imgNum];
}

function imgTwoGen(){
    imgNumGen();
    divTwoEl.innerHTML = images[imgNum];
}

function imgThreeGen(){
    imgNumGen();
    divThreeEl.innerHTML = images[imgNum];
}

function scrollOne() {
    const scrollTimerOne= setInterval(imgOneGen,100);
    setTimeout(function(){
        clearInterval(scrollTimerOne);
    }, 4000);    
}

function scrollTwo() {
    const scrollTimerTwo= setInterval(imgTwoGen,75);
    setTimeout(function(){
        clearInterval(scrollTimerTwo);
    }, 4500);
}

function scrollThree() {
    const scrollTimerThree= setInterval(imgThreeGen,50);
    setTimeout(function(){
        clearInterval(scrollTimerThree);
    }, 5000);
    
}

function spin() {
    scrollOne();
    scrollTwo();
    scrollThree();
}