# Fabric Classification

Fabric Classification is a web application that utilizes a CNN to classify a piece of cloth as denim, linen, or polyester. The model used is a Tensorflow Keras Sequental Model. The front end is written in HTML and JavaScript, and the backend is run on flask. 

## Motivation

One of the hardest parts of recycling clothing is identifying the fabric used to make the garment. With fast fashion becoming a bigger problem, efficient fabric classification tools have become extremely necessary. This is a simplified version of a Fabric Classification program. Given an image of cloth, this tool can identify whether the fabric is denim, polyester, or linen.

## Features

- Displays random fabric images from a predefined set of test images.
- Allows users to choose an image for classification.
- Predicts the fabric type and displays the result with accuracy.

## Requirements

- Python 3.10
- TensorFlow 2.17.0
- Flask
- Pillow (image processing)
- NumPy (numerical operations)

## Installation


1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/fabric-classification.git
   ```
2. **Go into the repository:**
 ```bash
   cd fabric-classification
   ```
3. **Run the app:**

```bash
   # Depending on how Flask is set up on your device, the app can be run with one of these two commands.
   # Method 1:
   flask --app app run

   # Method 2:
   python3 -m flask --app app run
```
4. **Contributors:**
Bianca Jayaraman




   




   
