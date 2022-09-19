const counter = document.querySelector('.counter')
const release = document.querySelector('.release')
const modal = document.querySelector('.modal')
const open = document.querySelector('.open-modal')
const close = document.querySelector('.close')
const submit = document.querySelector('.submit')

function getTimeLeft() {
    var today = new Date();
    var release_date = new Date(2022, 11, 20, 22, 40);
    let time = (release_date - today) / 1000;
    let seconds = String(Math.floor(time) % 60).padStart(2, '0')
    let minutes = String(Math.floor(time / 60) % 60).padStart(2, '0')
    let hours = String(Math.floor(time / 3600) % 24).padStart(2, '0')
    let days = String(Math.floor(time / 3600 / 24)).padStart(2, '0')

    counter.innerHTML = `${days}:${hours}:${minutes}:${seconds}`
    release.innerHTML = `Release date: ${release_date.toLocaleString()} GMT-0300`
}

setInterval(getTimeLeft, 1000)

open.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

submit.onclick = function () {
    modal.style.display = "none";
}