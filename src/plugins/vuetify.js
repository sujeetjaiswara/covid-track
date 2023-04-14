import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'
import * as labs from 'vuetify/labs/components'

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
})