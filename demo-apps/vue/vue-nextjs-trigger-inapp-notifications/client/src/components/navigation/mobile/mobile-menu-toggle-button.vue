<template>
  <span
    class="mobile-nav-bar__toggle material-icons"
    id="mobile-menu-toggle-button"
    @click="mobileMenuStore.toggleMobileMenu()"
  >
    {{ mobileMenuStore.mobileMenuIcon }}</span
  >
</template>

<script>
import { mobileMenuStore } from "./mobile-menu.store.js";

export default {
  props: {
    icon: String,
  },
  data() {
    return {
      mobileMenuStore,
    };
  },
};
</script>
