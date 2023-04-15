<template>
  <div>
    <div id="DashboardTils">
      <v-row dense>
        <v-col lg="4" md="4" sm="4" cols="12">
          <v-card color="blue-grey-lighten-5" class="elevation-0 rounded-2 border" min-height="100">
            <v-card-title class="subtitle-1 font-weight-medium text-uppercase" text-color="#000">            
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-img :src="cloneCountry.countryInfo?.flag" max-width="30" class="me-2"></v-img>
                <div> {{ cloneCountry.country }} </div>
              </div>
            </v-card-title>
            <v-card-subtitle class="pt-1">Country</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col lg="2" md="2" sm="2" cols="6">
          <v-card color="red lighten-1" dark class="elevation-0 rounded-2" min-height="100">
            <v-card-title class="headline">
              {{ cloneCountry['cases']?.toLocaleString() }}
            </v-card-title>
            <v-card-subtitle>Total Cases</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col lg="2" md="2" sm="2" cols="6">
          <v-card color="blue-grey darken-1" text-color="#fff" dark class="elevation-0 rounded-2" min-height="100">
            <v-card-title class="headline">
              {{ cloneCountry['deaths']?.toLocaleString() }}
            </v-card-title>
            <v-card-subtitle>Deaths</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col lg="2" md="2" sm="2" cols="6">
          <v-card color="green lighten-1" dark class="elevation-0 rounded-2" min-height="100">
            <v-card-title class="headline">
              {{ cloneCountry['recovered']?.toLocaleString() }}
            </v-card-title>
            <v-card-subtitle>Recovered</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col lg="2" md="2" sm="2" cols="6">
          <v-card color="blue" dark class="elevation-0 rounded-2" min-height="100">
            <v-card-title class="headline">
              {{ cloneCountry['active']?.toLocaleString() }}
            </v-card-title>
            <v-card-subtitle>Active Cases </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  countryData: Object,
});

const cloneCountry = ref<any>({});

onMounted(() => {
  cloneCountry.value = { ...props.countryData };
});
</script>

<style scoped></style>
