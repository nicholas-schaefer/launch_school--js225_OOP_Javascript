class Book {
  constructor ({title, author, publicationYear}) {
    this.title = title,
    this.author = author,
    this.publicationYear = publicationYear
  }
}


const book1 = new Book({title: 'Neuromancer', author: 'William Gibson', publicationYear: 1984});
console.log(book1)