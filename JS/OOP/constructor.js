// let point = {
//     x: 10,
//     y: 3
// }
// let pointNew = {
//     x: 2,
//     y: 4
// }

function Point(xCoord, yCoord){
    this.x = xCoord;
    this.y = yCoord;
}

Point.prototype.toString = function(){
    return `(${this.x}, ${this.y})`;
}

Point.prototype.moveX = function(newX){
    this.x = newX;
}

Point.prototype.moveY = function(newY){
    this.y = newY;
}
let aPoint = new Point(2, 3);
let bPoint = new Point(5, 1);
let cPoint = new Point(0, 4);

aPoint.moveX(5);

console.log(aPoint, bPoint, cPoint);
console.log(aPoint.toString())