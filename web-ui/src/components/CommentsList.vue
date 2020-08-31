<template>
  <div>
    <div v-for="(comment, i) in comments" :key="i">
        <p>{{comment.author}}</p>
        <p>{{comment.text}}</p>
    </div>
  </div>
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