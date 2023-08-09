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
                            <form action="/login">
                                <div class="form-group">
                                    <label for="username">Usuário:</label>
                                    <input type="text" class="form-control" id="username" name="first_name" required>
                                </div>
                                <div class="form-group">
                                    <label for="password">Senha:</label>
                                    <input type="password" class="form-control" id="password" name="senha" required>
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
    </div>
</template>

<script lang="ts" setup>




</script>




