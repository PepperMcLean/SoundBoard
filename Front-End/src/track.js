class Track {
  constructor(track) {
    this.id = track.id;
    this.title = track.title;
    this.reference = track.reference;
    this.currentlyLooping = false
    Track.allTracks.push(this);
  }

  static allTracks = []

  static fetchTracks(){
    ("http://localhost:3000/tracks")
    .then(resp => resp.jsfetchon())
    .then(Track.createTracks)
  }

  static createTracks(tracks){
    for (let t of tracks){
      new Track(t);
    }
  }

  static
}