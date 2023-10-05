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
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

fetch(breedUrl)
  .then(response => response.json()) 
  .then(data => {
    let breeds = Object.keys(data.message); // Get the breeds from the API response
    breeds.forEach(breed => {
      let listItem = document.createElement('li'); // Create a <li> element
      listItem.innerText = breed; // Set the inner text to the breed name
      document.getElementById('dog-breeds').appendChild(listItem); // Append the breed to the <ul>
    });
  });
  document.getElementById('dog-breeds').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      event.target.style.color = 'red'; // Change color of clicked list item
    }
  });
  document.getElementById('breed-dropdown').addEventListener('change', function(event) {
    let selectedLetter = event.target.value;
    let breedList = document.getElementById('dog-breeds');
    
    // Clear the current list
    breedList.innerHTML = '';
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        let breeds = Object.keys(data.message); 
        let filteredBreeds = breeds.filter(breed => breed.startsWith(selectedLetter)); // Filter breeds by selected letter
        
        filteredBreeds.forEach(breed => {
          let listItem = document.createElement('li'); 
          listItem.innerText = breed; 
          breedList.appendChild(listItem);
        });
      });
  });
  