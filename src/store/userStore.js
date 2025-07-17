import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';

const useStore = create(
  devtools(
    persist(
      (set) => ({
        user: { name: '', email: '' },
        setUser: (userData) => set({ user: userData }),
        clearUser: () => set({ user: { name: '', email: '' } }),
      }),
      {
        name: 'zustand-store',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useStore;