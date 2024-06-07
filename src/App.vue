<script setup lang="ts">
import { RouterView } from 'vue-router'
import CvMenu from '@/components/cv-menu.vue'
</script>

<template>
  <v-layout class="px-5 pt-2">
    <CvMenu />
    <v-main class="my-3">
      <RouterView />
    </v-main>
  </v-layout>
</template>
