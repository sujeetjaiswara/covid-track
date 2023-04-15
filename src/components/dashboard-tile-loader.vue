<template>
  <div>
   <div>
    <v-row dense>
      <v-col lg="4" md="4" sm="4" cols="12">
        <v-skeleton-loader type="card" :boilerplate="isboilerplate" :tile="isTile" :height="loaderHeight">
        </v-skeleton-loader>
      </v-col>

      <v-col lg="2" md="2" sm="2" cols="6">
        <v-skeleton-loader type="card" :boilerplate="isboilerplate" :tile="isTile" :height="loaderHeight">
        </v-skeleton-loader>
      </v-col>

      <v-col lg="2" md="2" sm="2" cols="6">
        <v-skeleton-loader type="card" :boilerplate="isboilerplate" :tile="isTile" :height="loaderHeight">
        </v-skeleton-loader>
      </v-col>

      <v-col lg="2" md="2" sm="2" cols="6">
        <v-skeleton-loader type="card" :boilerplate="isboilerplate" :tile="isTile" :height="loaderHeight">
        </v-skeleton-loader>
      </v-col>

      <v-col lg="2" md="2" sm="2" cols="6">
        <v-skeleton-loader type="card" :boilerplate="isboilerplate" :tile="isTile" :height="loaderHeight">
        </v-skeleton-loader>
      </v-col>
    </v-row>
   </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isboilerplate = ref(false);
const isTile = ref(false);
const loaderHeight = ref(10);
</script>

<style lang="scss" scoped></style>
