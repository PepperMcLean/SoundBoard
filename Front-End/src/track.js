class Track {
  constructor(track) {
    this.id = track.id;
    this.title = track.title;
    this.reference = track.reference;
    allTracks.push(this);
  }

  static allTracks = []

  static fetchTracks(){
    fetch("http://localhost:3000/tracks")
    .then(resp => resp.json())
    .then(console.log)
  }

  static createTracks(tracks){
    for (let t of tracks){
      new Track(t);
    }
  }
}