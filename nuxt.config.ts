
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Nishiyama"
    },

  },
  alias: {

  },

  runtimeConfig: {
    password: process.env.API_SECRET,

    public: {
      senha: process.env.API_SECRET,
    }
  },


  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/global-styles.css'
  ],





}

)
