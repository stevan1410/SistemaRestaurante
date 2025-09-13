import { create } from 'zustand';
import { AuthAPI } from '../services/auth.api';

export const useAuth = create((set) => ({
  user: null,
  loading: false,

  // login con opción de persistencia
  login: async (email, password, { persist = false } = {}) => {
    set({ loading: true });
    try {
      const { token, user } = await AuthAPI.login(email, password);
      const storage = persist ? localStorage : sessionStorage;
      storage.setItem('token', token);
      // limpia el otro storage para evitar desalineación
      (persist ? sessionStorage : localStorage).removeItem('token');
      set({ user });
      return true;
    } finally { set({ loading: false }); }
  },

  fetchMe: async () => {
    try { const me = await AuthAPI.me(); set({ user: me }); }
    catch { localStorage.removeItem('token'); sessionStorage.removeItem('token'); set({ user: null }); }
  },

  logout: () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    set({ user: null });
  },
}));
