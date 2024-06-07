import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const cvLightTheme = {
  dark: false,
  colors: {
    primary: '#212121',
    secondary: '#424242'
  }
}

const cvDarkTheme = {
  dark: true,
  colors: {
    primary: '#101415',
    secondary: '#101415'
  }
}

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    themes: {
      light: cvLightTheme,
      dark: cvDarkTheme
    }
  }
})
