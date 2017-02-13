var button = document.getElementById('button');
var image = document.getElementById('image');

button.addEventListener('click', function(event) {
  console.log('click');
  
  if(image.className === 'go') {
    image.className = '';
    button.innerHTML = 'GO';
  } else {
    image.className = 'go';
    button.innerHTML = 'X';
  }
});