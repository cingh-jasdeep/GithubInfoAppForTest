export const actions = {
  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    if (!authUser) {
      // claims = null
      // Perform logout operations
      window.onNuxtReady(() => {
        window.$nuxt.$router.push("/");
      });
    } else {
      // Do something with the authUser and the claims object...
      window.onNuxtReady(() => {
        window.$nuxt.$router.push("/profile-info");
      });
    }
  },
};
