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

for (var i = 0; i < pictureClass.length; i++) {
  // var position = pictureClass[i]
  pictureClass[i].addEventListener('click', function(position) {
    //change position to event
    debugger;
    // console.log(position.target.id);
    var pictureId = position.target.id;
    document.getElementById(pictureId).classList.add('expand');
    console.log(document.getElementById(pictureId).classList);
    document.getElementById('close-icon').style.display = "inline";
  });
}
