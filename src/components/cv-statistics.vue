<script lang="ts" setup>
import type { Statistic } from '@/types/Statistic'
import type { StatisticsProp } from '@/types/StatisticsProp'
import { onMounted, ref } from 'vue'

const props = defineProps<StatisticsProp>()
const cloneStatistics = ref<Statistic>()
const cardHeight = ref(100)

onMounted(() => {
  cloneStatistics.value = { ...props.statistics }
})
</script>

<template>
  <v-row dense>
    <v-col :md="3" :sm="6">
      <v-card color="blue-grey lighten-1" class="elevation-0 rounded-2" :min-height="cardHeight">
        <v-card-title class="headline">
          <v-icon class="me-1">mdi-chart-line-variant</v-icon>
          {{ cloneStatistics?.cases?.toLocaleString() }}
        </v-card-title>
        <v-card-subtitle>Total Cases</v-card-subtitle>
      </v-card>
    </v-col>

    <v-col :md="3" :sm="6">
      <v-card
        color="red darken-1"
        text-color="#fff"
        class="elevation-0 rounded-2"
        :min-height="cardHeight"
      >
        <v-card-title class="headline">
          <v-icon class="me-1">mdi-emoticon-sad</v-icon>
          {{ cloneStatistics?.deaths?.toLocaleString() }}
        </v-card-title>
        <v-card-subtitle>Deaths</v-card-subtitle>
      </v-card>
    </v-col>

    <v-col :md="3" :sm="6">
      <v-card color="green lighten-1" class="elevation-0 rounded-2" :min-height="cardHeight">
        <v-card-title class="headline">
          <v-icon class="me-1">mdi-emoticon-happy</v-icon>
          {{ cloneStatistics?.recovered?.toLocaleString() }}
        </v-card-title>
        <v-card-subtitle>Recovered</v-card-subtitle>
      </v-card>
    </v-col>

    <v-col :md="3" :sm="6">
      <v-card color="blue" class="elevation-0 rounded-2" :min-height="cardHeight">
        <v-card-title class="headline">
          <v-icon class="me-1">mdi-chart-line-variant</v-icon>
          {{ cloneStatistics?.active?.toLocaleString() }}
        </v-card-title>
        <v-card-subtitle>Active Cases </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>
