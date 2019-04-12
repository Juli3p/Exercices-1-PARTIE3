var images = document.getElementsByTagName('img');
for (var i=0; i<images.length; i++){
    images[i].addEventlistener('mouseover',addImageBorders);
    images[i].addEventlistener('mouseout',removeImageBorders);
}
function addImageBorders(image) {
  image=image.target;
  image.style.border='3px solid black';
}
function removeImageBorders(image) {
  image=image.target;
  image.style.border='0px';
}
