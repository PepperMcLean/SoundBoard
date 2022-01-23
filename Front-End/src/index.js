const loginForm = document.getElementById('hiddenLogin');

async function getUserLoginInfo(){
  let usernameCheck = document.getElementById("username").value;
  if (usernameCheck.length <= 3){
    alert("Please enter a username four letters or longer.");
  } else {
    new User(usernameCheck);
    await Track.fetchTracks();    
    Track.createTrackButtons();
    loginForm.hidden = true;
  }
}