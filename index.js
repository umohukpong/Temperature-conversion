const celsiusTemperature = document.getElementById("celsius");
const buttonCelsius = document.getElementById("buttonCelsius");
const fahrenheitTemperature = document.getElementById("fahrenheit");
const buttonFahrenheit = document.getElementById("buttonFahrenheit");

const buttonCelsiusReset = document.getElementById("buttonCelsiusReset");
const buttonFahrenheitReset = document.getElementById("buttonFahrenheitReset");

const fahrenheitResult = document.getElementById("fahrenheitResult");
const celsiusResult = document.getElementById("celsiusResult");

//click event handler
buttonCelsius.onclick = convertCelsiusToFahrenheit;
buttonCelsiusReset.onclick = resetCelsiusToFahrenheit;
buttonFahrenheit.onclick = convertFahrenheitToCelsius;
buttonFahrenheitReset.onclick = resetFahrenheitToCelsius;


function resetCelsiusToFahrenheit() {
    celsiusTemperature.value = "";
    celsiusTemperature.placeholder = "Enter temperature in Celsius";
    fahrenheitResult.innerHTML = "";
}

function resetFahrenheitToCelsius() {
    fahrenheitTemperature.value = "";
    fahrenheitTemperature.placeholder = "Enter temperature in Fahrenheit";
    celsiusResult.innerHTML = "";
}


// function convert Celsius To Fahrenheit
function convertCelsiusToFahrenheit() {
  const celsius = parseFloat(celsiusTemperature.value);

  // check if celsius is a valid number
  if (isNaN(celsius)) {
    alert("Please enter a valid number");
    resetCelsiusToFahrenheit();
    return;
  }

  // convert celsius to fahrenheit approximately 2 decimal places and display it in the result div
  const fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById("fahrenheitResult").innerHTML =
    "Fahrenheit: " + fahrenheit.toFixed(2);
}

// convert fahrenheit to celsius
function convertFahrenheitToCelsius() {
  const fahrenheit = parseFloat(fahrenheitTemperature.value);

  // check if fahrenheit is a valid number
  if (isNaN(fahrenheit)) {
    alert("Please enter a valid number");
    resetFahrenheitToCelsius();
    return;
  }

  // convert fahrenheit to celsius approximately 2 decimal places and display it in the result div
  const celsius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("celsiusResult").innerHTML =
    "Celsius: " + celsius.toFixed(2);
}
