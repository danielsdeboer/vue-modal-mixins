export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  methods: {
    hideModal () {
      this.$emit('hide-modal', { modal: this.name })
    },
  },
}