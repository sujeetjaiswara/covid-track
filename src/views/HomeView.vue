<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CoronaCountries from './../components/corona-countries.vue'
import DashboardTils from './../components/dashboard-tile.vue'
import DashboardTileLoader from '@/components/dashboard-tile-loader.vue'

const api = `https://disease.sh/v3/covid-19`
const totalCounts = ref<any>({})
const isLoadingCountries = ref(false)
const isLoadingTotal = ref(false)
const isLoadingCountry = ref(true)
const countries = ref([])
const countryObj = ref({})

onMounted(async () => {
  getStatusByCountry('IN')
  getAllStatus()
  getAllCountries()
})

async function getAllStatus() {
  setLoadingTotal(true)

  try {
    const response = await fetch(`${api}/all`)
    const jsonData = await response.json()
    totalCounts.value = jsonData
  } catch (error) {
    console.error('There was an error', error)
  }

  setLoadingTotal(false)
}

async function getAllCountries() {
  setLoadingCountries(true)

  try {
    const response: any = await fetch(`${api}/countries`)
    const jsonData = await response.json()
    countries.value = jsonData.sort((a: any, b: any) => b.cases - a.cases)
  } catch (error) {
    console.error('There was an error', error)
  }

  setLoadingCountries(false)
}

async function getStatusByCountry(iso2: string) {
  setLoadingCountry(true)

  try {
    const response: any = await fetch(`${api}/countries/${iso2}`)
    const jsonData = await response.json()
    countryObj.value = jsonData
  } catch (error) {
    console.error('There was an error', error)
  }

  setLoadingCountry(false)
}

function setLoadingTotal(value: boolean) {
  isLoadingTotal.value = value
}

function setLoadingCountry(value: boolean) {
  isLoadingCountry.value = value
}

function setLoadingCountries(value: boolean) {
  isLoadingCountries.value = value
}
</script>

<template>
  <div>
    <!-- Summary -->
    <div>
      <dashboard-tils :isLoading="isLoadingCountry" :countryData="countryObj"></dashboard-tils>
    </div>

    <!-- All Coutries -->
    <div v-if="isLoadingCountries" class="mt-5">
      <DashboardTileLoader></DashboardTileLoader>
    </div>
    <div v-else>
      <corona-countries
        :countries="countries"
        :isLoading="isLoadingCountries"
        @getStatusByCountry="getStatusByCountry"
      >
      </corona-countries>
    </div>
  </div>
</template>
