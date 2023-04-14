<template>
  <div>
    <!-- <pre>{{cloneCountries}}</pre> -->

    <v-row class="mt-5">
      <v-col lg="8" md="4" sm="4" cols="12">
        <h4>Coronavirus cases</h4>
      </v-col>
      <v-col lg="4" md="4" sm="4" cols="12">
        <v-text-field v-model="search" label="Search country" append-icon="mdi-magnify" single-line hide-details
          class="w-50 float-right"></v-text-field>
      </v-col>
    </v-row>

    <v-card class="elevation-2 mt-5">
      <v-data-table :headers="headers" :items="cloneCountries" :items-per-page="10" class="elevation-0"
        :loading="isLoading" loading-text="Loading... Please wait" :search="search">
        <template v-slot:item.country="{ item }">
          <div @click="getStatusByCountry(item.country)" class="d-flex align-center country-link">
            <v-img class="mr-2 float-left" :src="item.countryInfo.flag" max-width="25"></v-img>
            {{ item.country }}
          </div>
        </template>
        <template v-slot:item.cases="{ item }">
          <v-chip v-show="item.cases" color="red" text-color="white">
            <!-- {{ item.cases | thousandsToCommas }} -->
            cases
          </v-chip>
        </template>
        <template v-slot:item.deaths="{ item }">
          <v-chip v-show="item.deaths" color="blue-grey lighten-4" text-color="blue-grey lighten-1" outlined>
            <v-icon left>mdi-emoticon-sad</v-icon>
            <!-- {{ item.deaths | thousandsToCommas }} -->
            deaths
          </v-chip>
        </template>
        <template v-slot:item.recovered="{ item }">
          <v-chip v-show="item.recovered" color="green lighten-1" text-color="white">
            <v-icon left>mdi-emoticon-happy</v-icon>
            recovered
            <!-- {{ item.recovered | thousandsToCommas }} -->
          </v-chip>
        </template>
        <template v-slot:item.active="{ item }">
          <v-chip v-show="item.active" color="blue" text-color="white">
            active
            <!-- {{ item.active | thousandsToCommas }} -->
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<style scoped>
.country-link {
  cursor: pointer;
}
</style>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { ref } from 'vue';

const props = defineProps({
  countries: Array,
  isLoading: Boolean
});

const emit = defineEmits(['getStatusByCountry']);

const cloneCountries = ref<any>([]);
const search = ref("");

const headers = ref([
  {
    text: "Country",
    align: "start",
    sortable: true,
    value: "country"
  },
  { text: "Cases", value: "cases" },
  { text: "Deaths", value: "deaths" },
  { text: "Recovered", value: "recovered" },
  { text: "Active", value: "active" }
]);

onMounted(() => {
  cloneCountries.value = [...props.countries];
});

function getStatusByCountry(countryName: string) {
  emit("getStatusByCountry", countryName);
}
</script>