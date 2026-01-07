<template>
    <v-card>
        <v-layout>
            <sidebar />

            <v-main>
                <v-container fluid class="main px-4">
                    <v-card class="px-4">
                        <v-card-item>
                            <v-card-title class="text-h4">
                                <strong>{{ pageTitle }}</strong>
                            </v-card-title>
                        </v-card-item>

                        <v-card-text>
                            <router-view />
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-main>
        </v-layout>
    </v-card>

    <snackbar />
</template>

<script setup>
    import { computed, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import Sidebar from './components/Sidebar.vue'
    import Snackbar from './components/Snackbar.vue'
    import { useAuthStore } from './stores/authStore'

    const route = useRoute()

    const authStore = useAuthStore()

    // Computed
    const pageTitle = computed(() => {
        return route.meta.title
    })

    onMounted(() => {
        authStore.checkUser()
    })
</script>

<style scoped>
    .main {
        min-height: 100vh;
    }   
</style>