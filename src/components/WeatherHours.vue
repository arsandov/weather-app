<template>
  <div :class="$attrs.class">
    <h2 class="text-lg font-semibold mb-2">Next {{ maxHours }} hours</h2>
    <div class="flex overflow-x-auto space-x-4 pb-2">
      <div
        v-for="hour in hourlyData?.slice(0, maxHours)"
        :key="hour.dt"
        class="flex-shrink-0 w-20 text-center"
      >
        <p>{{ Math.round(hour.temp) }}°C</p>
        <img :src="getIconUrl(hour.weather[0].icon)" class="" />
        <p>{{ formatTime(hour.dt) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherHours',
  props: {
    hourlyData: Array,
    timezone: String,
    maxHours: {
      type: Number,
      default: 24
    }
  },
  methods: {
    getIconUrl(icon) {
      return `https://openweathermap.org/img/wn/${icon}@2x.png`
    },
    formatTime(timestamp) {
      const date = new Date(timestamp * 1000)
      const options = { hour: '2-digit', minute: '2-digit', timeZone: this.timezone }
      return new Intl.DateTimeFormat([], options).format(date)
    }
  }
}
</script>
