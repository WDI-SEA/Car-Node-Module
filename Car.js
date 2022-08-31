class Car {
    constructor(color, convertible) {
        this.color = color;
        this.convertible = convertible;
        this.speed = 0;
    }
    accelerate(num) {
        this.speed += num;
    }
    decelerate(num) {
        this.speed -=num;
        this.speed = this.speed < 0 ? 0 : this.speed;
    }
    set changecolor(newColor) {
        this.color = newColor;
    }
}

my = new Car('blue', true)
my.changecolor = 'red'
console.log(my.color)
module.exports = Car;