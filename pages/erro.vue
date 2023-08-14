<template>
    <div id="erro" >
        <img src="../assets/erro.png" alt="" >
    </div>
</template>
<script lang="ts" setup>

definePageMeta ({
    layout: 'autenticacao'
})
setTimeout(() => {
    navigateTo('/')
}, 3000)
</script>
<style scoped>
#erro {
    text-align: center;
    margin-top: 120px;
}

</style>