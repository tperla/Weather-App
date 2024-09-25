Weather Dashboard 🌦️

This is a simple weather dashboard that shows the weather in four different locations: Eilat, London, New York, and Alaska. The weather information is fetched using the OpenWeatherMap API. The application is built using React and displays the current weather conditions in Hebrew, including temperature, humidity, and a brief weather description. The degrees are shown in Celsius, and the app also displays a weather icon based on the perceived temperature.

Table of Contents

Features

Technologies

Getting Started

Running the Project

API Key Configuration

Folder Structure

Features

🌍 Shows the weather for four locations: Eilat, London, New York, and Alaska.
🌡️ Displays temperature in Celsius, humidity percentage, and a weather description in Hebrew.
☁️ Weather conditions include an icon based on the temperature range:
20°C and below: Cold icon
20°C to 30°C: Comfortable icon
30°C and above: Warm icon
🔁 Weather information is dynamically fetched from the OpenWeatherMap API.
📱 Responsive grid layout to display weather cards for each location.

Technologies

React - Frontend JavaScript framework

OpenWeatherMap API - Weather data provider

HTML5 & CSS3 - Structure and styling

Getting Started

Follow these steps to set up and run the project on your local machine:

Prerequisites

You need to have the following software installed on your system:

Node.js (v12 or higher)

npm (Node package manager, comes with Node.js)

Installation

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/weather-dashboard.git
Navigate to the project folder:

bash
Copy code
cd weather-dashboard
Install project dependencies:

bash
Copy code
npm install
Running the Project
Once the dependencies are installed, you can start the project by running:

bash
Copy code
npm start
This will start the development server and open the app in your default web browser. The app will be running at http://localhost:3000.

API Key Configuration
This project uses the OpenWeatherMap API to fetch weather data. An API key is required to use the service.

Create an account and get an API key from OpenWeatherMap.
Replace the placeholder API key in the App.js file with your own key:
javascript
Copy code
const apiKey = 'YOUR_API_KEY_HERE'; // Add your OpenWeatherMap API key

Folder Structure

weather-dashboard/

│

├── public/                # Public directory for static assets

├── src/                   # Source code

│   ├── components/        # Reusable components

│   │   └── WeatherCard.js # Component to display weather for each location

│   ├── App.js             # Main application component

│   └── index.js           # Entry point for React

│

├── README.md              # Project documentation

├── package.json           # Project metadata and dependencies

└── .gitignore             # Files to ignore in Git

How It Works

App.js: The main component that fetches weather data from the OpenWeatherMap API for each city and passes the data to the WeatherCard component.
WeatherCard.js: A reusable component that displays the weather for a given location, including temperature, humidity, description, and an icon.
CSS: Basic styling is included in the App.css file. The weather cards are displayed in a grid layout for a neat and responsive design.

![image](https://github.com/user-attachments/assets/875be23e-e6c9-4198-989f-589afd595eb9)
