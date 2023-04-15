<template>
  <v-row class="mt-5">
    <v-col lg="8" md="4" sm="4" cols="12">
      <!-- <h4>Cases</h4> -->
    </v-col>
    <v-col lg="4" md="4" sm="4" cols="12">
      <v-text-field v-model="search" label="Search country" append-inner-icon="mdi-magnify" single-line hide-details
        density="compact" variant="outlined" class="w-50 float-right" :height="20" color="#000"
        @update:modelValue="onSearch"></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const search = ref("");
const emit = defineEmits(['searchCountry']);

function onSearch(value: string) {
  emit('searchCountry', value);
}
</script>