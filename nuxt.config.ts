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
    }
  },
  
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/content'
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
  
})
function defineNuxtConfig(config: {
  compatibilityDate: string;
  future: { compatibilityVersion: number; };
  experimental: {
    sharedPrerenderData: boolean;
    compileTemplate: boolean;
    resetAsyncDataToUndefined: boolean;
    templateUtils: boolean;
    relativeWatchPaths: boolean;
    defaults: { useAsyncData: { deep: boolean; }; };
  };
  unhead: { renderSSRHeadOptions: { omitLineBreaks: boolean; }; };
  devtools: { enabled: boolean; };
  modules: string[];
  googleFonts: { families: { Montserrat: true; }; };
  tailwindcss: { exposeConfig: boolean; viewer: boolean; };
  content: {
    markdown: { remarkPlugins: string[]; };
    highlight: { theme: string; };
  };
}) {
  return config;
}