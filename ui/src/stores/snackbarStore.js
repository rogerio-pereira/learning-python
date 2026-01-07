import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useSnackbarStore = defineStore('snackbar', () => {
    const message = ref('')
    const color = ref('info') // info, success, error, warning
    const timeout = ref(3000)
    const active = ref(false)

    function show(newMessage, newColor = 'info', newTimeout = 3000) {
        message.value = newMessage
        color.value = newColor
        timeout.value = newTimeout
        timeout.active = true
    }

    function hide() {
        active.value = false

        message.value = ''
        color.value = 'info'
        timeout.value = 3000
    }

    return {
        message,
        color,
        timeout,
        active,
        show,
        hide
    }
})