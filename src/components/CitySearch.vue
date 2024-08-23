<template>
  <div class="relative">
    <input
      type="text"
      v-model="searchQuery"
      @input="handleInput"
      @focus="showDropdown = true"
      @blur="closeDropdownDelayed"
      placeholder="Search other cities"
      class="p-2 rounded bg-white text-black w-full"
      :class="{ 'font-bold text-red-500': searchedCity !== '' }"
    />
    <ul
      v-if="showDropdown && filteredCities.length"
      class="absolute z-10 bg-white border rounded mt-1 w-full max-h-60 overflow-y-auto"
    >
      <li
        v-for="city in filteredCities"
        :key="city"
        @mousedown.prevent="selectCity(city)"
        class="p-2 hover:bg-gray-100 cursor-pointer"
      >
        {{ city }}
      </li>
    </ul>
  </div>
</template>

<script>
import { SMALL_CITIES } from '@/lib/smallCities'
import { ref, computed, onMounted, watch } from 'vue'

export default {
  name: 'CitySearch',
  setup(props, { emit }) {
    const searchQuery = ref('')
    const cities = ref([])
    const showDropdown = ref(false)
    const searchedCity = ref('')
    onMounted(() => {
      cities.value = SMALL_CITIES
    })

    const filteredCities = computed(() => {
      if (searchQuery.value === '') return []
      return cities.value
        .filter((city) => city.toLowerCase().includes(searchQuery.value.toLowerCase()))
        .slice(0, 4)
    })

    function selectCity(city) {
      searchQuery.value = city
      searchedCity.value = city
      showDropdown.value = false
      emit('citySelected', city)
    }

    function closeDropdownDelayed() {
      setTimeout(() => {
        showDropdown.value = false
      }, 200)
    }

    function handleInput() {
      showDropdown.value = true
      if (searchQuery.value === '') {
        clearSearchedCity()
      }
    }

    function clearSearchedCity() {
      searchedCity.value = ''
      emit('citySelected', '')
    }

    watch(searchQuery, (newValue) => {
      if (newValue === '') {
        clearSearchedCity()
      }
    })
    return {
      searchQuery,
      filteredCities,
      handleInput,
      selectCity,
      showDropdown,
      closeDropdownDelayed,
      searchedCity
    }
  }
}
</script>
