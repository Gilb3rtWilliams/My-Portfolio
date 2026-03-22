const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed"; // Keep background fixed
    document.body.style.backgroundPosition = "center";

    currentIndex = (currentIndex + 1) % images.length; // Loop back to first image
}

// Change image every 5 seconds
setInterval(changeBackground, 5000);

// Set initial background when the page loads
changeBackground();
