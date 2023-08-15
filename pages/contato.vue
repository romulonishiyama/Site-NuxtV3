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
                <tr v-for="(us, index) in users">
                    <td> {{ index + 1 }} </td>
                    <td>{{ us.first_name }}</td>
                    <td>
                        <button class="btn btn-primary">Editar</button>
                        <button class="btn btn-danger" :id="index" @click="removerContato($event)">Deletar</button>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts" setup>

let u = ref(0)
const users = computed(() => {
    u.value = useUsuarios().usuarios;
    console.log(u.value)
    return u.value
})

const removerContato = (e) => {
    let posicao = e.target.id
    u.value.splice(posicao, 1)
    console.log(posicao)

}

</script>