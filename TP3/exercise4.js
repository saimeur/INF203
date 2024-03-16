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

function pauseSlide(){
  if(!pause && isPlaying){
    clearTimeout(timeoutId);
    pause=true;
    isPlaying = false;
  }
  else{
    pause=false;
    isPlaying = true;
    playSlideshow();
  }
}

function nextSlide(){
  pause = true;
  isPlaying = false;
  if(freshload){
    showSlide(currentSlide);
  }
  else if(currentSlide < slides.length-1){
    clearTimeout(timeoutId);
    currentSlide++;
    showSlide(currentSlide);
  }
}

function previousSlide(){
  pause = true;
  isPlaying = false;
  if(!freshload && currentSlide > 0){
    clearTimeout(timeoutId);
    currentSlide--;
    showSlide(currentSlide);
  }
}

// Load the slides when the script is loaded
loadSlides();