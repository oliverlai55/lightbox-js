

function expand() {

  console.log('fire off');

    document.getElementById('pic1').setAttribute('id', 'overlay-pic');
    document.getElementById('close-icon').style.display = "inline";



  // document.getElementById('id').innerHTML = 'yo';
}

function closePic() {
  document.getElementById('overlay-pic').setAttribute('id', 'pic1');
  document.getElementById('close-icon').style.display = "none";
}
// 1. Add attribute to selected picture
// 2. make that picture expand in width with black div blackground
