<script setup lang="ts">
import NotificationCenterWrapper from "./components/NovuNotificationCenter.vue";
</script>

<template>
  <main>
    To remove loader:
    <ul>
      <li>
        Environment variables are set with correct value in
        <code>.env</code> file
      </li>
    </ul>
    <NotificationCenterWrapper />
  </main>
</template>

<style scoped>
.bold {
  font-size: "18px";
  font-weight: bold;
}
</style>
