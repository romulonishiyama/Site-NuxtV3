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
                <tr v-for="us in users">
                    <td> {{ users.indexOf(us) }} </td>
                    <td>{{ us.first_name }}</td>
                    <td><button class="btn btn-primary">Editar</button><button class="btn btn-danger" :id=users.indexOf(us)  @click="removerContato($event)">Deletar</button></td>
                </tr>
                {{ users }}
            </tbody>
        </table>

    </div>
</template>
<script lang="ts" setup>

const users = computed(() => {
    let u = useUsuarios().usuarios;
    return u
})


const removerContato = (e) => {
    let posicao = e.target.id
    users.value.splice((posicao - 1), 1)
    console.log(users)

}

</script>