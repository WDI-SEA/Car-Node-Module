class Car {
    
    constructor(color,convertible) {
        this.color = color;
        this.convertible = convertible;
        this.speed = 0;
        console.log("here");    
    }
    accelerate(speed) {
        this.speed = this.speed + speed; 
        // this.speed += speed; 
        

    } 
    decelerate(speed) {
        this.speed = this.speed - speed;

    }
}
