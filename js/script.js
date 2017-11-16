var about = document.querySelector('#about-us');
var writeUsForm = document.querySelector('.write-us-popup');
var smallMap = document.querySelector('.map-block');
var map = document.querySelector('.map-popup');

var closeForm = writeUsForm.querySelector('.modal-close');
var closeMap = map.querySelector('.modal-close');

about.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUsForm.classList.add('show-modal');
})

closeForm.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUsForm.classList.remove('show-modal');
})

smallMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  map.classList.add('show-modal');
})

closeMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  map.classList.remove('show-modal');
})
