<script lang="ts" setup>
import type { Column } from '@/types/Column'
import type { Country } from '@/types/Country'
import { onMounted, ref, shallowRef, watchEffect } from 'vue'

export interface Props {
  isLoading?: boolean
  countries?: Country[]
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  countries: () => []
})

const cloneCountries = ref<Country[]>([])
const search = ref('')
const loading = shallowRef(false)

const headers: Column[] = [
  {
    title: 'Country',
    key: 'country',
    align: 'start',
    sortable: true
  },
  { title: 'Cases', key: 'cases' },
  { title: 'Deaths', key: 'deaths' },
  { title: 'Recovered', key: 'recovered' },
  { title: 'Active', key: 'active' }
]

watchEffect(() => {
  loading.value = props.isLoading

  if (!props.isLoading) {
    cloneCountries.value = [...props.countries]
  }
})
</script>

<template>
  <v-card flat class="mt-5">
    <v-card-title class="d-flex align-center pe-2">
      Global cases
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>
    <v-divider></v-divider>

    <v-data-table
      :headers="headers"
      v-model:search="search"
      :items="cloneCountries"
      :items-per-page="10"
      :loading="loading"
    >
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
      </template>

      <template v-slot:item.country="{ item }">
        <div class="d-flex align-center">
          <v-img
            class="mr-2 float-left"
            :lazy-src="item.countryInfo.flag"
            :src="item.countryInfo.flag"
            max-width="28"
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center h-100">
                <v-progress-circular
                  color="grey-lighten-5"
                  indeterminate
                  size="16"
                  width="2"
                ></v-progress-circular>
              </div>
            </template>
          </v-img>
          {{ item.country }}
        </div>
      </template>

      <!-- Cases -->
      <template v-slot:item.cases="{ item }">
        <v-chip v-if="item.cases" color="red" text-color="white">
          {{ item.cases?.toLocaleString() }}
        </v-chip>
        <v-chip v-else color="red" text-color="white">0</v-chip>
      </template>

      <!-- Deaths -->
      <template v-slot:item.deaths="{ item }">
        <v-chip
          v-if="item.deaths"
          color="blue-grey lighten-4"
          text-color="blue-grey lighten-2"
          outlined
        >
          <v-icon class="me-1">mdi-emoticon-sad</v-icon>
          {{ item.deaths?.toLocaleString() }}
        </v-chip>
        <v-chip v-else color="blue-grey lighten-4" text-color="blue-grey lighten-2">
          <v-icon class="me-1">mdi-emoticon-sad</v-icon>0
        </v-chip>
      </template>

      <!-- Recovered -->
      <template v-slot:item.recovered="{ item }">
        <v-chip v-if="item.recovered" color="green lighten-1" text-color="white">
          <v-icon class="me-1">mdi-emoticon-happy</v-icon>
          {{ item.recovered?.toLocaleString() }}
        </v-chip>
        <v-chip v-else color="green lighten-1" text-color="white">
          <v-icon class="me-1">mdi-emoticon-happy</v-icon>0
        </v-chip>
      </template>

      <!-- Active -->
      <template v-slot:item.active="{ item }">
        <v-chip v-if="item.active" color="blue" text-color="white">
          {{ item.active?.toLocaleString() }}
        </v-chip>
        <v-chip v-else color="blue" text-color="white">0</v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>
