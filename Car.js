 
 


class car {
    constructor(color, convertible) {
        this.color = color;
        this.convertible = convertible;
        this.speed=0;
      }

      accelerate(num){
        This.speed = (this.speed + num)

      }

    decelerate(num){
        
        This.speed = this.speed - num

    }

}


modual.exports = car;