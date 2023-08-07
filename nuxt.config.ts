import { resolve } from "path";


export default defineNuxtConfig({
  devtools: { enabled: true },

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
    "assets": "/<rootDir>/assets",
    "public": "/<rootDir>/public"

  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],

 

}

)
