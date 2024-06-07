<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

onMounted(() => {
  // Set dark mode if user system prefers scheme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.global.name.value = 'dark'
  }
})

const onToggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app-bar color="primary" elevation="0">
    <v-app-bar-title><span class="me-1 fs-2">🦠</span>Covid Track</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="onToggleTheme">
      <v-icon v-if="theme.global.current.value.dark">mdi-weather-night</v-icon>
      <v-icon v-else color="amber">mdi-white-balance-sunny</v-icon>
    </v-btn>
  </v-app-bar>
</template>
