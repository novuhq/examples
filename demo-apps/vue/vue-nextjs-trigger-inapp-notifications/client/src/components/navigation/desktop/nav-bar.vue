<template>
  <div class="nav-bar__container">
    <nav class="nav-bar">
      <NavBarBrand />
      <NavBarTabs />
      <NavBarButtons />
    </nav>
  </div>
</template>

<script>
import NavBarBrand from "@/components/navigation/desktop/nav-bar-brand.vue";
import NavBarButtons from "@/components/navigation/desktop/nav-bar-buttons.vue";
import NavBarTabs from "@/components/navigation/desktop/nav-bar-tabs.vue";

export default {
  components: { NavBarBrand, NavBarButtons, NavBarTabs },
};
</script>
