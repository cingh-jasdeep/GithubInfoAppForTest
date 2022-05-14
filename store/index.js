export const actions = {
  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    if (window.$nuxt) {
      window.$nuxt.$router.push(authUser ? "/profile-info" : "/");
    } else {
      window.onNuxtReady(() => {
        window.$nuxt.$router.push(authUser ? "/profile-info" : "/");
      });
    }
  },
};
