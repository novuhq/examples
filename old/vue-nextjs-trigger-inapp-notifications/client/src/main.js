import { createAuth0 } from "@auth0/auth0-vue";
import { createApp } from "vue";
import SvgIcon from "vue3-icon";

import "./assets/css/styles.css";
import router from "./router";

import NotificationCenterPlugin from "@novu/notification-center-vue";
import "@novu/notification-center-vue/dist/style.css";

import App from "./app.vue";

const app = createApp(App);

app
  .use(router)
  .use(
    createAuth0({
      domain: import.meta.env.VITE_AUTH0_DOMAIN,
      clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
      authorizationParams: {
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
      },
    })
  )
  .use(NotificationCenterPlugin)
  .component("svg-icon", SvgIcon)
  .mount("#root");
