<script setup lang="ts">
import CvCountries from '@/components/cv-countries.vue'
import CvStatisticsLoader from '@/components/cv-statistics-loader.vue'
import CvStatistics from '@/components/cv-statistics.vue'
import type { Country } from '@/types/Country'
import type { Statistic } from '@/types/Statistic'
import { onMounted, ref } from 'vue'

const api = 'https://disease.sh/v3/covid-19'
const countries = ref<Country[]>([])
const statistics = ref<Statistic>()
const isLoading = ref(false)
const isLoadingStatistics = ref(false)

onMounted(async () => {
  await getStatistics()
  await getAllCountries()
})

const getStatistics = async () => {
  isLoadingStatistics.value = true
  try {
    const response = await fetch(`${api}/all`)
    statistics.value = await response.json()
  } catch (error) {
    console.error(error)
  } finally {
    isLoadingStatistics.value = false
  }
}

const getAllCountries = async () => {
  isLoading.value = true
  try {
    const response: any = await fetch(`${api}/countries`)
    const jsonData = await response.json()
    countries.value = jsonData.sort((a: any, b: any) => b.cases - a.cases)
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <CvStatisticsLoader v-if="isLoadingStatistics" />
  <template v-else>
    <CvStatistics v-if="statistics" :isLoading="isLoadingStatistics" :statistics="statistics" />
  </template>
  <CvCountries :countries="countries" :isLoading="isLoading" />
</template>
