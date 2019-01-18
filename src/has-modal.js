import toCamelCase from 'lodash.camelcase'

export default name => ({
  data () {
    return {
      modals: {
        [toCamelCase(name)]: {
          isVisible: false
        },
      },
    }
  },

  methods: {
    showModal (name) {
      this.modals[toCamelCase(name)].isVisible = true
    },

    hideModal (name) {
      this.modals[toCamelCase(name)].isVisible = false
    },
  },
})