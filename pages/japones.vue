<template>
    <h2 class="text-white" :class="cor">Cor: {{ cor }}</h2>
    <button @click="mudarCor('vermelho')">Mudar cor para vermelho</button>
    <button @click="mudarCor('azul')">Mudar cor para azul</button>
</template>

<script lang="ts" setup>

const cor = ref('');

const mudarCor = (c: string) => {
    cor.value = c;
}
</script>

<style scoped>
.azul {
    background-color: blue;
}

.vermelho {
    background-color: red;
}
</style>