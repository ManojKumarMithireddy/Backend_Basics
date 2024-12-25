import {create} from 'zustand';

const useUserStore = create((set) => ({
  user: {},
  initializeUser: () => {
    if (typeof window !== 'undefined') {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        set({ user: storedUser });
      }
    }
  },
  setUser: (user) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
    set({ user });
  },
}));

export { useUserStore };