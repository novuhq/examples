<template>
  <PageLayout>
    <HeroBanner></HeroBanner>
  </PageLayout>
</template>

<script>
import HeroBanner from "@/components/hero-banner.vue";
import PageLayout from "@/components/page-layout.vue";

export default {
  components: {
    PageLayout,
    HeroBanner,
  },
};
</script>
