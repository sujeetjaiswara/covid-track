<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useTheme } from 'vuetify'

const theme = useTheme()

// Set dark mode if user system prefers scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  theme.global.name.value = 'dark'
}

const onToggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-layout class="px-5 pt-3">
    <!-- Menu -->
    <v-app-bar color="primary" elevation="0">
      <v-app-bar-title><span class="me-2 fs-2">🦠</span>Covid Track</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="onToggleTheme">
        <v-icon v-if="theme.global.current.value.dark">mdi-weather-night</v-icon>
        <v-icon v-else color="amber">mdi-white-balance-sunny</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Content -->
    <v-main class="main-content">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style>
.main-content {
  min-height: 90vh;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
