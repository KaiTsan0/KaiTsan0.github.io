// scripts.js

document.addEventListener('mousemove', (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

    // Calculate the background position based on mouse position
    const backgroundX = (mouseX / windowWidth - 0.5) * 1; // Adjust the multiplier for effect strength
    const backgroundY = (mouseY / windowHeight - 0.5) * 5; // Adjust the multiplier for vertical movement

    // Apply the calculated values to background position
    document.body.style.backgroundPosition = `${50 + backgroundX}% ${50 + backgroundY}%`;
});


document.addEventListener('DOMContentLoaded', () => {
  const navbarLinks = document.querySelectorAll('.navbar a');

  navbarLinks.forEach(link => {
    link.addEventListener('click',   
 (event) => {
      if (!link.href.endsWith('.html')) {
        event.preventDefault(); // Prevent default behavior for links with .html extension
      }

      // Check if the clicked link is within a dropdown
      if (link.closest('.dropdown-content')) {
        const sectionId = link.getAttribute('href').substring(1); // Get section ID from href attribute
        const targetSection = document.getElementById(sectionId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'   

          });
        }
      } else {
        // Handle regular navigation links as before
        const sectionId = link.getAttribute('href').substring(1); // Get section ID from href attribute
        const targetSection = document.getElementById(sectionId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'   		

          });
        }
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const imageThumbnails = document.querySelectorAll('.image-thumbnails img');
  const enlargedImageContainer = document.createElement('div');
  const enlargedImage = document.createElement('img');
  const closeButton = document.createElement('span');
  const captionText = document.createElement('span'); // New element for caption

  enlargedImageContainer.classList.add('enlarged-image');
  closeButton.classList.add('close-button');
  closeButton.textContent = '×';
  captionText.classList.add('caption-text'); // Add a class for styling

  enlargedImageContainer.appendChild(enlargedImage);
  enlargedImageContainer.appendChild(closeButton);
  enlargedImageContainer.appendChild(captionText); // Append caption text

  document.body.appendChild(enlargedImageContainer);

  imageThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (event) => {
      event.preventDefault();
      enlargedImage.src = thumbnail.src;
      captionText.textContent = thumbnail.alt; // Set caption text to alt attribute
      enlargedImageContainer.style.display = 'flex';
    });
  });

  closeButton.addEventListener('click', () => {
    enlargedImageContainer.style.display = 'none';
  });

  // Close on background click
  document.addEventListener('click', (event) => {
    if (event.target === enlargedImageContainer) {
      enlargedImageContainer.style.display = 'none';
    }
  });
});
