
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Nishiyama"
    }
  },

  runtimeConfig: {
    password: process.env.API_SECRET,

    public: {
      senha: process.env.API_SECRET,
    }
  },
  alias: {
    "~": "/<rootDir>",
    "@": "/<rootDir>",
    "~~": "/<rootDir>",
    "@@": "/<rootDir>",
    assets: "/<rootDir>/assets",
    public: "/<rootDir>/public"

  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],




}

)
