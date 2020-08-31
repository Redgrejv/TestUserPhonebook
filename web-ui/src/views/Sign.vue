<template>
  <div class="wrapper-content max-size">
    <h2>{{ actionByType.title }}</h2>

    <el-form :rules="rules" class="sign-form" :model="userInfo" ref="sign" label-position="left">
      <el-form-item label="Email" prop="email">
        <el-input v-model="userInfo.email"></el-input>
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="userInfo.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click.prevent="sign">{{actionByType.submit.buttonText}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Sign",
  props: {
    action: {
      type: String,
      default: "up",
    },
  },
  data() {
    return {
      userInfo: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: "Please input email address",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"],
          },
        ],
        password: [
            {
                required: true,
                message: 'Please input password',
                trigger: 'blur'
            },
            {
                min: 4,
                max: 32,
                message: 'Password length must be 4 - 32 words',
                trigger: ['blur', 'trigger']
            }
        ],
      },
    };
  },
  computed: {
    actionByType() {
      return {
        in: {
          title: "Login",
          submit: {
            buttonText: "Enter",
            successText: "You success authorize",
          },
        },
        up: {
          title: "Registration",
          submit: {
            buttonText: "Register",
            successText: "You success register",
          },
        },
      }[this.action];
    },
  },
  methods: {
    async sign() {
      const valid = (await this.$refs.sign.validate());

      if (!valid) {
        this.errorMessage("Invalid data");
        return;
      }

      try {
        // const user = (await this.axios.post(`/sign/${this.action}`), this.userInfo).data;

        const user = (await this.$store.dispatch(`SIGN_${this.action.toUpperCase()}`, this.userInfo)).data;

        this.$store.commit('setUserInfo', user);
        this.$store.commit('updateUserAuthorization', true)

        this.$router.push({name: 'Home'})

      } catch (e) {
        this.errorMessage(e.message || e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.max-size {
  max-width: 55vw;
  display: flex;
  margin: auto;
}
</style>