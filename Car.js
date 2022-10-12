class Car {

     constructor(color, convertible) {
      this.color = color;
      this.convertible = convertible;
      this.speed = 0;
    }

        accelerate(incCarSpeed) {
        this.speed += incCarSpeed;
      }
      
          decelerate(decCarSpeed) {
          this.speed -= decCarSpeed;
        }
     
  }

module.exports = Car;