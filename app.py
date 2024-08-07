from flask import Flask, request, jsonify, render_template
import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import os

app = Flask(__name__)

# Initialization
# Loading in model, init categories, and image specs
model = load_model('fabric_classification.keras')
categories = ['Denim', 'Linen', 'Polyester']
img_height = 200
img_width = 200

# Connect html
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

#Prediction triggered by Identify Button
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    chosen_image = data['image_name']
    image_path = os.path.join('static', 'test_images', chosen_image)

    # Preprocessing selected Image
    image = Image.open(image_path)
    image = image.resize((img_height, img_width))
    img_arr = tf.keras.preprocessing.image.img_to_array(image)
    img_bat = tf.expand_dims(img_arr, 0)

    # Predict Image
    predict = model.predict(img_bat)
    score = tf.nn.softmax(predict)
    predicted_category = categories[np.argmax(score)]
    accuracy = np.max(score) * 100

    return jsonify({
        'category': predicted_category,
        'accuracy': accuracy
    })

if __name__ == '__main__':
    app.run(debug=True)




    

    
    
