class Car {
    constructor(color, convertible){
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }

  

    accelerate(num){
        speed +=num
        console.log('Speed: '+speed)
    }

    decelerate(num){
        speed -=num
        console.log('Speed: '+speed)
    }


}