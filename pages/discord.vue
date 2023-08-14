<template>
    <div>
        <h1 class="text-white">Discord</h1>
        <img :src=teste() alt="">
        <input type="text" v-model="resultado">
        <p class="text-white" >{{ teste }}</p>
        {{ resultado }}
    </div>
</template>
<script lang="ts" setup>




const array = ref(["_nuxt/assets/dog.jfif", "_nuxt/assets/cafe.jpg"]).value

const resultado = ref()

function teste(){
    return resultado.value === 'dog'? array[0] : array[1] ;

}
 
// const dogComputed = computed(() => {
    
//     return resultado.value === 'dog'? array[0] : array[1] ;

// })


</script>