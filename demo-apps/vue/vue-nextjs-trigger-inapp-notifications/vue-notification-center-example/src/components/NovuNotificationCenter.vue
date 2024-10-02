<script setup lang="ts">
import { styles } from "./styles";
</script>

<script lang="ts">
export default {
  data() {
    const SUBSCRIBER_ID =
      import.meta.env.VITE_NOVU_SUBSCRIBER_ID ?? "SUBSCRIBER_ID";
    const APPLICATION_IDENTIFIER =
      import.meta.env.VITE_NOVU_APPLICATION_IDENTIFIER ??
      "APPLICATION_IDENTIFIER";

    return {
      applicationIdentifier: APPLICATION_IDENTIFIER,
      subscriberId: SUBSCRIBER_ID,

      // optional props
      backendUrl: "https://api.novu.co",
      socketUrl: "https://ws.novu.co",
      subscriberHash: "SUBSCRIBER_HASH",
      i18n: "en",
      stores: [
        {
          storeId: "default_store",
        },
        /** storeId and feedIdentifier must be identical and should be copied from In-App editor feed */
        {
          storeId: "product-updates",
          query: { feedIdentifier: "product-updates" },
        },
        {
          storeId: "user-activity",
          query: { feedIdentifier: "user-activity" },
        },
      ],
      tabs: [
        { name: "All Notifications", storeId: "default_store" },
        // name can be any custom name
        { name: "Product Updates", storeId: "product-updates" },
        { name: "User Activity", storeId: "user-activity" },
      ],
      showUserPreferences: true,
      allowedNotificationActions: true,
      colorScheme: "dark",
      popoverConfig: {
        position: "bottom-right",
        offset: 40,
      },
    };
  },
  methods: {
    sessionLoaded() {
      console.log("Vue notification center  loaded!");
    },

    notificationClicked(message: any) {
      console.log("Notification clicked:", message);
    },

    actionClicked(
      workflowTriggerIdentifier: string,
      actionButtonType: string,
      message: any
    ) {
      console.log(
        "Action clicked - workflowTriggerIdentifier:",
        workflowTriggerIdentifier
      );
      console.log("Action clicked - actionButtonType:", actionButtonType);
      console.log("Action clicked - message:", message);
    },

    tabClicked(data: any) {
      console.log("Tab clicked:", data);
    },

    unseenCountChanged(count: number) {
      console.log("Unseen count changed", count);
    },

    preferenceFilter(preferences: any) {
      if (preferences.template.tags.includes("don-not-show-tag")) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<template>
  <NotificationCenterComponent
    :subscriberId="subscriberId"
    :applicationIdentifier="applicationIdentifier"
    :backendUrl="backendUrl"
    :socketUrl="socketUrl"
    :subscriberHash="subscriberHash"
    :i18n="i18n"
    :stores="stores"
    :tabs="tabs"
    :styles="styles"
    :showUserPreferences="showUserPreferences"
    :allowedNotificationActions="allowedNotificationActions"
    :colorScheme="colorScheme"
    :popoverConfig="popoverConfig"
    :sessionLoaded="sessionLoaded"
    :notificationClicked="notificationClicked"
    :unseenCountChanged="unseenCountChanged"
    :actionClicked="actionClicked"
    :tabClicked="tabClicked"
    :preferenceFilter="preferenceFilter"
  >
  </NotificationCenterComponent>
</template>

<style scoped></style>
