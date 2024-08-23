# Weather Application

A small Vue.js weather application that displays forecast information for selected cities.

## Table of Contents

- [Overview](#overview)
- [Main Features](#main-features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Components](#components)
- [API](#api)
- [Challenges and Learning](#challenges-and-learning)
- [Future Improvements](#future-improvements)

## Overview

This project is a weather application built with Vue.js. It allows users to view weather forecasts for predefined cities and search for additional cities. The application fetches real-time weather data from the OpenWeatherMap API.

Live Demo is available [here](https://fabulous-travesseiro-fd8458.netlify.app/).

## Main Features

- Show forecast for the next hours and days for a selected city powered by OpenWeatherMap API
- Three predefined cities (Rio de Janeiro, Beijing, and Los Angeles) and custom search for more than 20k cities

## Technologies Used

- Vue.js 3
- Tailwind CSS for styling
- Font Awesome for icons
- Axios for API requests
- OpenWeatherMap API for weather data

## Setup and Installation

1. Clone the repository
2. Create a `.env` file in the root directory with the following environment variable:

```
VITE_WEATHER_API_KEY=your_API_KEY_here
```

3. Run `npm install` to install dependencies
4. Run `npm run dev` to see the app locally at http://localhost:5173/
