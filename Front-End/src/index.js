const loginForm = document.getElementById('hiddenLogin');

async function getUserLoginInfo(){
  let usernameCheck = document.getElementById("username").value;
  if (usernameCheck.length <= 3){
    alert("Please enter a username four letters or longer.");
  } else {
    new User(usernameCheck);
    await Track.fetchTracks();    
    Track.createTrackButtons();
    await Song.fetchSongs();
    Song.displaySongs();
    console.log("status")
    loginForm.remove();
    const songForm = document.getElementById('hiddenSong');
    songForm.hidden = false;
    const pauseButton = document.getElementById('stopAllSounds');
    pauseButton.hidden = false;
    const sideBarBuffer = document.getElementById('sidebarBuffer');
    sideBarBuffer.hidden = false;
    const sidebar = document.getElementById('sidebar');
    sidebar.hidden = false;
    const trackHeader = document.getElementById('trackButtonHeader');
    trackHeader.hidden = false;
  }
}

function stopSounds() {
  var sounds = Track.activeTracks();
  for (let s of sounds){
    s.audio.pause();
    s.audio.currentTime = 0
    s.currentlyLooping = false;
  }
}