<template>
  <v-row dense>
    <v-col v-for="(n, index) in 4" :key="index" :md="3" :sm="6">
      <v-card class="elevation-0 rounded-2 border" :min-height="100">
        <v-card-title class="headline">
          <v-skeleton-loader type="text" :height="18" :min-height="18"></v-skeleton-loader>
        </v-card-title>
        <v-card-subtitle></v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>
