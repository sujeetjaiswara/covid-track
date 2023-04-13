<script setup lang="ts">
// import { NovelCovid } from "novelcovid";
// import { format } from "date-fns";
// import CoronaCountries from "@/components/corona-countries";
// import DashboardTils from "@/components/dashboard-tile";
// import DashboardTileLoader from "@/components/dashboard-tile-loader";
import { computed, onMounted, ref } from "vue";

//const track = require('novelcovid');

// import { api } from 'novelcovid';

//  https://corona.lmao.ninja/v2/countries
// api.settings({
//   baseUrl: 'https://disease.sh' || 'https://api.caw.sh' || 'https://corona.lmao.ninja'
// })

// const track = new NovelCovid();

const totalCounts = ref({});
const isLoadingCountries = ref(false);
const isLoadingTotal = ref(false);
const isLoadingCountry = ref(true);
const isboilerplate = ref(false);
const isTile = ref(false);
const countries = ref([]);
const countryObj = ref({});

onMounted(() => {
  getStatusByCountry("india");
  getAllStatus();
  getAllCountries();
});

// const dateFormat = computed((value) => {
//   return format(new Date(value), "hh:m:s a");
// });

const api = `https://disease.sh/v3/covid-19`;

async function getAllStatus() {
  isLoadingTotal.value = true;

  const response = await fetch(`${api}/all`);
  const jsonData = await response.json();
  console.log(jsonData);

  isLoadingTotal.value = false;
  totalCounts.value = jsonData;
}

async function getAllCountries() {
  isLoadingCountries.value = true;

  const response: any = await fetch(`${api}/countries`);
  const jsonData = await response.json();
  console.log(jsonData);

  isLoadingCountries.value = false;
  countries.value = jsonData.sort((a: any, b: any) => b.cases - a.cases);
}

async function getStatusByCountry(name: any) {
  isLoadingCountry.value = true;

  const response: any = await fetch(`${api}/countries/${name}`);
  const jsonData = await response.json();
  console.log(jsonData);

  isLoadingCountry.value = false;
  countryObj.value = jsonData;
}

// function isTodayDeath(v:any) {
//   return v > 0;
// }
</script>

<template>
  <div class="home">
    <!-- Summary -->
    <dashboard-tile-loader :isLoading="isLoadingCountry"></dashboard-tile-loader>
    <dashboard-tils v-if="!isLoadingCountry" :countryData="countryObj"></dashboard-tils>
    <!-- // Summary -->

    <!-- TODO: Create component -->
    <div class="d-flex justify-space-between subtitle-2 mt-5">
      <div>
        <span v-if="!isLoadingTotal">
          <!-- Total Cases: {{ totalCounts.cases | thousandsToCommas }} -->
          <!-- Total Cases: {{ totalCounts.cases }} -->
        </span>
      </div>
      <div>
        <span v-if="!isLoadingTotal">
          <v-icon>mdi-clock-outline</v-icon>
          <!-- Updated: {{ totalCounts.updated | dateFormat }} -->
          <!-- Updated: {{ totalCounts.updated }} -->
        </span>
      </div>
    </div>

    <!-- All Coutries -->
    <v-skeleton-loader v-if="isLoadingCountries" ref="skeleton" type="table" :boilerplate="isboilerplate" :tile="isTile"
      min-height="400"></v-skeleton-loader>

    <corona-countries v-if="!isLoadingCountries" :countries="countries" :isLoading="isLoadingCountries"
      @getStatusByCountry="getStatusByCountry"></corona-countries>
    <!-- // All Coutries -->
  </div>
</template>
