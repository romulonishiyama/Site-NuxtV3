<template>
    <div>
        <h1 class="text-white">Contato</h1>

        <table class="table text-white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>AÇÃO</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="u in users">
                    <td>{{ users.indexOf(u) + 1 }}</td>
                    <td>{{ u.first_name }}</td>
                    <td><button class="btn btn-primary">Editar</button><button class="btn btn-danger">Deletar</button></td>
                </tr>

            </tbody>
        </table>

    </div>
</template>
<script lang="ts" setup>
const users = useUsuarios().usuarios;

console.log(users)

</script>