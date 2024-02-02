document.getElementById('locationButton').addEventListener('click', function() {
  showLocation();
});

document.getElementById('temperatureButton').addEventListener('click', function() {
  showTemperature();
});

document.getElementById('descriptionButton').addEventListener('click', function() {
  showDescription();
});

function showLocation() {
  // Simulate fetching location data
  const locationData = "Location is : Unnamed road, Ward 34, Kalapatti - 641001, Tamil Nadu, India";
  updateInformationDisplay(locationData);
}

function showTemperature() {
  // Simulate fetching temperature data
  const temperatureData = "The Temperature is: 25°C";
  updateInformationDisplay(temperatureData);
}

function showDescription() {
  // Simulate fetching description data
  const descriptionData = "Description: Mist";
  updateInformationDisplay(descriptionData);
}

function updateInformationDisplay(data) {
  document.getElementById('informationDisplay').textContent = data;
}
