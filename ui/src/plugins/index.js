import vuetify from './vuetify'

import router from '../router'
import store from '../stores'

import axios from 'axios'
import VueAxios from 'vue-axios'

// axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
// axios.defaults.headers.common['Authorization'] = ''

export function registerPlugins(app) {
    app.use(vuetify)
        .use(VueAxios, axios)
        .use(store)
        .use(router)
}