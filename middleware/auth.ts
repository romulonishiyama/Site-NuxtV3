import users from '../server/api.json'
const logado = false
export default defineNuxtRouteMiddleware((to, from) => {
  const r = useRoute()

  const flag = users.usuarios.some((e) => {
    return (e.senha == r.query.senha) && e.first_name == (r.query.first_name);
  } 
  )
  
  if(flag){
    return navigateTo('/home')
  }
  return navigateTo('/')


})
