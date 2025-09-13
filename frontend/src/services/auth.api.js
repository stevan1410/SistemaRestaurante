import { http } from './http';

export const AuthAPI = {
  login: (email, password) => http('/auth/login', { method:'POST', body:{ email, password } }),
  me:    () => http('/auth/me'),
};
