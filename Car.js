class car {
    constructor(color,convertible){

        this.color = color
        this.convertible = convertible
        this.speed = 0
        
    }
    accelerate(s){
        this.speed += s
    }
    decelerate(s){
        this.speed -= s
    }
}
module.exports = car