<template>
    <div>
        <h1 class="text-white">Pai</h1>
        

        <Filho @imprimir="msg"/>

    </div>
</template>

<script lang="ts" setup>
const msg = () => {
    console.log('em emits')
}

</script>