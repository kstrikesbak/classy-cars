class Vehicle {
  constructor(name, wheelCount, maxSpeed) {
    this.name = name;
    this.wheelCount = wheelCount;
    this.maxSpeed = maxSpeed;
    this.speed = 0
  }

  accelerate () {
    if (this.speed < this.maxSpeed) {
      this.speed = this.speed + 1/3*this.maxSpeed
    }
  }
}

class Car extends Vehicle {
  constructor(name,maxSpeed) {
    super(name,4,maxSpeed) 


  }

  drive() {
    return "Vroom. "
  }
}

class Ferrari extends Car {
  constructor() {
    super("Ferrari",180)
  }

  drive() {
    return super.drive() + "I'm a Ferrari!"
  }

  accelerate () {
    if (this.speed < this.maxSpeed) {
      this.speed = this.speed + 1/2*this.maxSpeed
    }
  }
}


module.exports = {
  Vehicle,
  Car,
  Ferrari
}

