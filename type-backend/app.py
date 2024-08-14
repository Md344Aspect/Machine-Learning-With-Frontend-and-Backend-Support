## init flask and server
from flask import Flask, request, jsonify
import joblib as jl
import numpy as n

app = Flask(__name__)

# loading rfc model classification
model = jl.load('model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    ## feats 👇
    data = request.json
    ## get feats from req request and make a reshaped 1, -1 array using numpy(defined in imports) 👇 
    features = n.array(data['features']).reshape(1, -1)
    ## after the array is done its used in the rfc classification for the prediction 👇
    prediction = model.predict(features)
    ## getting first index of the prediction from the rfc classification 👇
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    ## active
    app.run(debug=True)
