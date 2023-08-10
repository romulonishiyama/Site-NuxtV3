const rotas: string[] = [];
export default defineNuxtRouteMiddleware((to, from) => {
    const r = useRouter();
    const param = useRoute();
    r.options.routes.forEach((e) => {
        rotas.push(e.path)
    }) 
    console.log(rotas);

    
})

