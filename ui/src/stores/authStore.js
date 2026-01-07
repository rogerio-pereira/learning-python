import {defineStore} from 'pinia'
import router from '../router'
import {ref} from 'vue'
import axios from 'axios'
import { useUserStore } from './userStore'

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)

    const userStore = useUserStore()

    function checkUser()
    {
        //Check user staus
        // axios.defaults.headers.common['X-Authorization'] = response.data.token
        // user.value = response.data.user
        // userStore.setUser(user.value)

        return true
    }

    function logout() 
    {
        user.value = null
        userStore.setUser(null)

        axios.defaults.headers.common['X-Authorization'] = null

        router.push({name: 'home'})
    }

    return {
        user,
        checkUser,
        logout
    }
})