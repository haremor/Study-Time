console.clear();
// let x = 10, y = 20;
// console.log(x + y);
// try {
    // let z = x + a;
    // console.log(z);
// } catch (e){
    // console.log(e);
// } finally {
    // console.log("Grzyb")
// }
//console.error("");
//console.count("|");
//console.warn("FUCK")
//console.table([1,2,3])

const getN = (max = 10, min = -1) => Math.ceil(Math.random() * (max - min) + min);

let n = getN(100, 0);
let div = getN();
let result = n / div;
console.table([n, div, result]);

let zorro = new Error("Division by Zero");

try {
    if (Math.abs(div) === 0) {
        throw zorro;
    }
} catch (e) {
    console.log(e);
}

let noleft = new Error("Not Divisible Without a Remainder");

try {
    if (n % div !== 0 && div !== 0 && n !== 0) {
        throw noleft;
    }
} catch (e) {
    console.log(e);
}
