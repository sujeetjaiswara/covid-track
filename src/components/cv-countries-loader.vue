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
  <div class="d-flex justify-end w-100">
    <v-skeleton-loader
      type="list-item"
      :color="!isDarkTheme ? '#eee' : ''"
      class="mb-5 w-25"
    ></v-skeleton-loader>
  </div>

  <v-skeleton-loader
    v-for="(n, index) in 4"
    :key="index"
    type="table-row"
    :color="!isDarkTheme ? '#eee' : ''"
    class="mb-1"
  ></v-skeleton-loader>
</template>
