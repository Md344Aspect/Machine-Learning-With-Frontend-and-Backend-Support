// inits
import React, { useState } from 'react';
import './app.css';

// redifine shit if u want to // alot of ass code below that is not optimized 😭, will fix in future probs

// see?? function App() is crazy, dont care, tho continue
function App() {
  const [features, setFeatures] = useState([0, 0, 0, 0]);
  const [prediction, setPrediction] = useState(null);
  // all prediction and classification ends here

  // as one example is useState(null); 😔, code is better down below

  const handleChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = parseFloat(value);
    setFeatures(newFeatures);
  };

  // changes

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ features })
    });
    const data = await response.json();
    setPrediction(data.prediction);
  };

  // handles request from URL << ?? change url if u are using a web service host

  return (
    <div className="App">
    // fire h1 design am i right 🔥
      <h1><< Prediction >></h1>
      <div>
    // feats map
        {features.map((feature, index) => (
          <input
            key={index}
            type="number"
            value={feature}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
        <button onClick={handleSubmit}>Predict</button>
      </div>
  // checks 😊
      {prediction !== null && <p>Prediction: {prediction}</p>}
    </div>
  );
}

// the frontend is act here but inits are up there, feel free to change and add more since it isnt good

export default App;
// ext def app
