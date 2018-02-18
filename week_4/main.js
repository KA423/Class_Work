console.log('connected');
var minTemp = 21;
var maxTemp = 24;
var currentTemp = prompt("What is the current temperature?");
while (currentTemp !== 'quit') {
  currentTemp = Number(currentTemp);
  if (currentTemp >= maxTemp){
    console.log('Turn on AC');
  } else if (currentTemp <= minTemp){
    console.log('Turn on heater');
  } else {
    console.log ('Temp is perfect');
  }
  var currentTemp = prompt("What is the current temperature?");
}
