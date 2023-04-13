<template>
  <div>
    <div id="DashboardTils">
      <v-row dense>
        <v-col lg="4" md="4" sm="4" cols="12">
          <v-card color="grey lighten-4" class="elevation-0">
            <v-card-title
              class="subtitle-1 font-weight-medium text-uppercase"
              text-color="#000"
            >
              <v-img
                class="mr-2 float-left"
                :src="cloneCountry.countryInfo.flag"
                max-width="40"
              ></v-img>
              {{ cloneCountry.country }}
            </v-card-title>
            <v-card-subtitle class="pt-1">Country</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col lg="2" md="2" sm="2" cols="6">
          <v-card color="red lighten-1" dark class="elevation-0">
            <v-card-title class="headline">
              {{ cloneCountry.cases | thousandsToCommas }}
            </v-card-title>
            <v-card-subtitle>Total Cases</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col lg="2" md="2" sm="2" cols="6">
          <v-card
            color="blue-grey darken-1"
            text-color="#fff"
            dark
            class="elevation-0"
          >
            <v-card-title class="headline">
              {{ cloneCountry.deaths | thousandsToCommas }}
            </v-card-title>
            <v-card-subtitle>Deaths</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col lg="2" md="2" sm="2" cols="6">
          <v-card color="green lighten-1" dark class="elevation-0">
            <v-card-title class="headline">
              {{ cloneCountry.recovered | thousandsToCommas }}
            </v-card-title>
            <v-card-subtitle>Recovered</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col lg="2" md="2" sm="2" cols="6">
          <v-card color="blue" dark class="elevation-0">
            <v-card-title class="headline">
              {{ cloneCountry.active | thousandsToCommas }}
            </v-card-title>
            <v-card-subtitle>Active Cases </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    countryData: {
      type: Object,
    },
  },
  data() {
    return {
      cloneCountry: {},
    };
  },
  created() {
    this.cloneCountry = { ...this.countryData };
  },
  filters: {},
});
</script>

<style scoped></style>
