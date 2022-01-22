class Track{
  constructor(track) {

  }

  static fetchTracks(){
    const response = await fetch("http://localhost:3000/tracks")
    console.log(response)
  }
}