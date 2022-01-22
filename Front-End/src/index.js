const buttonLogin = document.getElementById("login")
const buttonSignup = document.getElementById("signup")
const signupForm = document.getElementById('hiddenSignup')
const loginForm = document.getElementById('hiddenLogin')
const loginSubmit = document.getElementById('')


buttonSignup.addEventListener('click', function(){
  signupForm.hidden = false
  loginForm.hidden = true
  buttonSignup.hidden = true
  buttonLogin.hidden = false
});
buttonLogin.addEventListener('click', function(){
  signupForm.hidden = true
  loginForm.hidden = false
  buttonLogin.hidden = true
  buttonSignup.hidden = false
});