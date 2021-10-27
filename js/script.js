let date, hr, min, sec
function refreshClo() {
    date = new Date()
    hr = date.getHours()
    min = date.getMinutes()
    sec = date.getSeconds()

    document.querySelector(".hr").style.position = `translate(-50%, -100%) rotate(${hr * 360 / 12}deg)`
    document.querySelector(".min").style.position = `translate(-50%, -100%) rotate(${min * 360 / 60 + sec * 6 /60}deg)`
    document.querySelector(".sec").style.position = `translate(-50%, -100%) rotate(${sec * 360 / 60}deg)`
}

refreshClock()
window.setInterval(refreshClock, 1000)