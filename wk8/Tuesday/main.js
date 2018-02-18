$('form').submit(function(event) {
  event.preventDefault();
  var search = $("#search").val();
  $('#movies').empty();

  $.get("http://www.omdbapi.com?apikey=2f6435d9&s=" + search)
    .done(function(data) {
      var movies = data.Search
      movies.forEach(function(movie) {
        var li = $('<li>')
        var heading = $('<h1>').text(movie.Title)
        var img = $('<img>').attr('src', movie.Poster);
        li.append(img, heading)
        $('#movies').append(li);
      })
    })
  })
