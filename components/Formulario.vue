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
                                <button type="submit" @click.prevent="dados()"
                                    class="btn btn-primary btn-block">Login</button>
                            </form>
                            <div class="mt-3">
                                <p>Não tem uma conta? <a href="#">Novo Cadastro</a></p>
                                <p><a href="#">Esqueceu a Senha</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{ minhaVariavel }}
        </div>


    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { minhaVariavel } from '../public/script';
var senha = ref('123123')
console.log(typeof minhaVariavel)
async function dados() {
    const d = (await axios.get('api.js')).data;
    console.log(typeof d)   
    
}


</script>
<script lang="ts">

export default {
    data() {
        return {
            nomes: []
        }
    }
}

</script>