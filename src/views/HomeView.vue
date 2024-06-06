<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CoronaCountries from '@/components/corona-countries.vue'
import CvStatistics from '@/components/cv-statistics.vue'
import CvStatisticsLoader from '@/components/cv-statistics-loader.vue'
import DashboardTileLoader from '@/components/dashboard-tile-loader.vue'
import type { Statistic } from '@/types/Statistic'
import type { Country } from '@/types/Country'

// const api = import.meta.env.BASE_URL;
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
  setLoadingStatistics(true)
  try {
    const response = await fetch(`${api}/all`)
    const jsonData = await response.json()
    statistics.value = jsonData
  } catch (error) {
    console.error(error)
  } finally {
    setLoadingStatistics(false)
  }
}

const setLoadingStatistics = (value: boolean) => {
  isLoadingStatistics.value = value
}

const getAllCountries = async () => {
  setLoadingCountries(true)
  try {
    const response: any = await fetch(`${api}/countries`)
    const jsonData = await response.json()
    countries.value = jsonData.sort((a: any, b: any) => b.cases - a.cases)
  } catch (error) {
    console.error(error)
  } finally {
    setLoadingCountries(false)
  }
}

const setLoadingCountries = (value: boolean) => {
  isLoading.value = value
}
</script>

<template>
  <CvStatisticsLoader v-if="isLoadingStatistics" />
  <template v-else>
    <CvStatistics v-if="statistics" :isLoading="isLoadingStatistics" :statistics="statistics" />
  </template>

  <div v-if="isLoading" class="mt-5">
    <DashboardTileLoader></DashboardTileLoader>
  </div>
  <div v-else>
    <corona-countries :countries="countries" :isLoading="isLoading" />
  </div>
</template>
