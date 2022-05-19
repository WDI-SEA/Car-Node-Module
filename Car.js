class Car{
    constructor(color, convertible){
       this.color = color;
       this.convertible = convertible;
       this.speed = 0;
    }

    accelerate(acc){
       this.speed += acc;
    }

    decelerate(dcc){
       this.speed -= dcc;
    }
}

module.exports = Car

