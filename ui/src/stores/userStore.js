import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useUserStore = defineStore('user', () => {
    const user = ref(null)

    const userInitials = computed(() => {
        if(!user.value || !user.value.name) {
            return ''
        }

        fullName = user.value.name
        let initials = fullName.charAt(0)

        const names = fullName.split(' ')
        if(names.length > 1) {
            const lastName = names.length - 1
            initials += names[lastName].charAt(0)
        }

        return initials.toUpperCase()
    })

    function setUser(newUser) {
        if(!newUser) {
            user.value = null
            return
        }

        user.value = { ...newUser }
    }

    return {
        user,
        userInitials,
        setUser,  
    }
})