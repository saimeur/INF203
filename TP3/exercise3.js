let slides = [];
let currentSlide = 0;
let isPlaying = false;
let pause = false;
let timeoutId;
let freshload = true;

function loadSlides() {
  fetch('slides.json')
    .then(response => response.json())
    .then(data => {
      slides = data.slides;
    })
    .catch(error => console.error('Error:', error));
}

function playSlideshow() {
  if (currentSlide >= slides.length-1){
    isPlaying = false;
  }
  else if (!pause && isPlaying) {
    timeoutId = setTimeout(() => {
      showSlide(currentSlide+1);
      currentSlide++;
      playSlideshow();
    }, (slides[currentSlide+1].time - slides[currentSlide].time) * 1000);
  }
}

function showSlide(index){
  freshload = false;
  const mainDiv = document.getElementById('MAIN');
  mainDiv.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.src = slides[index].url; 
  iframe.width = '830px'; // Set the width
  iframe.height = '600px'; // Set the heights
  mainDiv.appendChild(iframe);
}

function playButton(){
  if(pause || !isPlaying){
    isPlaying = true;
    pause = false;
    currentSlide=0
    showSlide(currentSlide);
    playSlideshow();
  }
}

// Load the slides when the script is loaded
loadSlides();