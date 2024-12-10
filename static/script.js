let randomIndex = 1;
let chosenImageIndex = 0;

function changeImage() {
    console.log("Change Image button clicked");
    const images = document.getElementById('testimages');

    const numImages = 29; // Total number of images
    randomIndex = Math.floor(Math.random() * numImages) + 1;  // Random index between 1 and numImages
    console.log(`Random image index: ${randomIndex}`);
    images.src = `static/test_images/testimage${randomIndex}.jpg`; // Update image
    document.getElementById('identifyFabricButton').style.display = 'none';
    document.getElementById('Classification').style.display = 'none';
    document.getElementById('Accuracy').style.display = 'none';
}

function chooseImage() {
    console.log("Choose Image button clicked");
    chosenImageIndex = randomIndex; // Save the selected image index
    document.getElementById('identifyFabricButton').style.display = 'inline-block'; // Show the identify button
    document.getElementById('Classification').style.display = 'none';
    document.getElementById('Accuracy').style.display = 'none';
}

async function identifyFabric() {
    console.log("Identify Fabric button clicked");

    // Simulated response (replace this with real backend integration later)
    const simulatedResults = [
        { category: "Denim", accuracy: 90.1 },
        { category: "Polyester", accuracy: 95.3 },
        { category: "Linen", accuracy: 89.7 }
    ];

    // Simulate fabric classification (choose a random result)
    const result = simulatedResults[Math.floor(Math.random() * simulatedResults.length)];

    // Update the DOM with classification results
    document.getElementById('Classification').style.display = 'block';
    document.getElementById('Accuracy').style.display = 'block';
    document.getElementById('Classification').textContent = `Fabric: ${result.category}`;
    document.getElementById('Accuracy').textContent = `Accuracy: ${result.accuracy.toFixed(2)}%`;

    console.log(`Fabric: ${result.category}, Accuracy: ${result.accuracy.toFixed(2)}%`);
}


// let randomIndex = 1;
// let chosenImageIndex = 0;

// function changeImage() {
//     var images = document.getElementById('testimages');

//     // TODO: don't hard code this number
//     let numImages = 29;
    
//     randomIndex = Math.floor(Math.random() * numImages) + 1;  // Ensure the random index is between 1 and 30
//     images.src = `static/test_images/testimage${randomIndex}.jpg`;
//     document.getElementById('identifyFabricButton').style.display = 'none';
//     document.getElementById('Classification').style.display = 'none';
//     document.getElementById('Accuracy').style.display = 'none';
// }

// function chooseImage() {
//     chosenImageIndex = randomIndex;
//     document.getElementById('identifyFabricButton').style.display = 'inline-block';
//     document.getElementById('Classification').style.display = 'none';
//     document.getElementById('Accuracy').style.display = 'none';
//     //console.log(chosenImageIndex);
// }

// async function identifyFabric() {
//     const response = await fetch('/predict', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             image_name: `testimage${chosenImageIndex}.jpg`
//         }),
//     });

//     // update text content of category and accuracy
//     const result = await response.json();

//     document.getElementById('Classification').style.display = 'block';
//     document.getElementById('Accuracy').style.display = 'block';
//     document.getElementById('Classification').textContent = `Fabric: ${result.category}`;
//     document.getElementById('Accuracy').textContent = `Accuracy: ${result.accuracy.toFixed(2)}%`;
// }
