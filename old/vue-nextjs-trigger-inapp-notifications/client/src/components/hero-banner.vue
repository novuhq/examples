<template>
  <div class="" v-bind:style="heroStyles">
    <div class="hero-banner__logo">
      <img class="hero-banner__image" :src="logo" alt="Vue 3 logo" />
    </div>
    <h1 class="hero-banner__headline">Hello, Vue 3 World!</h1>
    <p class="hero-banner__description">
      <span
        >This is a sample application that demonstrates securing your app &
        triggering notifications for Vue 3 apps with Auth0 &
        <strong>Novu.</strong>
      </span>
    </p>

    <button
      class="button button--secondary"
      v-bind:style="styles"
      @click="triggerNotification"
    >
      Trigger a Notification Now
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: "",
      logo: "https://cdn.auth0.com/blog/developer-hub/vue-logo.svg",
      styles: {
        color: "white",
        "background-image":
          "linear-gradient(99deg, rgb(221, 36, 118) 0%, rgb(221, 36, 118) 0%, rgb(255, 81, 47) 100%, rgb(255, 81, 47) 100%)",
      },
      heroStyles: {
        color: "white",
        "background-color": "#2a2e3",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        width: "100%",
        margin: "0 auto",
        padding: "3.2rem 6.4rem",
      }
    };
  },
  methods: {
    triggerNotification() {

      const apiServerUrl = import.meta.env.VITE_API_SERVER_URL;
      
      fetch(`${apiServerUrl}/api/trigger-notification`, {
        method: "POST",
        body: JSON.stringify({ uuid: "on-boarding-subscriber-id-123" }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.finish);
        });
    },
  },
};
</script>
