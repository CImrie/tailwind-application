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
    '@nuxt/content',
    '@nuxt/image',
  ],
  svgo: {
    defaultImport: 'component',
  },
  vue: {},
  content: {

  },
  image: {
    format: ['webp', 'avif', 'jpeg', 'png'],
  }
})
