<template>
  <div class="nav-bar__buttons">
    <template v-if="!isAuthenticated">
      <SignupButton />
      <LoginButton />
      <NotificationButton />
    </template>
    <template v-if="isAuthenticated">
      <LogoutButton />
      <NotificationButton />
    </template>
  </div>
</template>

<script>
import LoginButton from "@/components/buttons/login-button.vue";
import LogoutButton from "@/components/buttons/logout-button.vue";
import SignupButton from "@/components/buttons/signup-button.vue";
import NotificationButton from "@/components/buttons/notification-button.vue";

export default {
  components: { LoginButton, LogoutButton, SignupButton, NotificationButton },
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },
};
</script>
