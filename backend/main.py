from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from PIL import Image
import io
import numpy as np
import joblib

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

def load_model():
    model = joblib.load('trained_model.pkl')
    return model

model = load_model()

# Function to preprocess the image
def preprocess_image(image: Image.Image):
    image = image.resize((128, 128))  # Resize image
    image_np = np.array(image).flatten()  # Flatten the image
    return image_np

# Function to make a prediction
def predict(image_array):
    prediction = model.predict([image_array])
    return prediction[0]

@app.post('/predict/')
async def predict_image(file: UploadFile = File(...)):
    contents = await file.read()
    key = {
        0: 'Mildly Demented',
        1: 'Moderately Demented',
        2: 'Non Demented',
        3: 'Very Mildly Demented'
    }
    image = Image.open(io.BytesIO(contents)).convert('L')
    image_array = preprocess_image(image)
    prediction = predict(image_array).tolist()
    temp = float('-inf')
    rank = None
    for i, e in enumerate(prediction):
        if float(e) > temp:
            temp = e
            rank = i
    return {'prediction': key[rank]}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8000)
