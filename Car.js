class Car {

    constructor(color, convertible) {

        this.color = color;
        this.convertible = convertible;
        this.speed = 0;
        
    };
        

     accelerate(mph) {
         this.speed += mph
        }
    

    decelerate(mph) {
        this.speed -= mph
    }
}


module.exports = Car