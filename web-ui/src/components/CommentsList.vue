<template>
  <div>comments list</div>
</template>

<script>
export default {
    name: 'CommentsList',
    computed: {
        comments() {
            return this.$store.getters.LIST_COMMENTS 
        }
    },
}
</script>

<style lang="scss" scoped>

</style>