// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/content',
  ],

  content: {
    // Optional: Customize the content module
    markdown: {
      remarkPlugins: ['remark-prism'], // Add syntax highlighting
    },
    highlight: {
      theme: 'github-dark', // Choose a syntax highlighting theme
    },
  },

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['ion-icon'].includes(tag), // Fix for ion-icon warning
    },
  },
  runtimeConfig: {
    hfApiKey: process.env.HF_API_KEY,
  },
});