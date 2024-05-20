// Create lightbox element.
const lightbox = document.createElement('div')
// Assign lightbox ID in order to easily select it in CSS.
// Check the name in CSS before assign name to ID in here.
lightbox.id = 'lightbox'
// Configure the lightbox to append of the child.
document.body.appendChild(lightbox)

// Select all image on an entire webpage.
const images = document.querySelectorAll('img')
// Start to loop throught each images.
images.forEach(image => {
    // Start to add event listener to the lightbox when user start to 
    // click on an image..
    image.addEventListener('click', e => {
        // Active the lightbox when user click on an image.
        lightbox.classList.add('active')
        // Add image to the lightbox.
        const img = document.createElement('img')
        // Set image that popup on lightbox same as an image click on webpage.
        img.src = image.src
        // Check if there is an existing lightbox child that has been preview
        // then remove it first before preview an image.
        // This prevent duplication of view an image.
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        // Append an image to the lightbox.
        lightbox.appendChild(img)
    })
})

// Remove the lightbox when user click outside the preview image.
lightbox.addEventListener('click', e => {
    // Check if we click on an image, then the preview image still show.
    if (e.target !== e.currentTarget) return
    // Otherwise remove preview image if user click outside the preview image.
    lightbox.classList.remove('active')
})