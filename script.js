// Set Picture object, put functions inside the object, add display true or false boolean

// pic = {
//   alert = function() {
//     alert("yep");
//   }
// }

function expand() {
  console.log('fire off');

    document.getElementById('pic1').setAttribute('id', 'overlay-pic');
    document.getElementById('close-icon').style.display = "inline";

  // document.getElementById('id').innerHTML = 'yo';
}

function closePic() {
  document.getElementsByClassName('expand')[0].classList.remove('expand');
  document.getElementById('close-icon').style.display = "none";
}
// 1. Add attribute to selected picture
//look into .setAttribute('')
// 2. make that picture expand in width with black div blackground
// document.getElementById('pic1').addEventListener('click', function() {
//   console.log(document.getElementsByClassName('picture'));


  var pictureClass = document.getElementsByClassName('picture')
  var initialPic = pictureClass[0].getAttribute('src')
  var currentPic;
  var nextPic;
  var prevPic;
  var pictureArray = [];

//The initial function that loads the [0] pic
function loadInitialPic() {
  for (var i = 0; i < pictureClass.length; i++) {
    pictureArray.push(pictureClass[i].getAttribute('src'));
  }

  document.getElementById('display-pic').setAttribute('src', initialPic);
}


//Need to right a function that scrolls to the next index + 1 pic
function loadNextPic() {
  currentPic = document.getElementById('display-pic').getAttribute('src');

  for (var i = 0; i < pictureArray.length; i++) {
    if (pictureArray[i] == currentPic) {
      nextPic = pictureArray[i+1];
      document.getElementById('display-pic').setAttribute('src', nextPic);

      if (i == (pictureArray.length - 1)) {
        nextPic = pictureArray[0]
        document.getElementById('display-pic').setAttribute('src', nextPic);
      }
    }
  }
}

function loadPrevPic() {
  currentPic = document.getElementById('display-pic').getAttribute('src');
  for (var i = 0; i < pictureArray.length; i++) {
    if (pictureArray[i] == currentPic) {
      prevPic = pictureArray[i-1];
      document.getElementById('display-pic').setAttribute('src', prevPic);

      if (i == 0) {
        prevPic = pictureArray[pictureArray.length - 1];
        document.getElementById('display-pic').setAttribute('src', prevPic);
      }
    }
  }
}



for (var i = 0; i < pictureClass.length; i++) {
  // var position = pictureClass[i]
  pictureClass[i].addEventListener('click', function(position) {
    //change position to event
    debugger;
    // console.log(position.target.id);
    var pictureId = position.target.id;
    document.getElementById(pictureId).classList.add('expand');
    // console.log(document.getElementById(pictureId).classList);
    document.getElementById('close-icon').style.display = "inline";
  });
}
