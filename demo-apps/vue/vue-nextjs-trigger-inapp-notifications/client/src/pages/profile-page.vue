<template>
  <PageLayout>
    <div class="content-layout">
      <h1 id="page-title" class="content__title">Profile Page</h1>
      <div class="content__body">
        <p id="page-description">
          <span
            >You can use the <strong>ID Token</strong> to get the profile
            information of an authenticated user.</span
          >
          <span
            ><strong
              >Only authenticated users can access this page.</strong
            ></span
          >
        </p>

        <div class="profile-grid">
          <div class="profile__header">
            <img :src="user.picture" alt="Profile" class="profile__avatar" />
            <div class="profile__headline">
              <h2 class="profile__title">{{ user.name }}</h2>
              <span class="profile__description">{{ user.email }}</span>
            </div>
          </div>
          <div class="profile__details">
            <CodeSnippet title="Decoded ID Token" :code="code" />
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script>
import CodeSnippet from "@/components/code-snippet.vue";
import PageLayout from "@/components/page-layout.vue";
import { sendNotification } from "@/services/send.service";

export default {
  components: {
    PageLayout,
    CodeSnippet,
  },
  data() {
    return {
      user: this.$auth0.user,
      message: "",
    };
  },
  computed: {
    code() {
      return JSON.stringify(this.user, null, 2);
    },
  },
  async mounted() {
    const key = "sent-novu-notification";

    if (localStorage.getItem(key)) {
      return;
    }

    const { data, error } = await sendNotification(this.user);

    if (data) {
      localStorage.setItem(key, JSON.stringify(data.finish));
    }

    if (error) {
      this.message = JSON.stringify(error, null, 2);
    }
  },
};
</script>
