// scripts.js

// awesome moving background script

document.addEventListener('mousemove', (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

    // Calculate the background position based on mouse position
    const backgroundX = (mouseX / windowWidth - 0.5) * 1; 
    const backgroundY = (mouseY / windowHeight - 0.5) * 5; 

    // Apply the calculated values to background position
    document.body.style.backgroundPosition = `${50 + backgroundX}% ${50 + backgroundY}%`;
});

// epic scrolling script

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
        const sectionId = link.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(sectionId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'   

          });
        }
      } else {
        const sectionId = link.getAttribute('href').substring(1);
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

// Image enlargement script

document.addEventListener('DOMContentLoaded', () => {
  const imageThumbnails = document.querySelectorAll('.image-thumbnails img');
  const enlargedImageContainer = document.createElement('div');
  const enlargedImage = document.createElement('img');
  const closeButton = document.createElement('span');
  const captionText = document.createElement('span'); 

  enlargedImageContainer.classList.add('enlarged-image');
  closeButton.classList.add('close-button');
  closeButton.textContent = '×';
  captionText.classList.add('caption-text'); 

  enlargedImageContainer.appendChild(enlargedImage);
  enlargedImageContainer.appendChild(closeButton);
  enlargedImageContainer.appendChild(captionText); 

  document.body.appendChild(enlargedImageContainer);

  imageThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (event) => {
      event.preventDefault();
      enlargedImage.src = thumbnail.src;
      captionText.textContent = thumbnail.alt; 
      enlargedImageContainer.style.display = 'flex';
    });
  });

	// Close on background exit button
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
