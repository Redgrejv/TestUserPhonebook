<template>
  <div class="wrapper-content">
    <comments-list></comments-list>
  </div>
</template>

<script>

import CommentsList from "../components/CommentsList";

export default {
  name: 'Home',
  components: {
    CommentsList
  }
}
</script>
