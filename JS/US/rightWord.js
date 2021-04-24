function getNumber(max = 5, min = 1) { // undefined
    let n = Math.random();
    n = n * (max - min) + min;
    return Math.floor(n);
}

function getRGB() {
    let red = getNumber(256);
    let green = getNumber(256);
    let blue = getNumber(256);
    return `rgb(${red}, ${green}, ${blue})`;
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