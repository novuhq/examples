<template>
  <button class="button__login" @click="handleLogin">Log In</button>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      this.$auth0.loginWithRedirect({
        appState: {
          target: "/profile",
        },
        authorizationParams: {
          prompt: "login",
        }
      });
    },
  },
};
</script>
