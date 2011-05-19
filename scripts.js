$(function() {
  var apiKey = '6668183b6463566fd71489c899a80d33';
  var photoSet = '346406'; // http://www.flickr.com/photos/michael_hughes/sets/346406/
  
  $.getJSON('http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&api_key=' + apiKey + '&photoset_id=' + photoSet + '&jsoncallback=?',
  function(data) {
    $.each(data.photoset.photo, function(i, p) {
      var url = 'http://farm' + p.farm + '.static.flickr.com/' + p.server + '/' + p.id + '_' + p.secret + '_m.jpg';
      var photo = '<img src="' + url + '">';
      $(photo).appendTo('#slideshow');
    });
    $('#slideshow').cycle({ fx: 'fade' });
  });
});