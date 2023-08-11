export default defineNuxtRouteMiddleware((to, from) => {
    setTimeout(() => {
        navigateTo("/")
    }, 8000);

})