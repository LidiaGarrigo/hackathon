var audio = document.getElementById("reproductor"); 

function playAudio() { 
    audio.play(); 
} 

function pauseAudio() { 
    audio.pause(); 
    alert('Has pausado');
} 

function loadAudio() { 
    audio.load(); 
} 

function enableMute() { 
    audio.muted = true;
    
  } 
  
  function disableMute() { 
    audio.muted = false;
  }

  function volumeUp() { 
    audio.volume += 0.2;
  } 
    
  function volumeDown() { 
    audio.volume -= 0.2;
  } 

  function timeUp() { 
    audio.currentTime+=5;
  } 

  function timeDown() { 
    audio.currentTime-=5;
  } 