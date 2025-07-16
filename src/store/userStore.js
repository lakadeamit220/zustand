import { create } from 'zustand';

// Define the store
const userStore = create((set) => ({
  // State
  user: { name: '', email: '' },

  // Actions
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: { name: '', email: '' } }),
}));

export default userStore;