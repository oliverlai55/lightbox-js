// Set Picture object, put functions inside the object, add display true or false boolean
var pictureClass = document.getElementsByClassName('picture');
var displayPicClass = document.getElementsByClassName('display-pic')[0];
var lightBoxClass = document.getElementsByClassName('lightbox-wrapper')[0];
var pictureCollecction = document.getElementsByClassName('picture-collection')[0];
var carouselPics = document.getElementsByClassName('carousel-pics');
var initialPic = pictureClass[0].getAttribute('src');
var currentPic;
var nextPic;
var prevPic;
var pictureArray = [];
var carouselArray = [];

function expand() {
    displayPicClass.classList.add('expand');
    document.getElementById('close-icon').style.display = "inline";
    lightBoxClass.classList.add('expand-box');
    // pictureCollecction.classList.remove('display-none');

    carouselPics[0].setAttribute('src', pictureArray[pictureArray.length - 1]);
    carouselPics[1].setAttribute('src', initialPic);
    carouselPics[2].setAttribute('src', pictureArray[1]);

}

function closePic() {
  document.getElementsByClassName('expand')[0].classList.remove('expand');
  lightBoxClass.classList.remove('expand-box');
  document.getElementById('close-icon').style.display = "none";
  pictureCollecction.classList.add('display-none');
}

function loadInitialPic() {
  for (var i = 0; i < pictureClass.length; i++) {
    pictureArray.push(pictureClass[i].getAttribute('src'));
  }

    displayPicClass.setAttribute('src', initialPic);
}

//Try making the DOM of carousel pic render all pictures, but only have the first 3
//display , the others are display none
// Have a counter??
function loadNextPic() {
  currentPic = displayPicClass.getAttribute('src');

  for (var i = 0; i < pictureArray.length; i++) {
    if (pictureArray[i] == currentPic) {
      nextPic = pictureArray[i+1];
      displayPicClass.setAttribute('src', nextPic);
      carouselPics[0].setAttribute('src', pictureArray[i]);
      carouselPics[1].setAttribute('src', nextPic);
      carouselPics[2].setAttribute('src', pictureArray[i+2]);

      //
      if (i == (pictureArray.length - 2)) {
        console.log('2ndtolast');
        carouselPics[2].setAttribute('src', pictureArray[0]);
      }

      if (i == (pictureArray.length - 1)) {
        console.log('last');
        nextPic = pictureArray[0]
        displayPicClass.setAttribute('src', nextPic);
        carouselPics[0].setAttribute('src', pictureArray[pictureArray.length - 1]);
        carouselPics[1].setAttribute('src', nextPic);
        carouselPics[2].setAttribute('src', pictureArray[1])

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
      carouselPics[0]


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
