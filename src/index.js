console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

// On page load, fetch dog images
window.addEventListener('DOMContentLoaded', (event) => {
    fetch(imgUrl)
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        data.message.forEach(imageUrl => {
          let imgElement = document.createElement('img'); // Create an <img> element
          imgElement.src = imageUrl; // Set the source to the image URL from the API
          imgElement.width = 150;   // Set width for better display
          document.getElementById('dog-image-container').appendChild(imgElement); // Append the image to the container
        });
      });
});
