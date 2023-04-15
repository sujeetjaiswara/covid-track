import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// import colors from 'vuetify/lib/util/colors'

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: '#212121',
    secondary: '#424242',
    // error: '#B00020',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FB8C00',
  }
}

const myCustomDarkTheme = {
  dark: true,
  colors: {
    primary: '#212121',
    secondary: '#424242',
    // error: '#B00020',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FB8C00',
  }
}

export default createVuetify({
  components: {
    VDataTable,
    VSkeletonLoader,
  },
  defaults: {
    VDataTable: {
      fixedHeader: true,
      noDataText: 'Results not found',
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    themes: {
      light: myCustomLightTheme,
      dark: myCustomDarkTheme
    },
  },
})