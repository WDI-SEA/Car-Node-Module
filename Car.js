console.log('hello world!')
//higher order function
function higherOrder(callback){
    callback()
}
// callback function
higherOrder(() => {
    console.log('hey im gud')
})

// class expression:
let color = [ "red", "green", "blue", "silver"]
let initialSpeed = 0
const isCarConvertible = true


   
//convertible boolean
function makeCar(resolve, reject){
    if(isCarConvertible) {
        const newCar = {
            color:  ["red", "green", "blue", "silver"]
        }
        resolve(newCar)
    } else {
        const reason = new Error ('car is not convertible')
        reject(reason)
    }
}
const newCarPromise = new Promise(makeCar)
.then(car => {
    console.log(`car is a ${car.color}!`)
})
.catch(error => {
    console.log(error)
})

async function getNewCar() {
    try {
        const car = await newCarPromise
    } catch (error) {
        console.log (error)
    }
}
getNewCar()
// function to accelarate and decelerate

