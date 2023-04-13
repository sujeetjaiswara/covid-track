<template>
  <div>
    <v-row v-if="isLoading" dense>
      <v-col lg="4" md="4" sm="4" cols="12">
        <v-skeleton-loader
          ref="skeleton"
          type="card"
          :boilerplate="isboilerplate"
          :tile="isTile"
          :height="loaderHeight"
        ></v-skeleton-loader>
      </v-col>

      <v-col lg="2" md="2" sm="2" cols="6">
        <v-skeleton-loader
          ref="skeleton"
          type="card"
          :boilerplate="isboilerplate"
          :tile="isTile"
          :height="loaderHeight"
        ></v-skeleton-loader>
      </v-col>

      <v-col lg="2" md="2" sm="2" cols="6">
        <v-skeleton-loader
          ref="skeleton"
          type="card"
          :boilerplate="isboilerplate"
          :tile="isTile"
          :height="loaderHeight"
        ></v-skeleton-loader>
      </v-col>

      <v-col lg="2" md="2" sm="2" cols="6">
        <v-skeleton-loader
          ref="skeleton"
          type="card"
          :boilerplate="isboilerplate"
          :tile="isTile"
          :height="loaderHeight"
        ></v-skeleton-loader>
      </v-col>

      <v-col lg="2" md="2" sm="2" cols="6">
        <v-skeleton-loader
          ref="skeleton"
          type="card"
          :boilerplate="isboilerplate"
          :tile="isTile"
          :height="loaderHeight"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isboilerplate: false,
      isTile: false,
      loaderHeight: 86
    };
  }
};
</script>

<style lang="scss" scoped></style>
