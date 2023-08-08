const logado = false;

export default defineNuxtRouteMiddleware((to, from) => {
    if(logado){
        console.log('aqui')

    }else {
        console.log('aqui')

    }
})