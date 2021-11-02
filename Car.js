module.exports=class Car { 
    constructor (color, convertible){
        this.color = color,
        this.convertible = convertible,
        this.speed = 0
    }
    accelerate = (fast) => {
        this.speed += fast
    }
    decelerate = (slow) => {
        this.speed -= slow
    }
}
