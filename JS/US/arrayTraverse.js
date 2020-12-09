console.clear();

let numbers = [];
let cnt = 10;
const getNumber = max => Math.floor(Math.random() * max);
let sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;

for (let i = 0; i < cnt; i++){
    numbers.push(getNumber(101));
}

console.time("for1");
for (let i = 0, lng = numbers.length; i < lng; i++) {
    sum1 += numbers[i];
}
console.timeEnd("for1");
console.time("forin");
for (let i in numbers) { // For objects only
    sum2 += numbers[i];
}
console.timeEnd("forin");
console.time("forof");
for (let val of numbers) {
    sum3 += val;
}
console.timeEnd("forof");
console.time("fornum");
numbers.forEach(function(val){
    sum4 += val;
});
console.timeEnd("fornum");

numbers.sort(function(a, b){
    // console.log(a, b);
    if (a > b){
        return 1;
    } else{
        return -1;
    }
});
// console.log(numbers);