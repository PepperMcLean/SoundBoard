const loginForm = document.getElementById('hiddenLogin')

function getUserLoginInfo(){
  console.log(document.getElementById("username").value)
  loginForm.hidden = true
}