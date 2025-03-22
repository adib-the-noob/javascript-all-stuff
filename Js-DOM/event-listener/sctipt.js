document.addEventListener('DOMContentLoaded', function() {
  const myBox = document.getElementById('myBox');
  
  function changeColor(event) {
    // console.log(event);
    event.target.style.backgroundColor = 'red';
    event.target.textContent = 'Clicked';
  }
  
  myBox.addEventListener('click', changeColor);
});

function Warning(event) {
  event.target.style.backgroundColor = 'yellow';
  event.target.textContent = 'Warning! Dont Press!';
}

myBox.addEventListener('mouseover', Warning);