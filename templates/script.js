document.addEventListener('DOMContentLoaded', function() {

    const imagePaths = [
    'test_images/testimage1';
    'test_images/testimage2';
    ];

    function randomizeContent() {
        image.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    }

    button.addEventListener('click', randomizeContent);
});