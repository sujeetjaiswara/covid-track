<script lang="ts" setup>
import { onMounted, onUpdated, ref } from 'vue'

const props = defineProps({
  isLoading: Boolean,
  countryData: Object
})

const cloneCountry = ref<any>({})
const cardHeight = ref(100)

onMounted(() => {
  cloneCountry.value = { ...props.countryData }
})

onUpdated(() => {
  cloneCountry.value = { ...props.countryData }
})
</script>

<template>
  <div>
    <div id="DashboardTils">
      <v-row dense>
        <v-col lg="4" md="4" sm="4" cols="12">
          <v-skeleton-loader
            v-if="isLoading"
            type="text"
            :height="cardHeight"
            :min-height="cardHeight"
            color="blue-grey-lighten-5"
          ></v-skeleton-loader>
          <v-card
            v-else
            color="blue-grey-lighten-5"
            class="elevation-0 rounded-2 borderH"
            min-height="100"
          >
            <v-card-title class="subtitle-1 font-weight-medium text-uppercase" text-color="#000">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>{{ cloneCountry.country }}</div>
                <v-img
                  :lazy-src="cloneCountry.countryInfo?.flag"
                  :src="cloneCountry.countryInfo?.flag"
                  max-width="40"
                  aspect-ratio="16/9"
                  class="me-2"
                ></v-img>
              </div>
            </v-card-title>
            <v-card-subtitle class="pt-1"> Country </v-card-subtitle>
          </v-card>
        </v-col>

        <v-col lg="2" md="2" sm="2" cols="6">
          <v-skeleton-loader
            v-if="isLoading"
            type="text"
            :height="cardHeight"
            :min-height="cardHeight"
            color="red lighten-1"
          ></v-skeleton-loader>
          <v-card v-else color="red lighten-1" dark class="elevation-0 rounded-2" min-height="100">
            <v-card-title class="headline">
              {{ cloneCountry['cases']?.toLocaleString() }}
            </v-card-title>
            <v-card-subtitle>Total Cases</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col lg="2" md="2" sm="2" cols="6">
          <v-skeleton-loader
            v-if="isLoading"
            type="text"
            :height="cardHeight"
            :min-height="cardHeight"
            color="blue-grey darken-1"
          ></v-skeleton-loader>
          <v-card
            v-else
            color="blue-grey darken-1"
            text-color="#fff"
            dark
            class="elevation-0 rounded-2"
            min-height="100"
          >
            <v-card-title class="headline">
              {{ cloneCountry['deaths']?.toLocaleString() }}
            </v-card-title>
            <v-card-subtitle>Deaths</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col lg="2" md="2" sm="2" cols="6">
          <v-skeleton-loader
            v-if="isLoading"
            type="text"
            :height="cardHeight"
            :min-height="cardHeight"
            color="green lighten-1"
          ></v-skeleton-loader>
          <v-card
            v-else
            color="green lighten-1"
            dark
            class="elevation-0 rounded-2"
            min-height="100"
          >
            <v-card-title class="headline">
              {{ cloneCountry['recovered']?.toLocaleString() }}
            </v-card-title>
            <v-card-subtitle>Recovered</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col lg="2" md="2" sm="2" cols="6">
          <v-skeleton-loader
            v-if="isLoading"
            type="text"
            :height="cardHeight"
            :min-height="cardHeight"
            color="blue"
          ></v-skeleton-loader>
          <v-card v-else color="blue" dark class="elevation-0 rounded-2" min-height="100">
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

<style scoped></style>
