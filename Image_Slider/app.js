// Array of image URLs
const imageUrls = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
  // Add more image URLs here if needed
];

// Get the container element where the images will be displayed
const sliderContainer = document.createElement('div');
sliderContainer.classList.add('slider-container');
document.body.appendChild(sliderContainer);

// Create an image element and set its source to the first image in the array
const imageElement = document.createElement('img');
imageElement.src = imageUrls[0];
sliderContainer.appendChild(imageElement);

// Set initial image index
let currentImageIndex = 0;

// Function to change the image to the next one
function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  imageElement.src = imageUrls[currentImageIndex];
}

// Function to change the image to the previous one
function showPreviousImage() {
  currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
  imageElement.src = imageUrls[currentImageIndex];
}

// Create navigation buttons
const prevButton = document.createElement('button');
prevButton.textContent = 'Previous';
prevButton.addEventListener('click', showPreviousImage);
sliderContainer.appendChild(prevButton);

const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.addEventListener('click', showNextImage);
sliderContainer.appendChild(nextButton);

// Set CSS styles for the container and image
const styles = `
  .slider-container {
    position: relative;
    width: 500px;
    height: 300px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    background-color: #ccc;
    border: none;
    cursor: pointer;
  }
`;

// Create a style element and append the CSS styles
const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);
