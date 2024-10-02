<template>
  <PageLayout v-if="error">
    <div class="content-layout">
      <h1 id="page-title" class="content__title">Error</h1>
      <div class="content__body">
        <p id="page-description">
          <span>{{ error.message }}</span>
        </p>
      </div>
    </div>
  </PageLayout>
  <div class="page-layout" v-else>
    <NavBar />
    <MobileNavBar />
    <div class="page-layout__content" />
  </div>
</template>

<script>
import NavBar from "@/components/navigation/desktop/nav-bar.vue";
import MobileNavBar from "@/components/navigation/mobile/mobile-nav-bar.vue";
import PageLayout from "@/components/page-layout.vue";

export default {
  components: {
    NavBar,
    MobileNavBar,
    PageLayout,
  },
  data() {
    return {
      error: this.$auth0.error,
    };
  },
};
</script>
