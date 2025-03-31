var index = 0;
var imageList = ['images/ayanas.png', 'images/elmaicon.png', 'images/claraicon.png'];

function changeImage() {
  index = index + 1;
  if (index == imageList.length) {
     index = 0;
  }
  var image1 = document.getElementById("myImage");
  image1.src = imageList[index];
}