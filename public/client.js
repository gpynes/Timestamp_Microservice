// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {

  $('form').submit(function(event) {
    event.preventDefault();
    var dream = $('input').val();
    $.get('/' + dream, function(res) {
      console.log('res', res)
      $('<li></li>').text('Natural: ' + res.natural + ' - Unix: ' + res.unix).appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    });
  });

});
