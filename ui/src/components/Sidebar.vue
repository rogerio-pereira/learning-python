<template>
    <v-navigation-drawer 
        permanent
        class="d-flex left-menu"
    >
        <v-list>
            <v-list-item
                :title="userStore.user ? userStore.user.name : 'Guest'"
                nav
            >
                <template v-slot:prepend>
                    <v-avatar color="primary">
                        {{ userStore.userInitials ?? 'G' }}
                    </v-avatar>
                </template>
            </v-list-item>

            <!-- Logout -->
             <router-link to="#" class="mainMenuLink" title="Logout" @click.prevent="'authStore.logout'">
                <v-list-item prepend-icon="mdi-logout" title="Logout" />
             </router-link>

            <v-divider />

             <v-list density="compact">
                <!-- Dashboard -->
                <router-link :to="{name: 'home'}" class="mainMenuLink" title="Dashboard">
                    <v-list-item prepend-icon="mdi-home-city" title="Dashboard" />
                </router-link>

                <v-divider />

                <div class="text-subtitle-1">
                    Subtitle
                </div>
            </v-list>
        </v-list>

        <template v-slot:append>
            <v-footer class="justify-center align-self-end" color="primary">
                <v-switch
                    v-model="themeMode"
                    true-value="light"
                    false-value="dark"
                    prepend-icon="mdi-weather-night"
                    density="compact"
                    @click.stop=""
                    hide-details="auto"
                    inset
                >
                    <template v-slot:label>
                        <v-icon>mdi-weather-sunny</v-icon>
                    </template>
                </v-switch>
            </v-footer>
        </template>
    </v-navigation-drawer>
</template>

<script setup>
    import { ref, computed, watch } from 'vue'
    import { useTheme } from 'vuetify'
    import { useAuthStore } from '@/stores/authStore'
    import { useUserStore } from '@/stores/userStore';

    // Stores
    const authStore = useAuthStore()
    const userStore = useUserStore()

    // Variables
    const themeMode = ref('light')
    const theme = useTheme()

    // Watchers
    watch(themeMode, (themeMode) => {
        theme.global.name.value = themeMode
    })
</script>

<style scoped>
    a.mainMenuLink {
        color: inherit !important;
        text-decoration: none;
        padding: 4px 0px
    }

    div.link {
        color: inherit !important;
        text-decoration: none;
        padding: 4px 0px
    }

    nav.left-menu {
        height: 100vh !important;
        max-height: 100vh !important;
        overflow-y: auto !important;
        position: fixed !important;
    }

    .v-list-group__items .v-list-items {
        padding-inline-start: 16px !important;
    }
</style>