<template>
    <h1>Home
        {{ route.params }}
        
    </h1>
</template>

<script lang="ts" setup>

const route = useRoute();

</script>