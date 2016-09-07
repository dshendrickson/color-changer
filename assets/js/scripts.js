
//*** General Functions ***//

function defaultColor() {
  var color ='#FFFFFF';
  return color;
};

function getRandomColor() {
  var color = defaultColor();
  while (color === defaultColor()) {
    color = generateRandomColor();
  }
  return color;
};

//* Ref: http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};

function setBackgroundColor(color) {
    return $('html').css('background', color);
};

//*** Event Functions ***//

$('.btn-random').on('click', function () {
  var color = getRandomColor();
  setBackgroundColor(color);
});

$('.btn-reset').on('click', function () {
  var color = defaultColor();
  setBackgroundColor(color);
});
