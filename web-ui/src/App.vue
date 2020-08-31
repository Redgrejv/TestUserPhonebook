<template>
  <div id="app" class="wrapper">
    <nav-menu />

    <el-container>
      <el-header class="header">

          <el-container v-if="!isAuthorized" class="header-items">
            <el-button @click="goTo('SignIn')">SignIn</el-button>
            <el-button @click="goTo('SignUp')">SignUp</el-button>
          </el-container>
          

          <el-container v-if="isAuthorized" class="header-items">
            <span>{{ user.email }}</span>

            <el-avatar shape="circle" size="medium" :src="circleUrl"></el-avatar>

            <el-dropdown
              style="cursor: pointer;" trigger="click">
              <span class="el-dropdown-link">
                Menu<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Profile</el-dropdown-item>
                <el-dropdown-item @click.native="$store.dispatch('SIGN_OUT')">Logout</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-container>
          

      </el-header>


      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import NavMenu from "./components/NavMenu";

export default {
  components: {
    NavMenu,
  },
  computed: {
    routes() {
      return []
    }
  },
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    }
  },
  methods: {
    goTo(name) {
      this.$router.push({name})
    }
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

htmp, body {
  margin: 0;
  padding: 0;
  width: 100%;
}

.wrapper {
  width: 100%;
  display: flex;

  &-content {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
  }
}

</style>
<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    &-items {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      & > * {
        margin: 0 10px;
      }
    }
  }
</style>