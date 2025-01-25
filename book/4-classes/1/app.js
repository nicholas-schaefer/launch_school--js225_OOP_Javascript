"use strict";

(function notes (){
  `
  This exercise re-examines exercise 2 from the previous chapter.
  In that exercise, you wrote an object factory to instantiate objects that represent smartphones. In this exercise, we'll rewrite that factory using a class.

  Write a class that can be used to instantiate objects that represent smartphones.
  Each smartphone should have a brand, model, and release year.
  Add methods to check the battery level and to display the smartphone's information.
  Create objects that represent the following 2 smartphones:

    Brand 	Model 	Release Year
    Apple 	iPhone 12 	2020
    Samsung 	Galaxy S21 	2021
  `
})

class Phone {
  constructor(brand, model, releaseYear){
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
  }

  info(){
    console.log(this.brand);
    console.log(this.model);
    console.log(this.releaseYear);
  }

  batteryLevel(){
    console.log("Battery level 200%")
  }


}

(function tests(){
  const phone1 = new Phone('Apple', 'iphone 12', '2020');
  phone1.batteryLevel()

  console.log(phone1 instanceof Phone)
  // phone1.info()
})()