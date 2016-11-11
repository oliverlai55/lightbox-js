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




//The initial function that loads the [0] pic
function loadInitialPic() {
  var pictureClass = document.getElementsByClassName('picture')
  var initialPic = pictureClass[0].getAttribute('src')
  document.getElementById('display-pic').setAttribute('src', initialPic);
}


//Need to right a function that scrolls to the next index + 1 pic


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
