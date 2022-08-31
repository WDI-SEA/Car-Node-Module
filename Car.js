module.exports = class Car
{
    constructor(color, isConvertible)
    {
        this.color = color;
        this.convertible = isConvertible;
        this.speed = 0;
    }
    accelerate = (amount) =>
    {
        this.speed += amount;
    }
    decelerate = (amount) =>
    {
        this.speed -= amount;
    }
}