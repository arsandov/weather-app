<script>
import axios from 'axios'
import CityTabs from './components/CityTabs.vue'
import WeatherHours from './components/WeatherHours.vue'
import LastUpdatedBar from './components/LastUpdatedBar.vue'
import WeatherDays from './components/WeatherDays.vue'
import CitySearch from './components/CitySearch.vue'

export default {
  name: 'App',
  components: {
    CityTabs,
    CitySearch,
    WeatherHours,
    WeatherDays,
    LastUpdatedBar
  },
  data() {
    return {
      cities: ['Rio de Janeiro', 'Beijing', 'Los Angeles'],
      selectedCity: 'Rio de Janeiro',
      weatherData: null,
      timezone: null,
      lastUpdated: null
    }
  },
  mounted() {
    this.fetchWeather(this.selectedCity)
  },
  methods: {
    async fetchWeather(city) {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY
      const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'
      const response = await axios.get(
        `${WEATHER_API_URL}/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      const { coord } = response.data
      const forecast = await axios.get(
        `${WEATHER_API_URL}/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}&units=metric`
      )
      this.selectedCity = city
      this.weatherData = forecast.data
      this.timezone = this.weatherData.timezone
      this.lastUpdated = new Date()
    },
    refreshData() {
      this.fetchWeather(this.selectedCity)
    }
  }
}
</script>

<template>
  <div id="app">
    <div class="bg-blue-600 text-white flex justify-between items-center p-4">
      <h1 class="text-xl font-bold">My Weather</h1>
      <div class="flex items-center space-x-2">
        <button
          @click="refreshData"
          class="bg-white text-blue-600 h-8 w-8 rounded-full hover:bg-gray-200"
        >
          <font-awesome-icon icon="sync-alt" />
        </button>
      </div>
    </div>
    <div class="max-w-lg mx-auto">
      <CityTabs :cities="cities" :selectedCity="selectedCity" @city-selected="fetchWeather" />
      <CitySearch @citySelected="fetchWeather" />
      <WeatherHours :hourlyData="weatherData?.hourly" :timezone="timezone" class="p-4" />
      <WeatherDays :dailyData="weatherData?.daily" class="p-4 pb-8 flex-grow" />
    </div>
    <LastUpdatedBar
      :lastUpdated="lastUpdated"
      class="bg-blue-600 text-xs text-white text-center p-1 fixed bottom-0 left-0 right-0"
    />
  </div>
</template>
