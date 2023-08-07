<template>
    <div>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h4>Formulário de Login</h4>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <label for="username">Usuário:</label>
                                    <input type="text" class="form-control" id="username" name="username" required>
                                </div>
                                <div class="form-group">
                                    <label for="password">Senha:</label>
                                    <input type="password" class="form-control" id="password" name="password" required>
                                </div>
                                <button type="submit" class="btn btn-primary btn-block">Login</button>
                            </form>
                            <div class="mt-3">
                                <p>Não tem uma conta? <a href="#">Novo Cadastro</a></p>
                                <p><a href="#">Esqueceu a Senha</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button @click.prevent="consumir">enviar</button>
        <h1>{{ userLogado }}</h1>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';

const objeto = ref();
const userLogado = ref();

const consumir = async () => {
    const api = await axios.get('api.js')
    objeto.value = ref(api.data);

    objeto.value._value.forEach(element => {
        if (username.value == element.first_name && password.value == element.senha) {
            userLogado.value = element;
            return navigateTo('/home')         }

        return console.log('nao logado');
    });
}
</script>


