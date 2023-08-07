<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <img src="../public/favicon.ico">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <NuxtLink to="/home" class="nav-link">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/sobre" class="nav-link">Sobre</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/contato" class="nav-link">Contato</NuxtLink>
                        </li>
                    </ul>
                </div>
                <button type="button" class="btn btn-primary">Sair</button>
            </div>
        </nav>
        <slot></slot>
    </div>
</template>
<script lang="ts">
</script>