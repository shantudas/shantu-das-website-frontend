// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  ssr: false,

  nitro: {
    preset: "static",
  },

  css: ["./assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@vueuse/nuxt", "@nuxt/content"],

  content: {
    api: {
      baseURL: '/api/_content'
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      },
      preload: ['dart', 'javascript', 'typescript', 'vue']
    }
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },

  app: {
    head: {
      title: "Shantu Chandra Das - Senior Mobile App Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Senior Mobile Application Developer with 8+ years experience in Android, Flutter, and AI-integrated solutions.",
        },
      ],
    },
  },

  // Nuxt 4.x compatibility
  future: {
    compatibilityVersion: 4,
  },
});
