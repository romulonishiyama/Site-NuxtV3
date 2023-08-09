<template>
    <div>
        <Formulario/>

    </div>
</template>

<script lang="ts" setup>

definePageMeta({
    layout: 'autenticacao',
})

const appp = useAsyncData();

console.log(appp)

</script>



