const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/GithubInfoAppForTest/",
        },
      }
    : {};
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ...routerBase,
  ssr: false,
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "GithubInfoAppForTest",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/firebase",
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyASmsv48evbVfM03QIcbxiFsYAbXvDaMnw",
      authDomain: "githubinfoappfortest.firebaseapp.com",
      projectId: "githubinfoappfortest",
      storageBucket: "githubinfoappfortest.appspot.com",
      messagingSenderId: "945800677665",
      appId: "1:945800677665:web:a185148025dad68d83d660",
      measurementId: "G-3ET5CSV33B",
    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: "onAuthStateChangedAction",
        },
      },
      analytics: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
