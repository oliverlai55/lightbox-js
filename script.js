// Set Picture object, put functions inside the object, add display true or false boolean

// pic = {
//   alert = function() {
//     alert("yep");
//   }
// }

function expand() {
  console.log('fire off');
  console.log(displayPicClass);
//nneed to add attribute to the class, add "expand"
    
    displayPicClass.setAttribute('style', 'height: 300px; width: 500px;');
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
  var displayPicClass = document.getElementsByClassName('display-pic')[0]
  var initialPic = pictureClass[0].getAttribute('src')
  var currentPic;
  var nextPic;
  var prevPic;
  var pictureArray = [];

//The initial function that loads the [0] pic
function loadInitialPic() {
  console.log(displayPicClass);
  for (var i = 0; i < pictureClass.length; i++) {
    pictureArray.push(pictureClass[i].getAttribute('src'));
  }

    displayPicClass.setAttribute('src', initialPic);
}


//Need to right a function that scrolls to the next index + 1 pic
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
