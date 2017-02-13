var button = document.getElementById('button');
var body = document.getElementById('home');

button.addEventListener('click', function(event) {
  console.log('click');
  
  if(body.className === 'go') {
    body.className = '';
    button.innerHTML = 'START';
  } else {
    body.className = 'go';
    button.innerHTML = 'STOP';
  }
});