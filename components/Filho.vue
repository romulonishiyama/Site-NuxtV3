<template>
    <h3 class="text-white">Filho</h3>
  <h2 class="text-white">  {{ nome }}</h2>
</template>
<script lang="ts" setup>
const c = defineProps(
    {
        nome: String
    }
)



</script>