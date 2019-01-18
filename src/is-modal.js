export default {
  props: {
    modalName: {
      type: String,
      required: true,
    },
    closesOnEsc: {
      type: Boolean,
      default: true,
    }
  },

  methods: {
    hideModal () {
      this.$emit('hide-modal', { modalName: this.modalName })
    },

    closeOnEsc (event) {
      if (event.keyCode == 27) {
        this.hideModal()
      }
    },
  },

  mounted () {
    if (this.closesOnEsc) {
      document.addEventListener('keydown', this.closeOnEsc)  
    }
  },

  beforeDestroy () {
    if (this.closesOnEsc) {
      document.removeEventListener('keydown', this.closeOnEsc)
    }
  },
}