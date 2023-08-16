<template>
    <h3 class="text-white">Filho</h3>
    <button @click="$emit('imprimir')">enviar</button>

</template>
<script lang="ts" setup>

const emit = defineEmits(
    ['imprimir']
)

</script>