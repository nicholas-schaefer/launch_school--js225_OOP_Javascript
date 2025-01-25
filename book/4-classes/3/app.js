"use strict";

(function notes (){
  `
  Create a class hierarchy consisting of vehicles, including cars, boats, and planes, as specific kinds of vehicles.
  All vehicles should be able to accelerate and decelerate.
  Cars should be able to honk, boats should be able to drop anchor, and planes should be able to take off and land.
  Test your code.

  All vehicles should have a color and weight. Cars have a license number, boats have a home port, and planes have an airline name.


  Using the solution to the previous exercise, demonstrate that cars and boats are both instance objects of the Vehicle class,
  that cars are instance objects of the Car class, but boats are not instance objects of the Car class
  `
})

class Vehicle {
  constructor(color, weight){
    this.color = color;
    this.weight = weight;
  }
}

class Car extends Vehicle {
  constructor(color, weight, license){
    super(color, weight);
    this.license = license;
  }

  honk(){
    console.log("Honk, Honk");
  }
}

class Boat extends Vehicle {
  constructor(color, weight, homePort){
    super(color, weight);
    this.homePort = homePort;
  }

  dropAnchor(){
    console.log("anchor overboard!");
  }
}

class Plane extends Vehicle {
  constructor(color, weight, airlineName){
    super(color, weight);
    this.airlineName = airlineName;
  }

  takeOff(){
    console.log("We're going up!")
  }

  land(){
    console.log("We're going down!")
  }
}


(function tests(){
  const vehicle1 = new Vehicle("violet", "100");
  const car1 = new Car("cyan", "200", "abc1234");
  const boat1 = new Boat("blue", "300", "alberta");
  const plane1 = new Plane("pink", "400", "united");

  console.log(car1 instanceof Vehicle === true)
  console.log(boat1 instanceof Vehicle === true)
  console.log(boat1 instanceof Car === false)



  return
  console.log(vehicle1);
  console.log(car1);
  car1.honk();
  console.log(boat1);
  console.log(plane1);
})()