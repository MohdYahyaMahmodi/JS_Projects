// Function to calculate BMI and return the category
function calculateBMI(weight, height) {
  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

// Function to handle the BMI calculation and display the result
function calculateAndDisplayBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert('Please enter valid weight and height.');
    return;
  }

  const bmi = calculateBMI(weight, height);
  const resultContainer = document.getElementById('result');
  resultContainer.textContent = `Your BMI is: ${bmi}`;
}

// Create input fields and a button
const weightInput = document.createElement('input');
weightInput.type = 'number';
weightInput.placeholder = 'Enter your weight (kg)';
document.body.appendChild(weightInput);

const heightInput = document.createElement('input');
heightInput.type = 'number';
heightInput.placeholder = 'Enter your height (m)';
document.body.appendChild(heightInput);

const calculateButton = document.createElement('button');
calculateButton.textContent = 'Calculate BMI';
calculateButton.addEventListener('click', calculateAndDisplayBMI);
document.body.appendChild(calculateButton);

// Create a container to display the result
const resultContainer = document.createElement('div');
resultContainer.id = 'result';
document.body.appendChild(resultContainer);
