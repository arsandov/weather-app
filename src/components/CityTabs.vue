<template>
  <div class="flex bg-gray-200">
    <button
      v-for="city in cities"
      :key="city"
      :class="[
        'flex-grow p-2 text-center uppercase',
        selectedCity === city ? 'text-blue-600 border-b-4 border-red-500' : 'text-gray-600'
      ]"
      @click="$emit('city-selected', city)"
    >
      {{ city }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'CityTabs',
  props: {
    cities: Array,
    selectedCity: String
  }
}
</script>
