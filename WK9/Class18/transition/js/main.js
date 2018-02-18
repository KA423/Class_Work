$(document).ready(function() {
  console.log('page loaded')
  $('.left').click(function(event){
    event.preventDefault()
    $('img').eq(0).toggleClass('img-moved-left')
  })
})
