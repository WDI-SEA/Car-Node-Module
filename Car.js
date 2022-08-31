function Car(color, convertible, speed){
    this.color = color;
    this.convertible = convertible;
    this.speed = 0;
 
}
 
  
Car.prototype.accelerate = function(accel){
    return this.speed += (accel);
 };
 Car.prototype.decelerate = function(decel){
    return this.speed -= decel;
 }

module.exports = Car;