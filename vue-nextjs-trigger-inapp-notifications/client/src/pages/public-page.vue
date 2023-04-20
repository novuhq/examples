<template>
  <PageLayout>
    <div class="content-layout">
      <h1 id="page-title" class="content__title">Public Page</h1>

      <CodeSnippet title="Public Message" :code="message" />
    </div>
  </PageLayout>
</template>

<script>
import CodeSnippet from "@/components/code-snippet.vue";
import PageLayout from "@/components/page-layout.vue";
import { faCoffee, faBell } from "@fortawesome/free-solid-svg-icons";
import BellIcon from "@/icons/bell.svg?component";

export default {
  components: {
    PageLayout,
    CodeSnippet,
    BellIcon
  },
  data() {
    return {
      applicationIdentifier: "N5jDxZak49LJ",
      subscriberId: "on-boarding-subscriber-id-123",
      message: "This is a public page. No need to secure it.",
      popover: "bottom-start",
      faCoffee: faCoffee,
      faBell: faBell,
      styles: {
        bellButton: {
          dot: {
            "> rect": {
              fill: "green",
            },
            left: "15%",
          },
          root: {
            backgroundColor: "black",
            color: "white",
            fill: "white",
            borderRadius: "50%",
            "> svg": { minWidth: "45px", height: "45px" },
            width: "50px",
            height: "50px",
          },
          svg: {
            height: "290px",
          }
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
