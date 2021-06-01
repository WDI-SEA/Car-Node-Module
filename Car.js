
module.exports = class {
    constructor(color, convertible) {
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }

    accelerate(n) {
        this.speed += n
    }

    decelerate(n) {
        this.speed -= n
    }
}