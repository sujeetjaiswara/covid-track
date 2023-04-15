<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
 <v-layout class="px-5 pt-3">
      <v-app-bar title="🦠Covid Track" color="grey-darken-4" elevation="0"></v-app-bar>
      <v-main style="min-height: 100vh; margin-top: 10px; padding-left: 10px; padding-right: 10px;">
        <RouterView />
      </v-main>
    </v-layout>
</template>

<style scoped></style>
