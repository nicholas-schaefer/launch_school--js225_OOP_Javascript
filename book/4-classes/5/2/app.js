"use strict";

(function notes (){
  `
  Create a Book class with private fields title, author, and year.
    - getters for each field
    - setter for the year field
        - that raises a RangeError if year is before 1900.
  `
})

class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year){
    this.#title = title;
    this.#author = author;
    this.year = year;
  }

  get title(){
    return this.#title;
  }

  get author(){
    return this.#author;
  }

  get year(){
    return this.#year;
  }

  set year(newYear){
    if (newYear < 1900) throw new Error('RangeError: Invalid year');
    this.#year = newYear;
  }
}

let book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
console.log(book.title);  // The Great Gatsby
console.log(book.author); // F. Scott Fitzgerald
console.log(book.year);   // 1925

book.year = 1932;         // Changing year
console.log(book.year);   // 1932

try {
  book.year = 1825;
} catch (e) {
  console.log(e);   // RangeError: Invalid year
}

try {
  let book2 = new Book('A Tale of Two Cities', 'Charles Dickents', 1859);
} catch (e) {
  console.log(e);   // RangeError: Invalid year
}


(function tests(){

})()