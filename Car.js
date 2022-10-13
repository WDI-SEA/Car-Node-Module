module.exports = class car {
    constructor(color, convertible){
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }
    accelerate(num){
        this.speed=this.speed+num

    }
    decelerate(num){
        this.speed=this.speed-num

    }
// new changes
}

//To test the Car class run 'npm test ' in the ter