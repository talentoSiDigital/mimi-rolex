import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', {
  state: () => {
    return { loader: false }
  },

  actions: {
    change() {
      this.loader = !this.loader
    },
  },
})