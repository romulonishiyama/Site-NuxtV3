<template>
    <div class="container mt-5">
        <form action="/login/novousuario" method="post" @submit="cadastrar">
            <div class="mb-3">
                <label for="nome" class="form-label text-white">Nome</label>
                <input type="text" class="form-control" id="nome" name="nome" required>
            </div>
            <div class="mb-3">
                <label for="senha" class="form-label text-white">Senha</label>
                <input type="password" class="form-control" id="senha" name="senha" required>
            </div>
            <button class="btn btn-primary">Cadastrar</button>
        </form>
    </div>
</template>

<script lang="ts" setup>

interface Pessoa {
  nome: string;
  idade: number;
  profissao: string;
}

const pessoa: Pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor"
};
</script>

<style></style>