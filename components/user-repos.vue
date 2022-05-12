<template>
  <div>
    <p class="text-center" v-if="$fetchState.pending">Fetching repos...</p>
    <p class="text-center" v-else-if="$fetchState.error">
      Error fetching repos :(
    </p>
    <div class="text-center" v-else>
      Total: {{ repos.length }}
      <p class="text-center" v-for="(repo, idx) in repos" :key="idx">
        {{ repo.name }}<br /><a class="link" :href="repo.html_url">{{
          repo.html_url
        }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reposUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      repos: null,
    };
  },
  async fetch() {
    this.repos = await this.$axios.$get(this.reposUrl);
  },
};
</script>

<style scoped>
</style>