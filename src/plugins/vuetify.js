import { createVuetify} from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'
import * as labs from 'vuetify/labs/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import colors from 'vuetify/lib/util/colors'

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: colors.grey.darken4, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    // error: '#B00020',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FB8C00',
  }
}

const myCustomDarkTheme = {
  dark: true,
  colors: {
    primary: colors.grey.darken4, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    // error: '#B00020',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FB8C00',
  }
}

export default createVuetify({
  components: {
    VDataTable,
    ...labs,
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