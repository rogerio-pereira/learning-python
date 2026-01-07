<template>
    <v-snackbar
        v-model="snackbarStore.active"
        :timeout="snackbarStore.timeout"
        :color="snackbarStore.color"
        location='top'
        multi-line
        class="text-pre-wrap"
    />
</template>

<script setup>
    import { useSnackbarStore } from '@/stores/snackbarStore'

    const snackbarStore = useSnackbarStore()
</script>

<style scoped>

</style>