const loginForm = document.getElementById('hiddenLogin')

function getUserLoginInfo(){
  let usernameCheck = document.getElementById("username").value
  if (usernameCheck.length <= 3){
    alert("Please enter a username four letters or longer.")
  } else {
    new User(usernameCheck)
    loginForm.hidden = true
  }
}