
import api from './api';



const UsersService = {
  signUp: ({ 
    name, 
    email, 
    password, 
    password_confirmation 
  }) => 
    api.post('/auth/v1/user', {
      name,
      email,
      password,
      password_confirmation
    }),
  signIn: ({ email, password }) => 
    api.post('auth/v1/user/sign_in', {
      email,
      password
    }),
}



export default UsersService;

