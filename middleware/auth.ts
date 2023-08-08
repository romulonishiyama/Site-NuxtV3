import users from '../server/api.json'
const logado = false
export default defineNuxtRouteMiddleware((to, from) => {
  const r = useRoute()
  
  console.log(users.usuarios[0])



  // if(r.query.username == '2')
  // console.log(r.query.username)

  // if(logado) {
  //   return navigateTo('/home')
  // }else {
  //   return navigateTo('/')
  // }
  
})
