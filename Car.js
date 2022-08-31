
class Car {
    constructor(color, convertible){
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }
    accelerate(speedAcc){
     this.speed += speedAcc
   }
    decelerate(speedDec){
      this.speed -= speedDec  
     }

}

 module.exports = Car