import { defineStore } from 'pinia'
import userData from '../const/data/users'
import { useGlobalStore } from "./global";

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    username: null
  }),
  getters: {
    isLogin: (state) => {
      return state.username !== null
    }
  },
  actions: {
    login(username, password) {
      if (userData.find((u) => u.username === username && u.password === password)) {
        this.username = username
        return true
      } else {
        return false
      }
    },

    logout() {
      this.username = null
    }
  }
})
