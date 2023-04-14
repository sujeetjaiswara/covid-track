<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar title="🦠Covid Track" color="grey-darken-4" elevation="0"></v-app-bar>
      <v-main style="min-height: 100vh; margin-top: 10px; padding-left: 10px; padding-right: 10px;">
        <RouterView />
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped></style>
