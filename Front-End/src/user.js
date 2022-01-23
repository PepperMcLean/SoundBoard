class User {

  constructor(user){
    this.name = user
    User.currentUser = this
  }

  static currentUser = ''

  static fetchTracks(){
    fetch("http://localhost:3000/tracks")
    .then(resp => resp.json())
    .then(console.log)
  }
  
}

