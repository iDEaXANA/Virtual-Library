// import the Media class:
const Media = require("./Media");
// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
  static longestMovie(movies) {
    if (movies.length === 0) return null;
    let longestDuration = movies[0];
    for (let i = 1; i < movies.length; i++) {
      if (movies[i].duration > longestDuration.duration) {
        longestDuration = movies[i];
      }
    }
    return longestDuration;
  }
}
// don't change below
module.exports = Movie;
