// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-svgo',
  ],
  svgo: {
    defaultImport: 'component',
  },
  vue: {
    config: {
      devtools: true,
    }
  }
})