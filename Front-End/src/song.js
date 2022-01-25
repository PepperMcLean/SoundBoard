class Song {
  constructor(data) {
    this.title = data.title;
    this.artist = data.artist;
    this.active_tracks = data.active_tracks;
    this.id = data.id;
    Song.allSongs.push(this);
  }
  static allSongs = [];

  static showSongForm(){
    const songForm = document.getElementById('hiddenSong');
  }

  static createSong() {
    let songLengthCheck = document.getElementById("songTitle").value;
    if ((songLengthCheck.length <= 3) || (Track.activeTracks().length < 2)){
      alert("Please enter a song title four letters or longer, with at least two tracks.");
    } else {
      let data = {title: songLengthCheck, artist: User.currentUser.name, active_tracks: Track.activeTracks()}
      let test = new Song(data);
      //console.log(test.active_tracks[0].id);
      test.postSong()
    }
  }

  postSong(){
    let data = this;
    fetch("http://localhost:3000/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    });
  }

  static fetchSongs() {
    return fetch("http://localhost:3000/songs")
    .then(resp => resp.json())
    .then(Song.songHash)
  }

  static songHash(hash) {
    let counter = 0;
    let data = {}
    for (let h of hash){
      if (counter % 2 == 0){
        data.title = h.title;
        data.artist = h.artist;
        data.id = h.id;
        counter++
      } else {
        data.active_tracks = h;
        new Song(data);
        counter++
        data = []
      }
    }
  }

  static displaySongs(){
    let sidebarDiv = document.getElementById("sidebar");
    for (let s of Song.allSongs){
      console.log(s.artist)
      let words = document.createElement('div');
      words.id = s.id;
      words.innerHTML = `${s.title} By: ${s.artist} `;
      sidebarDiv.appendChild(words);
      let btn = document.createElement("button");
      btn.id = s.id
      btn.innerHTML = "Play"
      btn.className = "btn btn-outline-primary"
      btn.onclick = function playSong(){
        stopSounds();
        let song = Song.allSongs.find(stuff => stuff.id === parseInt(this.id));
        for (s of song.active_tracks){
          let track = Track.allTracks.find(stuff => stuff.id === parseInt(s.id));
          track.audio.play();
          track.currentlyLooping = true;
        }
      }
      words.appendChild(btn);
    }
  }
}