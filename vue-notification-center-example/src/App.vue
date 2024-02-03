<script setup lang="ts">
import NotificationCenterWrapper from './components/NotificationCenterWrapper.vue';
</script>

<template>
   <main>
    Change <span class="bold">subscriberId</span> and <span class="bold">applicationIdentifier</span> values in <code>src/components/NotificationCenterWrapper.vue</code> to your own values to remove loader
    <NotificationCenterWrapper />
   </main>   
</template>

<style scoped>

.bold {
  font-size: "18px";
  font-weight: bold;
}

</style>