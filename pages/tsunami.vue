<template>
    <div>
        <button type="button" @click="dogs">Enviar</button>

        <h1 class="text-white">Tsunami</h1>

        <p v-for="d in dogsApi">
            <img :src="d" alt="../assets/cafe.jpg" class="text-white">
        </p>


    </div>
</template>
<script lang="ts" setup>


const dogsApi = ref()

const dogs = async () => {
    const dogsConvertido = await $fetch('https://dog.ceo/api/breed/akita/images')
    dogsApi.value = dogsConvertido.message
    return dogsConvertido
}



</script>