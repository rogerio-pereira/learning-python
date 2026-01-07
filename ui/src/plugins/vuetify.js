// Styles
import 'vuetify/styles'

// Fonts
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

// Optional Italic Styles
import '@fontsource/roboto/100-italic.css'
import '@fontsource/roboto/300-italic.css'
import '@fontsource/roboto/400-italic.css'
import '@fontsource/roboto/500-italic.css'
import '@fontsource/roboto/700-italic.css'
import '@fontsource/roboto/900-italic.css'

// Icons
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// import { VCalendar } from 'vuetify/labs/VCalendar'
// import { VDateInput } from 'vuetify/labs/VDateInput'

export default createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                dark: false,
                colors: {
                    // background: '#F5F5F5',
                    // surface: '#FFFFFF',
                    // surfaceVariant: '#E0E0E0',
                    // onSurface: '#212121',

                    // primary: '#1976D2',
                    // 'primary-darken-1': '#1565C0',

                    // secondary: '#424242',
                    // 'secondary-darken-1': '#373737',

                    // accent: '#82B1FF',
                    // 'accent-darken-1': '#448AFF',

                    // error: '#FF5252',
                    // info: '#2196F3',
                    // success: '#4CAF50',
                    // warning: '#FB8C00',
                },
            },
            dark: {
                dark: true,
                colors: {
                    // background: '#1E1E1E',
                    // surface: '#2C2C2C',
                    // surfaceVariant: '#3A3A3A',
                    // onSurface: '#E0E0E0',

                    // primary: '#2196F3',
                    // 'primary-darken-1': '#1976D2',

                    // secondary: '#424242',
                    // 'secondary-darken-1': '#373737',

                    // accent: '#FF4081',
                    // 'accent-darken-1': '#F50057',

                    // error: '#FF5252',
                    // info: '#2196F3',
                    // success: '#4CAF50',
                    // warning: '#FB8C00',
                },
            },
        },
    },
    components: {
        // VDateInput,
        // VCalendar,
        ...components
    },
    directives
})