class Song {
  constructor(data) {
    this.title = data[0];
    this.artist = data[1];
    this.active_tracks = data[2];
  }

  static showSongForm(){
    const songForm = document.getElementById('hiddenSong');
    songForm.hidden = false;
  }

  static createSong() {
    let songLengthCheck = document.getElementById("songTitle").value;
    if ((songLengthCheck.length <= 3) || (Track.activeTracks().length < 2)){
      alert("Please enter a song title four letters or longer with at least two tracks.");
    } else {
      let data = [songLengthCheck, User.currentUser.name, Track.activeTracks()];
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
}