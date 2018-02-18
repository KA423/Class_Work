console.log('connected')
$('#deposit').click(function(event) {
  event.preventDefault();
  var amount = Number($('#amount').val())
  var balance = Number($('#balance').text())
  var total = amount + balance;
  $('#balance').text(total)
})
$('#withdraw').click(function(event) {
  event.preventDefault();
  var amount = Number($('#amount').val())
  var balance = Number($('#balance').text())
  var total = balance - amount;
  $('#balance').text(total)
})
