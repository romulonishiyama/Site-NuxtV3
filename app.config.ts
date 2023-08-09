export default defineAppConfig({
    theme: {
      primaryColor: '#ababab'
    },

    usuarios: {
        nome: 'romulo'
    },
    
    auth: {
      strategies: {
        local: {
          endpoints: {
            login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
            logout: { url: '/api/auth/logout', method: 'post' },
            user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
          },
          // Otros ajustes de estrategia (si es necesario)
        }
      }
    }
  })
  