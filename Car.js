module.exports = class {
    constructor(color, convertible) {
      this.color = color,
      this.convertible = convertible,
      this.speed = 0
    }

    
  accelerate(){
        let incearseSpeed = this.speed + 10;
        console.log ('accelerate');
    
    }
         

    decelerate() {
        let incearseSpeed = this.speed - 10;
        console.log ('decelerate');
    
    }
