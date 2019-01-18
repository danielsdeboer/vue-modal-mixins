export default {
  props: {
    modalName: {
      type: String,
      required: true,
    },
  },

  methods: {
    hideModal () {
      this.$emit('hide-modal', { modalName: this.modalName })
    },
  },
}