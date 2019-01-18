export default name => ({
  methods: {
    hideModal () {
      this.$emit(`hide-${name}modal`)
    }
  }
})