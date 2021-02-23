const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"),
    ampm = document.querySelector(".js-ampm");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : `0${hours-12}`}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds
        }`;
    ampm.innerText = `${hours < 10 ? `AM` : `PM`}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();