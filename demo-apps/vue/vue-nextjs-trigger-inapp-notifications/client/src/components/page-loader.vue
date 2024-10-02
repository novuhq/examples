<template>
  <div class="loader">
    <img :src="loadingImg" alt="Loading..." />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingImg: "https://cdn.auth0.com/blog/hello-auth0/loader.svg",
    };
  },
};
</script>
