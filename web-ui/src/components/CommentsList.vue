<template class="wrapper">
  <div>
    <el-row v-if="isAuthorized" style="width: 100%; margin: 0 0 15px 0;">
      <el-button icon="el-icon-plus" @click="drawer = true" plain>Add comment</el-button>
    </el-row>

    <div class="comment-list__wrapper">
      <div class="comment-list__item" v-for="(comment, i) in comments" :key="i">
        <el-header class="header">
          <span class="header__author">{{comment.author}}</span>
          <span class="header__created">{{comment.created | datefilter}}</span>
        </el-header>
        <el-main class="main">
          <span class="main__text">{{comment.text}}</span>
        </el-main>
      </div>

      <el-drawer
          title="Create new comment"
          :visible.sync="drawer"
          :before-close="handleCloseDrawer"
          direction="rtl">
        <el-form ref="form-comment" :model="form" :rules="rules" class="drawer-form" @keydown.prevent.enter="createComment">

          <el-form-item label="Text" prop="comment">
            <el-input type="text" v-model="form.comment" />
          </el-form-item>

          <el-button @click.prevent="createComment" type="primary">Add comment</el-button>
          <el-button @click.prevent="cancelForm" plain>Cancel</el-button>
        </el-form>
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentsList',
  computed: {
        comments() {
            const comments = this.$store.getters.LIST_COMMENTS;
            return comments.sort((a, b) => {return new Date(b.created) - new Date(a.created)});
        }
    },
  filters: {
    datefilter (value) {
      return new Date(value).toLocaleString()
    }
  },
  data() {
    return {
      drawer: false,
      form: {
        comment: ''
      },
      rules: {
        comment: [
          {required: true, message: 'Field must be filled', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    async createComment() {
      const valid = await this.$refs['form-comment'].validate;

      if (!valid) return;

      const comment = {
        author: this.user.email,
        text: this.form.comment
      }
      this.$store.commit('PUSH_TO_LIST', comment);
      this.cancelForm();
    },
    cancelForm() {
      this.comment = '';
      this.drawer = false;
    },
    async handleCloseDrawer(done) {
        done();
        this.cancelForm();
    }
  },
}
</script>

<style lang="scss" scoped>
  .comment-list {
    &__wrapper {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    &__item {
      width: 27em;
      min-height: 180px;
      max-height: 200px;
      border-radius: 12px;
      background-color: #808080;
      color: white;
      box-shadow: 0 0 5px black;
      overflow: hidden;
      margin-bottom: 20px;
    }
  }

  .header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgb( 14 , 18, 18 );
    color: goldenrod;
  }

  .drawer-form {
    padding: 15px;
  }
</style>