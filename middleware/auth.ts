import users from '../server/apiUsuarios.json'
const logado = false


export default defineNuxtRouteMiddleware((to, from) => {
  const r = useRoute()

  const flag = users.usuarios.some((e) => {
    return (e.senha == to.query.senha) && e.first_name == (from.query.first_name);
  } 
  )

  if(flag){
    return navigateTo('/home')
  }
  return navigateTo('/')


})
