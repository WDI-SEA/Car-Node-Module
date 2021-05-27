class Car {

    constructor(color, convertible, speed) {

        this.color = color;
        this.convertible = convertible;
        this.speed = speed;
    };
        
    speed = 0

     accelerate(mph) {
        mph = 25
        }
    }

     decelerate(mph) {
        
        }
    }



}
const escape = new Car("grey", false)
console.log("ESCAPE COLOR: " + escape.color)
console.log("ESCAPE CONVERTIBLE: " + escape.convertible)


module.exports = Car