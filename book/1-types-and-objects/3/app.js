class album {
  constructor({title, artist, releaseYear}){
    this.title = title;
    this.artist = artist;
    this.releaseYear = releaseYear;
  }
}

const album1 = new album({title: "thriller", artist: "michael jackson", releaseYear: 1982});
const album2 = new album({title: "The Dark Side of the Moon", artist: "Pink Floyd", releaseYear: 1973});

console.log(album1);
console.log(album2);