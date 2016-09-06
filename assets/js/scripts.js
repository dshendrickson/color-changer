
function getRandomColor() {
  var color = '#FFFFFF';
  while (color === '#FFFFFF') {
    color = generateRandomColor();
  }
  return color;
};

// http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};

//*** Events ***//

$('.btn-random').on('click', function () {
  var color = getRandomColor();
  $('.container').css('background', color);
});

$('.btn-reset').on('click', function () {
  $('.container').css('background', '#FFFFFF');
})
