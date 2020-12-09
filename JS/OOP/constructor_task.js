function Rectangle(a, b){
    this.sideA = a,
    this.sideB = b
}

Rectangle.prototype.getArea = function(){
    return this.sideA * this.sideB;
}

Rectangle.prototype.getPerimeter = function(){
    return this.sideA * 2 + this.sideB * 2;
}

Rectangle.prototype.info = function(){
    return `Прямоугольник ${this.sideA}X${this.sideB} с периметром ${this.getPerimeter()} и площадью ${this.getArea()}`
}

let rec = new Rectangle(2, 3);

console.clear();
console.log(rec.info())