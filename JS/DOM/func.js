// Useful shit library

const log = console.log;

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function getNumber(max, min = 0){
    return Math.round(Math.random() * (max - min) + min);
}

function getRGB(alphaChange = false){
    let n;
    return `rgb(${getNumber(256)}, ${getNumber(256)}, ${getNumber(256)}, ${n = alphaChange == true ? Math.random() : 1})`;
}