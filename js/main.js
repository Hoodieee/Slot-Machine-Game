//Variables
let imgOne;
let imgTwo;
let imgThree;
let imgNum;
let bet =1;
let balance = 100;

const divOneEl = document.getElementById('one');
const divTwoEl = document.getElementById('two');
const divThreeEl = document.getElementById('three');

const images = {
    '1': '<img src="https://i.imgur.com/cNbw5Nl.png">',
    '2': '<img src="https://i.imgur.com/TyjBPUu.png">',
    '3': '<img src="https://i.imgur.com/gSA05oG.png">',
    '4': '<img src="https://i.imgur.com/gSA05oG.png">',
    '5': '<img src="https://i.imgur.com/gSA05oG.png">',
    '6': '<img src="https://i.imgur.com/gSA05oG.png">'
}

function imgNumGen() {
    imgNum = Math.floor(Math.random() * 6);
}

function gameGenerator() {
    imgOneGen();
    imgTwoGen();
    imgThreeGen();
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