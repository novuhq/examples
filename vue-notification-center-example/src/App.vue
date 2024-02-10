<script setup lang="ts">
import NotificationCenterWrapper from "./components/NotificationCenterWrapper.vue";
</script>

<template>
  <main>
    Change <span class="bold">SUBSCRIBER_ID</span> and
    <span class="bold">APPLICATION_IDENTIFIER</span> values in
    <code>src/components/NotificationCenterWrapper.vue</code> to your own values
    to remove loader
    <NotificationCenterWrapper />
  </main>
</template>

<style scoped>
.bold {
  font-size: "18px";
  font-weight: bold;
}
</style>
