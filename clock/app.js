function clock() {
    let day = new Date();
    let h = day.getHours() % 12;
    let m = day.getMinutes();
    let s = day.getSeconds();

    let time = h + ":" + m + ":" + s;


    let clockDisplay = document.querySelector('#clock').innerHTML = time
}

setInterval(clock , 1000)


