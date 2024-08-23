<template>
  <div :class="$attrs.class">
    <p>Last updated on {{ formatDateTime(lastUpdated) }}</p>
  </div>
</template>

<script>
export default {
  name: 'LastUpdatedBar',
  props: {
    lastUpdated: Date
  },
  methods: {
    formatDateTime(datetime) {
      const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }
      return datetime?.toLocaleString('en-US', options)
    }
  }
}
</script>
