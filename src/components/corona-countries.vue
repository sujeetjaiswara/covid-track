<template>
  <div>
    <v-card class="elevation-2 mt-3">
      <v-card-title>
        Country
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="cloneCountries"
        :items-per-page="10"
        class="elevation-0"
        :loading="isLoading"
        loading-text="Loading... Please wait"
        :search="search"
      >
        <template v-slot:item.country="{ item }">
          <div
            @click="getStatusByCountry(item.country)"
            class="d-flex align-center country-link"
          >
            <v-img
              class="mr-2 float-left"
              :src="item.countryInfo.flag"
              max-width="25"
            ></v-img>
            {{ item.country }}
          </div>
        </template>
        <template v-slot:item.cases="{ item }">
          <v-chip v-show="item.cases" color="red" text-color="white">
            {{ item.cases | thousandsToCommas }}
          </v-chip>
        </template>
        <template v-slot:item.deaths="{ item }">
          <v-chip
            v-show="item.deaths"
            color="blue-grey lighten-4"
            text-color="blue-grey lighten-1"
            outlined
          >
            <v-icon left>mdi-emoticon-sad</v-icon>
            {{ item.deaths | thousandsToCommas }}
          </v-chip>
        </template>
        <template v-slot:item.recovered="{ item }">
          <v-chip
            v-show="item.recovered"
            color="green lighten-1"
            text-color="white"
          >
            <v-icon left>mdi-emoticon-happy</v-icon>
            {{ item.recovered | thousandsToCommas }}
          </v-chip>
        </template>
        <template v-slot:item.active="{ item }">
          <v-chip v-show="item.active" color="blue" text-color="white">
            {{ item.active | thousandsToCommas }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    countries: {
      type: Array
    },
    isLoading: Boolean
  },
  data() {
    return {
      cloneCountries: {},
      headers: [
        {
          text: "Country",
          align: "start",
          sortable: true,
          value: "country"
        },
        { text: "Cases", value: "cases" },
        // { text: "Today Cases", value: "todayCases" },
        { text: "Deaths", value: "deaths" },
        // { text: "Today Deaths", value: "todayDeaths" },
        { text: "Recovered", value: "recovered" },
        { text: "Active", value: "active" }
      ],
      search: ""
    };
  },
  created() {
    this.cloneCountries = [...this.countries];
  },
  methods: {
    getStatusByCountry(countryName) {
      this.$emit("getStatusByCountry", countryName);
    }
  }
});
</script>

<style scoped>
.country-link {
  cursor: pointer;
}
</style>
