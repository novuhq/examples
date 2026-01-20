<template>
  <router-link
    :to="path"
    exact
    class="mobile-nav-bar__tab"
    active-class="mobile-nav-bar__tab--active"
  >
    {{ label }}
  </router-link>
</template>

<script>
export default {
  props: {
    path: String,
    label: String,
  },
};
</script>
