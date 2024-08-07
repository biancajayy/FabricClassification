let randomIndex = 1;
let chosenImageIndex = 0;

function changeImage() {
    var images = document.getElementById('testimages');
    let numImages = 29;
    randomIndex = Math.floor(Math.random() * numImages) + 1;  // Ensure the random index is between 1 and 30
    images.src = `static/test_images/testimage${randomIndex}.jpg`;
    document.getElementById('identifyFabricButton').style.display = 'none';
    document.getElementById('Classification').style.display = 'none';
    document.getElementById('Accuracy').style.display = 'none';
}

function chooseImage() {
    chosenImageIndex = randomIndex;
    document.getElementById('identifyFabricButton').style.display = 'inline-block';
    document.getElementById('Classification').style.display = 'none';
    document.getElementById('Accuracy').style.display = 'none';
    //console.log(chosenImageIndex);
}

async function identifyFabric() {
    const response = await fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_name: `testimage${chosenImageIndex}.jpg`
        }),
    });

    // update text content of category and accuracy
    const result = await response.json();
    document.getElementById('Classification').style.display = 'block';
    document.getElementById('Accuracy').style.display = 'block';
    document.getElementById('Classification').textContent = `Fabric: ${result.category}`;
    document.getElementById('Accuracy').textContent = `Accuracy: ${result.accuracy.toFixed(2)}%`;
}