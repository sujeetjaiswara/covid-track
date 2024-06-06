<script setup lang="ts">
import { RouterView } from 'vue-router'
import CvMenu from '@/components/cv-menu.vue'
</script>

<template>
  <v-layout class="px-5 pt-3">
    <CvMenu />
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
