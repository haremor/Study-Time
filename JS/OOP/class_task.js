console.clear();

class Rectangle{
    constructor (sideA, sideB){
        this.a = sideA;
        this.b = sideB;
    }
    per(){
        return (this.a + this.b) * 2;
    }
    area(){
        return this.a * this.b;
    }
    info(){
        return `Прямоугольник ${this.a}X${this.b} c периметром ${this.per()} и площадью ${this.area()}`;
    }
}

aRec = new Rectangle(4, 5);

class Square extends Rectangle{
    constructor (sideA){
        super(sideA);
        this.a, this.b = sideA;
    }
    info(){
        return `Квадрат ${this.a}X${this.a} c периметром ${this.per()} и площадью ${this.area()}`;
    }
}

sq = new Square(5);

console.log(sq.info())