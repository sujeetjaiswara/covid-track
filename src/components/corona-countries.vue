<template>
  <div>
    <!-- <pre>{{ cloneCountries[0] }}</pre> -->

    <v-row class="mt-5">
      <v-col lg="8" md="4" sm="4" cols="12">
        <!-- <h4>Cases</h4> -->
      </v-col>
      <v-col lg="4" md="4" sm="4" cols="12">
        <v-text-field v-model="search" label="Search country" append-inner-icon="mdi-magnify" single-line hide-details
          density="compact" variant="outlined" class="w-50 float-right" :height="20" color="primary"></v-text-field>
      </v-col>
    </v-row>

    <v-data-table :headers="headers" :items="cloneCountries" :items-per-page="10"
      class="elevation-0 mt-5 border rounded pb-3" :loading="isLoading" loading-text="Loading.." :search="search"
      color="primary" item-key="country" :single-select="true" @click:row="getStatusByCountry">

      <!-- Country -->
      <template v-slot:item.country="{ item }">
        <div class="d-flex align-center country-link">
          <v-img class="mr-2 float-left" :lazy-src="item.raw.countryInfo.flag" :src="item.raw.countryInfo.flag"
            max-width="28">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center h-100">
                <v-progress-circular color="grey-lighten-5" indeterminate size="16" width="2"></v-progress-circular>
              </div>
            </template>
          </v-img>
          {{ item.raw.country }}
        </div>
      </template>

      <!-- Cases -->
      <template v-slot:item.cases="{ item }">
        <v-chip v-if="item.raw.cases" color="red" text-color="white">
          {{ item.raw.cases?.toLocaleString() }}
        </v-chip>
        <v-chip v-else color="red" text-color="white">0</v-chip>
      </template>

      <!-- Deaths -->
      <template v-slot:item.deaths="{ item }">
        <v-chip v-if="item.raw.deaths" color="blue-grey lighten-4" text-color="blue-grey lighten-2" outlined>
          <v-icon class="me-1">mdi-emoticon-sad</v-icon>
          {{ item.raw.deaths?.toLocaleString() }}
        </v-chip>
        <v-chip v-else color="blue-grey lighten-4" text-color="blue-grey lighten-2">
          <v-icon class="me-1">mdi-emoticon-sad</v-icon>0
        </v-chip>
      </template>

      <!-- Recovered -->
      <template v-slot:item.recovered="{ item }">
        <v-chip v-if="item.raw.recovered" color="green lighten-1" text-color="white">
          <v-icon class="me-1">mdi-emoticon-happy</v-icon>
          {{ item.raw.recovered?.toLocaleString() }}
        </v-chip>
        <v-chip v-else color="green lighten-1" text-color="white">
          <v-icon class="me-1">mdi-emoticon-happy</v-icon>0
        </v-chip>
      </template>

      <!-- Active -->
      <template v-slot:item.active="{ item }">
        <v-chip v-if="item.raw.active" color="blue" text-color="white">
          {{ item.raw.active?.toLocaleString() }}
        </v-chip>
        <v-chip v-else color="blue" text-color="white">0</v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<style scoped>
.country-link {
  cursor: pointer;
}
</style>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

export interface Props {
  isLoading?: boolean,
  countries?: any[]
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  countries: () => []
});

const emit = defineEmits(['getStatusByCountry']);

const cloneCountries = ref<any>([]);
const search = ref("");

const headers = ref<any>([
  {
    title: "Country",
    align: "start",
    sortable: true,
    key: "country"
  },
  { title: "Cases", key: "cases" },
  { title: "Deaths", key: "deaths" },
  { title: "Recovered", key: "recovered" },
  { title: "Active", key: "active" }
]);

onMounted(() => {
  cloneCountries.value = [...props.countries];
});

function getStatusByCountry(event: Event, row: any) {
  event.stopPropagation();

  const _row = JSON.parse(JSON.stringify(row));
  const countryName = _row.item.value.countryInfo.iso2;
  emit("getStatusByCountry", countryName);
}
</script>