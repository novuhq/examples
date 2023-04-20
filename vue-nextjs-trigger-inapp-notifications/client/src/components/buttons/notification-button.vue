<template>
  <div>
    <NotificationCenterComponent
      :subscriberId="subscriberId"
      :applicationIdentifier="applicationIdentifier"
      :sessionLoaded="sessionLoaded"
      :placement="popover"
      :styles="styles"
      :backendUrl="backendUrl"
      :socketUrl="socketUrl"
      v-slot="slot"
    >
    </NotificationCenterComponent>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applicationIdentifier: import.meta.env.VITE_NOVU_APP_IDENTIFIER,
      subscriberId: "on-boarding-subscriber-id-123",
      backendUrl: import.meta.env.VITE_NOVU_API_SERVER_URL,
      socketUrl: import.meta.env.VITE_WEBSOCKET_URL,
      message: "",
      popover: "bottom-start",
      styles: {
        bellButton: {
          dot: {
            "> rect": {},
            left: "15%",
          },
          root: {
            "> svg": { minWidth: "45px", height: "45px" },
            width: "50px",
            height: "50px",
          },
        },
      },
    };
  },
  methods: {
    sessionLoaded() {
      console.log("Session loaded!");
    },
  },
};
</script>
