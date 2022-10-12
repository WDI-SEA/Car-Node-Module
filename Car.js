module.exports = class {}

 class Car {
    constructor () {
        this.color = 'blue';
        this.convertible = false;
        this.speed = 0;
      }

   
    accelerate(num){
        this.speed=this.speed+num
    }
  
    decelerate(num){
        this.speed=this.speed-num
    }

}

//const you = new Person('Matt', 36, 'blue', 'blonde');
let newCar = new Car('red',true)
console.log(newCar)
newCar.accelerate(5)
console.log(newCar)
newCar.decelerate(2)
console.log(newCar)