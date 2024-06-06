<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDarkTheme = ref(false)

onMounted(() => {
  isDarkTheme.value = theme.global.current.value.dark
})
</script>

<template>
  <div>
    <v-skeleton-loader
      type="table-row"
      :color="!isDarkTheme ? '#eee' : ''"
      class="mb-1"
    ></v-skeleton-loader>

    <v-skeleton-loader
      type="table-row"
      :color="!isDarkTheme ? '#eee' : ''"
      class="mb-1"
    ></v-skeleton-loader>

    <v-skeleton-loader
      type="table-row"
      :color="!isDarkTheme ? '#eee' : ''"
      class="mb-1"
    ></v-skeleton-loader>

    <v-skeleton-loader
      type="table-row"
      :color="!isDarkTheme ? '#eee' : ''"
      class="mb-1"
    ></v-skeleton-loader>

    <v-skeleton-loader
      type="table-row"
      :color="!isDarkTheme ? '#eee' : ''"
      class="mb-1"
    ></v-skeleton-loader>

    <v-skeleton-loader
      type="table-row"
      :color="!isDarkTheme ? '#eee' : ''"
      class="mb-1"
    ></v-skeleton-loader>

    <v-skeleton-loader
      type="table-row"
      :color="!isDarkTheme ? '#eee' : ''"
      class="mb-1"
    ></v-skeleton-loader>

    <v-skeleton-loader
      type="table-row"
      :color="!isDarkTheme ? '#eee' : ''"
      class="mb-1"
    ></v-skeleton-loader>
  </div>
</template>
