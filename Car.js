class car {
    //prevent people from accessing props by making them private
    #privateVal
    constructor(color, convertible, engineSize) {
    this.color = color;
    this.convertible = convertible;
    this.speed = 0;
    this.#privateVal = engineSize
    }

    accelerate(number) {
        this.speed += number
    }

    decelerate(number) {
        this.speed -= number
    }

    printPrivate() {
        console.log(this.#privateVal)
    }

    //setter and getter methods:

    getColor() {
        return this.color;
    }

    setColor(newColor) {
        this.color = newColor;
    }
}

const myCar = new car('black', false, 10);
//console.log(myCar.privateVal)
myCar.printPrivate();
//console.log(myCar.getColor())
myCar.color = 'orange';

module.exports = car;