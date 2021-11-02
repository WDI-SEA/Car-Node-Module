let speed = 0

module.exports=class Car {
    constructor(c, bool, ) {
        this.color = c,
        this.convertible = bool,
        this.speed = 0
        this.accelerate = (i) =>{
            this.speed = i + this.speed };
        this.decelerate = (i) =>{
            this.speed = this.speed - i };
    }
    
}
