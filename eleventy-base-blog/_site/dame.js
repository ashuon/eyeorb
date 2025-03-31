
function AudioInst() {
var audio = document.createElement("audio");
        audio.src = "https://files.catbox.moe/g7c417.WAV";
        audio.play();      
        type="module";
}

var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  type="module";
}