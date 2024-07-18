document.getElementById('predictButton').addEventListener('click', async () => {
  const imageInput = document.getElementById('imageInput');
  if (imageInput.files.length === 0) {
      alert('Please select an image file first.');
      return;
  }
  
  const imageDisplay = document.getElementById('imageDisplay'); // Ensure you have an <img id="imageDisplay"> in your HTML
  const reader = new FileReader();
  reader.onload = function(e) {
    imageDisplay.src = e.target.result;
  };

  reader.readAsDataURL(imageInput.files[0]);

  const formData = new FormData();
  formData.append('file', imageInput.files[0]);

  try {
      const response = await fetch('http://localhost:8000/predict', {
          method: 'POST',
          body: formData,
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const result = await response.json();
      document.getElementById('predictionResult').textContent = `Prediction: ${result.prediction}`;
  } catch (error) {
      console.error('Error:', error);
      document.getElementById('predictionResult').textContent = 'Failed to get prediction.';
  }
});