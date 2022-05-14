<template>
  <div class="p-4 w-full flex flex-col items-center">
    <p class="text-center">
      Username:<br /><span class="underline">{{ githubUser.login }}</span>
    </p>
    <div class="hr" />
    <p class="text-center">
      Avatar:<br /><img
        :src="githubUser.avatar_url"
        :class="`w-[${avatar_size}] h-[${avatar_size}]`"
      />
      <span class="text-xs">{{ avatar_size }} x {{ avatar_size }}</span>
    </p>
    <div class="hr" />

    <p class="text-center">Repos:</p>
    <user-repos :reposUrl="githubUser.repos_url" />
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const githubUser = await context.$axios.$get(
      `https://api.github.com/user/${context.$fire.auth.currentUser.providerData[0].uid}`
    );
    return { githubUser };
  },
  middleware: "auth",
  methods: {
    logout() {
      this.$fire.auth.signOut();
    },
  },
  data: () => {
    return {
      avatar_size: "100px",
    };
  },
};
</script>

<style scoped>
.hr {
  @apply w-full h-[1px] bg-gray-300;
}
</style>