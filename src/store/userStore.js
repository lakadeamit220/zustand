import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const userStore = create(
  persist(
    (set) => ({
      user: { name: '', email: '' },
      setUser: (userData) => set({ user: userData }),
      clearUser: () => set({ user: { name: '', email: '' } }),
    }),
    {
      name: 'zustand-store', // Key in localStorage
      storage: createJSONStorage(() => localStorage), // Use localStorage
    }
  )
);

export default userStore;