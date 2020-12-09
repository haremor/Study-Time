function fx(x) {
    let y = x ** 2;
    return y;
}
console.time("fx");
for (let i = -10; i <= 10; i++) {
    let n = fx(i);
    console.log(i, n);
}
console.timeEnd("fx");

function getNumber(max = 5, min = 1) { // undefined
    let n = Math.random();
    n = n * (max - min) + min;
    return Math.floor(n);
}

console.log(getNumber(5, 2));
/*
    getRGB()

    "rgb(123,65,90)"
*/

function getRGB() {
    let red = getNumber(256);
    let green = getNumber(256);
    let blue = getNumber(256);
    return `rgb(${red}, ${green}, ${blue})`;
}
console.log(getRGB());


function setColor() {
    return `background: ${getRGB()}`;
}

// rightWord(5, "ворон", "ворона", "вороны");
// rightWord(5, "рублей", "рубль", "рубля");
// rightWord(5, "стаканов", "стакан", "стакана");

function rightWord(n, w0, w1, w2) {
    if (n % 100 < 11 || n % 100 > 14) {
        if (n % 10 === 1) {
            return w1;
        } else if (n % 10 >= 2 && n % 10 <= 4) {
            return w2
        } else {
            return w0;
        }
    } else {
        return w0;
    }
}

let num = getNumber(100);
console.log(num, rightWord(num, "стаканов", "стакан", "стакана"));

let cash = 0;
let salary = 0;
let dream = 7000000;
let age = 18;
while (cash < dream) {
    for (let m = 0; m < 12; m++) {
        cash += salary;
        cash -= 20000;
    }
    salary += 5000;
    age++;
}
let str = `K ${age} ${rightWord(age, "годам", "году", "годам")} Дмитрий накопил на квартиру ${cash} ${rightWord(cash, "рублей", "рубля")}`;
console.log(str);