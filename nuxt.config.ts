import { resolve } from "path";


export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/")
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],

}

)
