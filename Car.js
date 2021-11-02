class car {
    constructor(color, convertible, speed) {
        this.color = color
        this.convertible = true
        this.speed = 0
    }
}

const gWagon = new car('black', false, 120)
const audiS = new car('red', true, 180)

console.log('This Benz truck is my favorite.', gWagon)
console.log('I do not like Audis.', audiS)


function accelerate(speed) {
    console.log('The car is speeding up')
}