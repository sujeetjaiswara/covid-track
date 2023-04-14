<template>
  <div class="home">

    <!-- <pre>isLoadingCountries:{{isLoadingCountries}}</pre>
    <pre>isLoadingCountry:{{isLoadingCountry}}</pre>
    <pre>isLoadingTotal:{{isLoadingTotal}}</pre> -->

    <!-- Summary -->
    <dashboard-tile-loader :isLoading="isLoadingCountry"></dashboard-tile-loader>
    <dashboard-tils v-if="!isLoadingCountry" :countryData="countryObj"></dashboard-tils>
    <!-- // Summary -->

    <!-- TODO: Create component -->
    <!-- <div class="d-flex justify-space-between subtitle-2 mt-5">
      <div>
        <span v-if="!isLoadingTotal">
          Total Cases: {{ totalCounts.cases | thousandsToCommas }}
        </span>
      </div>
      <div>
        <span v-if="!isLoadingTotal">
          <v-icon>mdi-clock-outline</v-icon>
          Updated: {{ totalCounts.updated | dateFormat }}
        </span>
      </div>
    </div> -->

    <!-- All Coutries -->
    <!-- <v-skeleton-loader v-if="isLoadingCountries" type="table" :boilerplate="isboilerplate" :tile="isTile"
      min-height="400">
    </v-skeleton-loader> -->
    <div v-if="isLoadingCountries">
      <v-progress-linear indeterminate color="primary" class="mt-5"></v-progress-linear>
    </div>
    <corona-countries v-else :countries="countries" :isLoading="isLoadingCountries"
      @getStatusByCountry="getStatusByCountry">
    </corona-countries>
    <!-- // All Coutries -->
  </div>
</template>

<script setup lang="ts">
// import { NovelCovid } from "novelcovid";
// import { format } from "date-fns";
import CoronaCountries from "./../components/corona-countries.vue";
import DashboardTils from "./../components/dashboard-tile.vue";
import DashboardTileLoader from "./../components/dashboard-tile-loader.vue";
import { computed, onMounted, ref } from "vue";

//const track = require('novelcovid');

// import { api } from 'novelcovid';

//  https://corona.lmao.ninja/v2/countries
// api.settings({
//   baseUrl: 'https://disease.sh' || 'https://api.caw.sh' || 'https://corona.lmao.ninja'
// })

// const track = new NovelCovid();

const totalCounts = ref<any>({});
const isLoadingCountries = ref(false);
const isLoadingTotal = ref(false);
const isLoadingCountry = ref(true);
// const isboilerplate = ref(false);
// const isTile = ref(false);
const countries = ref([]);
const countryObj = ref({});

onMounted(async () => {
  await getStatusByCountry("india");
  await getAllStatus();
  await getAllCountries();
});

const api = `https://disease.sh/v3/covid-19`;

async function getAllStatus() {
  isLoadingTotal.value = true;

  const response = await fetch(`${api}/all`);
  const jsonData = await response.json();
  console.log(jsonData);

  totalCounts.value = jsonData;

  isLoadingTotal.value = false;
}

async function getAllCountries() {
  isLoadingCountries.value = true;

  const response: any = await fetch(`${api}/countries`);
  const jsonData = await response.json();
  console.log(jsonData);

  countries.value = jsonData.sort((a: any, b: any) => b.cases - a.cases);

  isLoadingCountries.value = false;
}

async function getStatusByCountry(name: any) {
  console.log('getStatusByCountry():', name);

  isLoadingCountry.value = true;

  const response: any = await fetch(`${api}/countries/${name}`);
  const jsonData = await response.json();
  console.log(jsonData);

  countryObj.value = jsonData;

  isLoadingCountry.value = false;
}

// const dateFormat = computed((value) => {
//   return format(new Date(value), "hh:m:s a");
// });

// function isTodayDeath(v:any) {
//   return v > 0;
// }
</script>
