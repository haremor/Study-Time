console.clear();

let phrase = "All your base are belong to us";
let exp = new RegExp("ba")
let exp2 = /b/ig; // литерал |i flag - ignore case|g flag - all occurences

exp2 = /.a[lr]{0,1}/ig; // возможные окончания, сколько (* - от нуля, + - от единицы, . - любой символ)

let result = phrase.search(exp2); // первое вхождение
console.log(result);
let result2 = phrase.match(exp2); // массив вхождений
console.log(result2);

console.log(exp.test(phrase)); // есть ли вообще (boolean)
console.log(exp2.exec(phrase)); // массив с результатами поиска строки