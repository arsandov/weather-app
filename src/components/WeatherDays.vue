<template>
  <div :class="$attrs.class">
    <h2 class="text-lg font-semibold mb-2">Next {{ maxDays }} days</h2>
    <div class="space-y-4">
      <div
        v-for="day in dailyData?.slice(0, maxDays)"
        :key="day.dt"
        class="flex justify-between items-center bg-white p-4 rounded shadow"
      >
        <img :src="getIconUrl(day.weather[0].icon)" class="h-12 w-12" />
        <div>
          <p class="font-medium">{{ formatDate(day.dt) }}</p>
          <p class="text-sm text-gray-500 capitalize">{{ day.weather[0].description }}</p>
        </div>
        <p class="text-lg font-semibold">{{ day.temp.day }}° / {{ day.temp.night }}°</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherDays',
  props: {
    dailyData: Array,
    timezone: String,
    maxDays: {
      type: Number,
      default: 5
    }
  },
  methods: {
    getIconUrl(icon) {
      return `https://openweathermap.org/img/wn/${icon}@2x.png`
    },
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000)
      const options = { weekday: 'short', month: 'short', day: 'numeric', timeZone: this.timezone }
      return new Intl.DateTimeFormat([], options).format(date)
    }
  }
}
</script>
