
//changing individual properties with code and using setInterval
var rotationSpeed = 0.05;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.x -= rotationSpeed *2;
myOtherBox.object3D.rotation.y -= rotationSpeed *3;
myOtherBox.object3D.rotation.z -= rotationSpeed;
console.log(myOtherBox.object3D.rotation.x);
 }

setInterval(spin, 16); //equivalent to 60 fps