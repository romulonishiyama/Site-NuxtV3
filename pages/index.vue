<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h2 class="text-center">Login</h2>
          </div>
          <div class="card-body">
            <form id="login-form">
              <div class="form-group">
                <label for="username">Usuário:</label>
                <input type="text" class="form-control" id="username" name="username" required>
              </div>

              <div class="form-group">
                <label for="password">Senha:</label>
                <input type="password" class="form-control" id="password" name="password" required>
              </div>

              <div class="form-group mb-3">
                <button type="submit" class="btn btn-primary btn-block" id="login">Login</button>
              </div>
            </form>

            <div class="text-center mt-3">
              <a href="#" id="forgot-password-link">Esqueceu a senha?</a>
            </div>

            <div class="text-center mt-3">
              <a href="#" @click="consumir" id="new-user-link">Cadastrar novo usuário</a>
            </div>
          </div>
        </div>
      </div>
    </div>

{{ dados }}
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { minhaVariavel } from 'public/script';

const route = useRoute()

useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' },
  { src: './script.js' }]
})

const teste = () => {
  console.log(route)
}

</script>
<script lang="ts">
export default {
  data() {
    return {
      dados: ''
    }
  },

  methods: {
    async consumir() {
      let d = await axios.get('api.js');
      this.dados = d.data[0].id
     console.log(d.data)


    }
  }
}

</script>
 

<style scoped>
#login {
  margin-top: 10px;
}
</style>
