<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <img src="../public/favicon.ico">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NuxtLink to="/home" class="nav-link text-white" active-class="active">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/android" class="nav-link text-white" active-class="active">Android</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/japones" class="nav-link text-white" active-class="active">Japonês</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/cafe" class="nav-link text-white" active-class="active">Café</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/discord" class="nav-link text-white" active-class="active">Discord</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/contato" class="nav-link text-white" active-class="active">Contato</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/tsunami" class="nav-link text-white" active-class="active">Tsunami</NuxtLink>
                        </li>
                    </ul>
                </div>
                <button type="button" class="btn btn-primary" @click="logout">Sair</button>
            </div>
        </nav>
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
function logout(){
    return navigateTo('/logout')
}
</script>

<style scoped>
.active {
    border-bottom: 2px solid purple;
}


</style>