<template>
    {{ route.query }}
</template>

<script lang="ts" setup>
const route = useRoute();

definePageMeta({
    middleware: 'auth'
})

</script>