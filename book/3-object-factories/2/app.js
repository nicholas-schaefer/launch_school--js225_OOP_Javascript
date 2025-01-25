"use strict";

(function notes() {
  `
  This exercise re-examines exercise 4 from the previous chapter.
  In that exercise, you wrote a constructor function to instantiate smartphone objects.
  In this exercise, we'll rewrite that constructor as an object factory.

  Write a factory function that creates objects that represent smartphones.
  Each smartphone should have a brand, model, and release year.
  Add methods to check the battery level and to display the smartphones's information.

  Create objects that represent the following two smartphones:

      Brand 	  Model 	      Release Year
      Apple 	  iPhone 12 	  2020
      Samsung 	Galaxy S21 	  2021
  `
})

const makePhone = (brand, model, releaseYear) => ({brand, model, releaseYear});

(function runTests(){
  const phone1 = makePhone('Apple', 'iPhone 12', '2020');
  const phone2 = makePhone('Samsung', 'Galaxy S21', '2021');

  [phone1, phone2].forEach(phone => console.log(phone));
})()