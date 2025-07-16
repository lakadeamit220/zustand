import { create } from 'zustand';

// Define the store
const useStore = create((set) => ({
  // State
  user: { name: '', email: '' },

  // Actions
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: { name: '', email: '' } }),
}));

export default useStore;