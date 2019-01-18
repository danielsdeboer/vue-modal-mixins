import toCamelCase from 'lodash.camelcase'

const upperFirst = str => str.charAt(0).toUpperCase() + str.slice(1)
const pascalCase = str => upperFirst(toCamelCase(str))

export default name => ({
  data () {
    return {
      modals: {
        [name]: {
          isVisible: false
        },
      },
    }
  },

  methods: {
    [`show${pascalCase(name)}Modal`] () {
      this.modals[name].isVisible = true
    },

    [`hide${pascalCase(name)}Modal`] () {
      this.modals[name].isVisible = false
    },
  },
})