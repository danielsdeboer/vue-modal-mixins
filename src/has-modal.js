import toCamelCase from 'lodash.camelcase'

const upperFirst = str => str.charAt(0).toUpperCase() + str.slice(1)
const toVarPart = str => upperFirst(toCamelCase(str))

export default name => ({
  data () {
    return {
      modal: {
        [name]: {
          isVisible: false
        },
      },
    }
  },

  methods: {
    [`show${toVarPart(name)}Modal`] () {
      this.modal[name].isVisible = true
    },

    [`show${toVarPart(name)}Modal`] () {
      this.modal[name].isVisible = false
    }
  }
})