console.clear();

class Point{
    constructor(pointX, pointY){
        this.x = pointX;
        this.y = pointY;
    }
    moveX(newX){
        this.x = newX;
    }
    moveY(newY){
        this.y = newY;
    }
    toString(){
        return `(${this.x}, ${this.y})`
    }
}

let aPoint = new Point(2, 5);
aPoint.moveY(1);
console.log(aPoint.toString());

class Point3D extends Point{
    constructor (pointX, pointY, pointZ){
        super(pointX, pointY); // наследование конструктора 
        this.z = pointZ;
    }
    moveZ(newZ){
        this.z = newZ;
    }
    toString(){
        return `(${this.x}, ${this.y}, ${this.z})`
    }
}

let bPoint = new Point3D(3, 4, 5);
bPoint.moveX(2);
bPoint.moveY(3);
bPoint.moveZ(4);
console.log(bPoint.toString())