<template>
  <div class="p-4 w-full flex flex-col items-center">
    <button
      class="
        absolute
        top-3
        right-5
        rounded
        bg-[#181717]
        text-white
        flex
        justify-center
        items-center
        p-2
      "
      @click="$auth.logout()"
    >
      Logout
    </button>
    <p class="text-center">
      Username:<br /><span class="underline">{{ $auth.user.login }}</span>
    </p>
    <div class="hr" />
    <p class="text-center">
      Avatar:<br /><img
        :src="$auth.user.avatar_url"
        class="w-[100px] h-[100px]"
      />
      <span class="text-xs">{{ avatar_size }} x {{ avatar_size }}</span>
    </p>
    <div class="hr" />

    <p class="text-center">Repos:</p>
    <user-repos :reposUrl="$auth.user.repos_url" />
  </div>
</template>

<script>
export default {
  middleware: "auth",
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