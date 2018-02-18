// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;
//
// function switchGray() {
//   document.body.style.backgroundColor = 'gray';
//  document.body.style.color = 'white';
// }
//
// function switchWhite() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black';
// }

console.log('connected')
$('#grayButton').click(function() {
  $('body').css("background-color", "gray")
  $('h1').css("color","white")
  $('p').css("color","white")
})
$('#whiteButton').click(function() {
  $('body').css("background-color", "white")
  $('h1').css("color","black")
  $('p').css("color","black")
})
