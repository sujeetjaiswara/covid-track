<template>
  <div>
    <v-snackbar v-model="snackWithButtons" :timeout="timeout" bottom center class="snack">
      {{ snackWithBtnText }}
      <v-spacer />
      <v-btn dark text color="green" outlined @click="refreshApp">
        {{ snackBtnText }}
      </v-btn>
      <v-btn dark text color="#ffffff" outlined @click="snackWithButtons = false">
        <!-- <v-icon text>mdi-close</v-icon> -->
        {{ snackBtnNoText }}
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';

const refreshing = ref(false);
const registration = ref<any>(null);
const updateExists = ref(false);
const snackBtnText = ref("");
const snackBtnNoText = ref("No");
const snackWithBtnText = ref("");
const snackWithButtons = ref(false);
const timeout = ref(0);

onMounted(() => {
  // Listen for swUpdated event and display refresh snackbar as required.
  document.addEventListener("swUpdated", showRefreshUI, { once: true });
  // Refresh all open app tabs when a new service worker is installed.
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing.value) return;
    refreshing.value = true;
    window.location.reload();
  });
});

function showRefreshUI(e: any) {
  // Store the ServiceWorkerRegistration instance for later use.
  registration.value = e.detail;
  updateExists.value = true;
  snackBtnText.value = "Yes";
  snackWithBtnText.value = "There is new update available. Do you want to update it?";
  snackWithButtons.value = true;
}

// Handle a user tap on the update app button.
function refreshApp() {
  updateExists.value = false;

  // Protect against missing registration.waiting.
  if (!registration.value || !registration.value.waiting) {
    return;
  }

  registration.value.waiting.postMessage("skipWaiting");
}
</script>

<style lang="scss" scoped>
/* Provide better right-edge spacing when using an icon button there. */
// .snack >>> .v-snack__content {
//   padding-right: 16px;
// }
</style>
