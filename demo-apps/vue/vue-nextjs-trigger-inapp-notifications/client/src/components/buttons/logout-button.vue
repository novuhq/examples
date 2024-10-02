<template>
  <button class="button__logout" @click="handleLogout">Log Out</button>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      localStorage.removeItem("sent-novu-notification");
      this.$auth0.logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
      });
    },
  },
};
</script>
