function timeFormat(time) {
    if (time > 0 && time < 10) {
        return `0${time}`
    } else if (time > -10 && time < 0) {
        return `-0${Math.abs(time)}`
    } else {
        return time
    }
}

const countdown = () => {
    const countDate = new Date('01 Dec, 2022').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap % day)/ hour);
    const textMinute = Math.floor((gap % hour)/ minute);
    const textSecond = Math.floor((gap % minute)/ second);

document.querySelector('.day').innerHTML = timeFormat(textDay)
document.querySelector('.hour').innerHTML = timeFormat(textHour)
document.querySelector('.minute').innerHTML = timeFormat(textMinute)
document.querySelector('.second').innerHTML = timeFormat(textSecond)
}

setInterval(countdown,1000)