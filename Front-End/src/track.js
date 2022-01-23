class Track {
  constructor(track) {
    this.id = track.id;
    this.title = track.title;
    this.reference = track.reference;
    this.audio = new Audio(track.reference);
    this.audio.loop = true;
    this.currentlyLooping = false;
    Track.allTracks.push(this);
  }

  static allTracks = []

  static fetchTracks(){
    return fetch("http://localhost:3000/tracks")
    .then(resp => resp.json())
    .then(Track.createTracks)
  }

  static createTracks(tracks){
    for (let t of tracks){
      new Track(t);
    }
  }

  static activeTracks(){
    let activeTracks = Track.allTracks.filter(stuff => stuff.currentlyLooping === true);
    return activeTracks;
  }
  
  static createTrackButtons(){
    //let track = Track.allTracks.find(stuff => stuff.id === 1)
    let tracks = Track.allTracks;
    for (let t of tracks){
      let btn = document.createElement("button");
      btn.innerHTML = t.title;
      btn.id = t.id;
      btn.onclick = function playTrack(){
        let track = Track.allTracks.find(stuff => stuff.id === parseInt(this.id));
        if (track.currentlyLooping === false){
          track.audio.play();
          track.currentlyLooping = true;
        } else {
          track.audio.pause();
          track.currentlyLooping = false;
        }
      };
      document.body.appendChild(btn);
    }
  }
}