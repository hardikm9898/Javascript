// codding challange #1

const Car = function(carName,speed){



    this.speed =speed
    this.carName=carName

this.accelatore=function(){
    console.log(`${carName} going at ${speed+10} khm/h`)
}
this.break = function(){
    console.log(`${carName} going at ${speed-10} km/h`)
}
 
    
}

const car1 = new Car("TATA",120)

console.log(car1.accelatore())
console.log(car1.break())

const car2 = new Car("lotus",95)

console.log(car2.accelatore())
console.log(car2.break())


// codding challange #2


class CarCl{


    constructor(name,speed){
        this.speed=speed
        this.name=name
    }

    Accelatore(){

        console.log(`${this.name} going at ${this.speed+=10} khm/h`)
    }
    
    Break(){
        console.log(`${this.name} going at ${this.speed-=   10} km/h`)
    }


    get speedUs(){
         return this.speed/1.6
     }

     set speedUs(speed){
       this.speed=speed*1.6
     }


}



const newCar=new CarCl("ford",120)
console.log(newCar.speedUs)
newCar.Accelatore()


newCar.Accelatore()
newCar.Accelatore()
newCar.Accelatore()





// challange #4

