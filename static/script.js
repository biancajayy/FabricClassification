let randomIndex = 1;
let chosenImageIndex = 0;

function changeImage() {
    var images = document.getElementById('testimages');
    let numImages = 29;
    randomIndex = Math.floor(Math.random() * numImages) + 1;  // Ensure the random index is between 1 and 30
    images.src = `static/test_images/testimage${randomIndex}.jpg`;
}

function chooseImage() {
    chosenImageIndex = randomIndex;
    //console.log(chosenImageIndex);
}