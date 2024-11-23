const apiKey = '870546a1769c6ef7b27c5c2ffa99b063'; // Replace with your API key
document.addEventListener('DOMContentLoaded', () => {
  // Get references to HTML elements
  const apiKey = 'cd812423d7d765b9d21291d823f57426'; // Your API key
  const searchButton = document.getElementById('searchButton');
  const cityInput = document.getElementById('cityInput');
  const cityName = document.getElementById('cityName');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');
  const weatherIcon = document.getElementById('weatherIcon');

  // Add event listener to the search button
  searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim(); // Avoid blank input
    if (city) {
      fetchWeather(city);
    } else {
      alert('Please enter a city name.');
    }
  });

  // Fetch weather data from the API
  async function fetchWeather(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error('City not found. Please try again.');
      }
      const data = await response.json();
      updateUI(data);
    } catch (error) {
      alert(error.message);
    }
  }

  // Update the UI with the weather data
  function updateUI(data) {
    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = data.weather[0].description;
    
    // Check if weatherIcon exists and set the src property
    if (weatherIcon) {
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    } else {
      console.error('weatherIcon element is not found!');
    }
  }
});
