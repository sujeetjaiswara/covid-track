<template>
  <div>
    <v-snackbar
      v-model="snackWithButtons"
      :timeout="timeout"
      bottom
      center
      class="snack"
    >
      {{ snackWithBtnText }}
      <v-spacer />
      <v-btn dark text color="green" outlined @click.native="refreshApp">
        {{ snackBtnText }}
      </v-btn>
      <v-btn
        dark
        text
        color="#ffffff"
        outlined
        @click="snackWithButtons = false"
      >
        <!-- <v-icon text>mdi-close</v-icon> -->
        {{ snackBtnNoText }}
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      refreshing: false,
      registration: null,
      updateExists: false,
      snackBtnText: "",
      snackBtnNoText: "No",
      snackWithBtnText: "",
      snackWithButtons: false,
      timeout: 0,
    };
  },
  created() {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener("swUpdated", this.showRefreshUI, { once: true });
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (this.refreshing) return;
      this.refreshing = true;
      window.location.reload();
    });
  },
  methods: {
    showRefreshUI(e) {
      // Store the ServiceWorkerRegistration instance for later use.
      this.registration = e.detail;
      this.updateExists = true;
      this.snackBtnText = "Yes";
      this.snackWithBtnText =
        "There is new update available. Do you want to update it?";
      this.snackWithButtons = true;
    },
    // Handle a user tap on the update app button.
    refreshApp() {
      this.updateExists = false;
      // Protect against missing registration.waiting.
      if (!this.registration || !this.registration.waiting) {
        return;
      }
      this.registration.waiting.postMessage("skipWaiting");
    },
  },
};
</script>

<style lang="scss" scoped>
/* Provide better right-edge spacing when using an icon button there. */
// .snack >>> .v-snack__content {
//   padding-right: 16px;
// }
</style>
