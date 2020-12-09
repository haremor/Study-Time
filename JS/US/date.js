let now = new Date(); // this day
console.log(now);
// console.log(now.getHours())

let tomorrow = new Date(20200010000010); // Кол-во секунд с 1970-01
console.log(tomorrow);
let ny = new Date(2021, 0);

let mnth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

console.log(mnth[now.getMonth()]);

function timeDiff(day) {
    let now = new Date();
    let difference = day - now;
    // console.log(difference); милисекунды
    let sec, min, h, d;
    sec = Math.floor(difference / 1000);
    min = Math.floor(sec / 60);
    sec -= min * 60;
    h = Math.floor(min / 60);
    min -= h * 60;
    d = Math.floor(h / 24);
    h -= d * 24;
    return `Дни: ${d}\nЧасы: ${h}\nМинуты: ${min}\nСекунды: ${sec}`
}

// setInterval(function(){
    // console.clear();
    // console.log(timeDiff(ny))
// }, 1000)
