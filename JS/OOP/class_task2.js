console.clear();

class Dish{
    constructor(p, id, n){
        this.name = n;
        this.price = p;
        this.id = id;
    }
}

class NotFood extends Dish{
    constructor(n, p, id, d){
        super(id, n, p);
        this.description = d;
        this.category = "NotFood";
    }
}

class Food extends Dish{
    constructor(n, p, id, d){
        super(id, n, p);
        this.description = d;
        this.category = "Food";
    }
}

class Drink extends Dish{
    constructor(n, p, id){
        super(id, n, p);
        this.category = "Drink";
    }
}

class Candy extends Dish{
    constructor(n, p, id, d){
        super(id, n, p);
        this.description = d;
        this.category = "Candy";
    }
}

let dishes = [];

dishes.push(new Candy(dishes.length, "Cookie", 20, "Gluten Free"));
dishes.push(new Candy(dishes.length, "Muffin", 35, ""));
dishes.push(new NotFood(dishes.length, "Caesar", 179, "MEET"));
dishes.push(new Drink(dishes.length, "Blazer", 312, "Puking"));

console.log(dishes)