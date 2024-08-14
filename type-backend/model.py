from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
## Proccess Ensembling using RFC / RandomForestClassification
from sklearn.ensemble import RandomForestClassifier
import joblib as jl

# Prep Data for Return and Prediction
data = load_iris()
X, y = data.data, data.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Training Proccess // Change Model if needed
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save ML Model in a pkl extensions using joblib
jl.dump(model, 'model.pkl')

## Simple RFC Model Prediction
## Change if needed Since rfc might not be as good for sertant needs or predictions
