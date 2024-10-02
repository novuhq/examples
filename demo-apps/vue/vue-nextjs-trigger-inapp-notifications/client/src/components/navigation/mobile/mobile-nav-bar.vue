<template>
  <div class="mobile-nav-bar__container">
    <nav class="mobile-nav-bar">
      <MobileNavBarBrand />
      <MobileMenuToggleButton />
      <div
        v-if="mobileMenuStore.isMobileMenuOpen()"
        class="mobile-nav-bar__menu"
      >
        <MobileNavBarTabs />
        <MobileNavBarButtons />
      </div>
    </nav>
  </div>
</template>

<script>
import MobileMenuToggleButton from "@/components/navigation/mobile/mobile-menu-toggle-button.vue";
import MobileNavBarBrand from "@/components/navigation/mobile/mobile-nav-bar-brand.vue";
import MobileNavBarButtons from "@/components/navigation/mobile/mobile-nav-bar-buttons.vue";
import MobileNavBarTabs from "@/components/navigation/mobile/mobile-nav-bar-tabs.vue";
import { mobileMenuStore } from "./mobile-menu.store.js";

export default {
  components: {
    MobileMenuToggleButton,
    MobileNavBarBrand,
    MobileNavBarButtons,
    MobileNavBarTabs,
  },
  data() {
    return {
      mobileMenuStore,
    };
  },
  mounted() {
    this.$router.afterEach(() => {
      if (mobileMenuStore.isMobileMenuOpen()) {
        mobileMenuStore.closeMobileMenu();
      }
    });
  },
};
</script>
