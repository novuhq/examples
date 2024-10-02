<template>
  <router-link
    :to="path"
    exact
    class="nav-bar__tab"
    active-class="nav-bar__tab--active"
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
