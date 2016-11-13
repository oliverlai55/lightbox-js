// Set Picture object, put functions inside the object, add display true or false boolean
var pictureClass = document.getElementsByClassName('picture');
var displayPicClass = document.getElementsByClassName('display-pic')[0];
var lightBoxClass = document.getElementsByClassName('lightbox-wrapper')[0];
var pictureCollecction = document.getElementsByClassName('picture-collection')[0];
var initialPic = pictureClass[0].getAttribute('src');
var currentPic;
var nextPic;
var prevPic;
var pictureArray = [];

function expand() {
    displayPicClass.classList.add('expand');
    document.getElementById('close-icon').style.display = "inline";
    lightBoxClass.classList.add('expand-box');
    pictureCollecction.classList.remove('display-none');
}

function closePic() {
  document.getElementsByClassName('expand')[0].classList.remove('expand');
  lightBoxClass.classList.remove('expand-box');
  document.getElementById('close-icon').style.display = "none";
}

function loadInitialPic() {
  console.log(displayPicClass);
  for (var i = 0; i < pictureClass.length; i++) {
    pictureArray.push(pictureClass[i].getAttribute('src'));
  }

    displayPicClass.setAttribute('src', initialPic);
}

function loadNextPic() {
  currentPic = displayPicClass.getAttribute('src');

  for (var i = 0; i < pictureArray.length; i++) {
    if (pictureArray[i] == currentPic) {
      nextPic = pictureArray[i+1];
      displayPicClass.setAttribute('src', nextPic);

      if (i == (pictureArray.length - 1)) {
        nextPic = pictureArray[0]
        displayPicClass.setAttribute('src', nextPic);
      }
    }
  }
}

function loadPrevPic() {
  currentPic = displayPicClass.getAttribute('src');
  for (var i = 0; i < pictureArray.length; i++) {
    if (pictureArray[i] == currentPic) {
      prevPic = pictureArray[i-1];
      displayPicClass.setAttribute('src', prevPic);

      if (i == 0) {
        prevPic = pictureArray[pictureArray.length - 1];
        displayPicClass.setAttribute('src', prevPic);
      }
    }
  }
}



// for (var i = 0; i < pictureClass.length; i++) {
//   // var position = pictureClass[i]
//   pictureClass[i].addEventListener('click', function(position) {
//     //change position to event
//     debugger;
//     // console.log(position.target.id);
//     var pictureId = position.target.id;
//     document.getElementById(pictureId).classList.add('expand');
//     // console.log(document.getElementById(pictureId).classList);
//     document.getElementById('close-icon').style.display = "inline";
//   });
// }
