import { defineStore } from 'pinia'

export const useThemeModeStore = defineStore('themeMode', {
    state: () => ({ 
        dark: false
    }),
    actions: {
        toggle() {
          this.dark = !this.dark;
        },
    },
})