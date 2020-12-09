const getNumber = (max = 11, min = 0) => {
    Math.floor(Math.random() * (max-min) + min);
}
const setDefect = per => {
    let arr = [];
    for (let i = 0; i < 100; i++){
        if (i < per){
            arr.push(true);
        } else {
            arr.push(false);
        }
    }
    return arr[getNumber(arr.length)]
}
function Fruit(per){
    this.diameter = getNumber(11, 5);
    this.weight = this.diameter * 15;
    this.defect = setDefect(per)
}

let tree = {
    fruitCnt: 200,
    defectPers: getNumber(31, 20),
    friuts: [],
    gather: function(){
        for(let i = 0; i < this.fruitCnt; i++){
            this.friuts.push(new Fruit(this.defectPers));
        }
    },
    info: function(cost){
        if (this.friuts.length === 0){
            this.gather();
        }
        let cnt = 0;
        let fullWeight = 0;
        for (let i = 0; i < this.friuts.length; i++){
            if (!this.friuts[i].defect){
                cnt++;
                fullWeight += this.friuts[i].weight;
            }
        }
        return `Дерево произвело ${cnt} плодов общим весом ${fullWeight} кг и стоимостью ${fullWeight * cost}руб.`
    }
}

console.log(tree.info())