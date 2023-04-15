<template>
  <div>
    <!-- Summary -->
    <dashboard-tile-loader :isLoading="isLoadingCountry"></dashboard-tile-loader>
    <dashboard-tils v-if="!isLoadingCountry" :countryData="countryObj"></dashboard-tils>
    <!-- // Summary -->

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
import { onMounted, ref } from "vue";
import CoronaCountries from "./../components/corona-countries.vue";
import DashboardTils from "./../components/dashboard-tile.vue";
import DashboardTileLoader from "./../components/dashboard-tile-loader.vue";

const api = `https://disease.sh/v3/covid-19`;

const totalCounts = ref<any>({});
const isLoadingCountries = ref(false);
const isLoadingTotal = ref(false);
const isLoadingCountry = ref(true);
const countries = ref([]);
const countryObj = ref({});

onMounted(async () => {
  await getStatusByCountry("india");
  await getAllStatus();
  await getAllCountries();
});

async function getAllStatus() {
  setLoadingTotal(true);

  const response = await fetch(`${api}/all`);
  const jsonData = await response.json();
  totalCounts.value = jsonData;

  setLoadingTotal(false);
}

async function getAllCountries() {
  setLoadingCountries(true);

  const response: any = await fetch(`${api}/countries`);
  const jsonData = await response.json();
  countries.value = jsonData.sort((a: any, b: any) => b.cases - a.cases);

  setLoadingCountries(false);
}

async function getStatusByCountry(name: string) {
  setLoadingCountry(true);

  const response: any = await fetch(`${api}/countries/${name}`);
  const jsonData = await response.json();
  countryObj.value = jsonData;

  setLoadingCountry(false);
}

function setLoadingTotal(value: boolean) {
  isLoadingTotal.value = value;
}

function setLoadingCountry(value: boolean) {
  isLoadingCountry.value = value;
}

function setLoadingCountries(value: boolean) {
  isLoadingCountries.value = value;
}
</script>
