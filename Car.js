module.exports = class car{
    constructor(color,convertible){
        this.color=color
        this.convertible=convertible
        this.speed=0
    }
    accelerate(increasedSpeed){
        this.speed += increasedSpeed
    }
    decelerate(decreasedSpeed){
        this.speed -= decreasedSpeed
    }
}