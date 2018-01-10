<template>
  <section class="m-login">
    <h1>登录</h1>
    <el-form ref="login" :model="login" :rules="loginRules" status-icon label-width="80px">
      <el-form-item label="昵称" prop="name">
        <el-input v-model.trim="login.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model.trim="login.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="processLogin('login')">登录</el-button>
        <el-button @click="resetInfo('login')">重置</el-button>
      </el-form-item>
      <p>{{isLogin?"已登录":"未登录"}}</p>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      login: {
        name: '',
        password: '',
      },
      loginRules: {
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
        ],
      },
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    processLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/v1/sign_in', {
            name: this.login.name,
            password: this.login.password,
          }).then((response) => {
            if (response.data.result === 'success') {
              // 获取跳转进登录页面的路由，留待登录成功后跳转
              const { redirect } = this.$route.query;
              // 登录成功后清空输入的数据
              this.$refs[formName].resetFields();
              // 修改全局登录状态变量为已登录
              this.$store.dispatch('checkLogin').then(() => {
                // 跳转至之前的页面
                if (redirect !== '/login' && redirect !== '' && !!redirect) {
                  this.$router.push({
                    path: redirect,
                  });
                } else {
                  this.$router.push({
                    path: '/',
                  });
                }
              });
            }
          });
        }
      });
    },
    resetInfo(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss">
.m-login {
  width: 400px;
  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin: 50px auto;
  }
}
</style>
