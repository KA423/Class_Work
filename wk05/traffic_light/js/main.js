$('#stopLight').click(illuminateRed);
$('#slowLight').click(illuminateYellow);
$('#goLight').click(illuminateGreen);
$('#traffic-light').click(allAtOnce);

function illuminateRed() {
  clearLights();
  $('#stopButton').css("backgroundColor", "red");
}

function illuminateYellow() {
  clearLights();
  $('#slowButton').css("backgroundColor", "yellow");
}

function illuminateGreen() {
  clearLights();
  $('#goButton').css("backgroundColor", "green");
}

function clearLights() {
  $('#stopButton').css("backgroundColor", "grey");
  $('#slowButton').css("backgroundColor", "grey");
  $('#goButton').css("backgroundColor", "grey");
}

function allAtOnce() {
  illuminateRed();
  illuminateGreen();
  illuminateYellow(); 

}
