<template>
    <div class="p-5">
        <h1 class="text-white">
            Android
        </h1>
        <table class="table text-white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>IDADE</th>
                    <th>EMAIL</th>
                    <th>TELEFONE</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="p in pessoas" class="table-active">
                    <td>{{ p.id }}</td>
                    <td>{{ p.nome }}</td>
                    <td>{{ p.idade }}</td>
                    <td>{{ p.email }}</td>
                    <td>{{ p.telefone }}</td>
                </tr>            
            </tbody>
        </table>


    </div>
</template>

<script setup>

const pessoas = usePessoas();
</script>