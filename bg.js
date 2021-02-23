const body = document.querySelector("body");

const IMG_NUMBER = 8;

function textColor(num){
    switch(num){
        case 1:
            body.style.color = "rgb(221,179,203)";
            break;
        case 2:
            body.style.color = "rgb(93,161,138)";
            break;
        case 3:
            body.style.color = "rgb(0,44,71)";
            break;
        case 4:
            body.style.color = "rgb(232,108,100)";
            break;
        case 5:
            body.style.color = "rgb(189,150,155)";
            break;
        case 6:
            body.style.color = "black";
            break;
        case 7:
            body.style.color = "rgb(222,184,137)";
            break;
        case 8:
            body.style.color = "white";
            break;
    }
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `./images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    const number = Math.ceil(Math.random()*IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    textColor(randomNumber);
    paintImage(randomNumber);
}

init();