let A = {
    x: 12,
    y: 34,
    getInfo: function(){
        return `Точка с координатами (${this.x}; ${this.y})`;
    },
    move: function(newX, newY){
        this.x = newX;
        this.y = newY;
    }
}

A.move(0, 9);

let info = A.getInfo();
console.log(info);

let thotArray = [];
let whoreArray = ["piss", true, "fuck", "ass", 1488228];

console.log(whoreArray.indexOf("piss"));
thotArray[20] = "ass";

console.log(thotArray)