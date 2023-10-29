// import the Media class:
const Media = require("./Media");
// create your Music class:
class Music extends Media {
  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }

  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
  }
  static shortestAlbum(songs) {
    if (songs.length === 0) return null;
    let shortestLength = songs[0];

    for (let i = 1; i < songs.length; i++) {
      if (songs[i].length < shortestLength.length) {
        shortestLength = songs[i];
      }
    }
    return shortestLength;
  }
}
// don't change below
module.exports = Music;
