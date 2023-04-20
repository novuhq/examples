<template>
  <div v-if="isLoading" class="page-layout">
    <PageLoader />
  </div>
  <router-view v-else />
</template>

<script>
import PageLoader from "@/components/page-loader.vue";

export default {
  components: {
    PageLoader,
  },
  data() {
    return {
      isLoading: this.$auth0.isLoading,
    };
  },
};
</script>
