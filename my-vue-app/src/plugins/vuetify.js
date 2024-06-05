// src/plugins/vuetify.js
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { VApp, VAppBar, VBtn, VCard, VContainer, VFooter, VIcon, VLayout, VMain, VParallax, VRow, VSpacer, VToolbarTitle } from 'vuetify/components'

const vuetify = createVuetify({
  components: {
    VApp,
    VAppBar,
    VBtn,
    VCard,
    VContainer,
    VFooter,
    VIcon,
    VLayout,
    VMain,
    VParallax,
    VRow,
    VSpacer,
    VToolbarTitle,
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        primary: '#4B0082', // Indigo
        secondary: '#FFD700', // Gold
        accent: '#8B0000', // Dark Red
        error: '#FF6347', // Tomato Red
        background: '#F5F5F5', // Light Grey
        info: '#4682B4', // Steel Blue
        success: '#32CD32', // Lime Green
        warning: '#FFA500', // Orange
      },
    },
  },
})

export default vuetify
