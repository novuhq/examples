<template>
  <a
    :href="path"
    class="page-footer__hyperlink"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    path: String,
  },
};
</script>
