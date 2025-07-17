import { create } from 'zustand';

const themeStore = create((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => ({
    theme: state.theme === "light" ? "dark" : "light"
  })),
}));

export default themeStore;