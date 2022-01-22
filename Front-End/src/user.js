class User {

  constructor(user){
    this.name = user
    User.currentUser = this
  }

  static currentUser = ''
  
}

