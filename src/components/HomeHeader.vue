<template>
  <el-header class="m-header">
    <el-row
      class="content"
      type="flex"
      align="middle">
      <el-col :span="3">
        <router-link
          class="logo"
          to="/">
          舰娘魔改
        </router-link>
      </el-col>
      <el-col
        :span="5"
        :offset="1">
        <el-input
          v-model="keyword"
          placeholder="开始翻小姐姐的衣橱"
          clearable />
      </el-col>
      <el-col :span="2">
        <el-button
          class="search_button"
          type="primary"
          icon="el-icon-search">成为绅士</el-button>
      </el-col>
      <el-col
        :span="10"
        :offset="2">
        <el-menu
          class="nav"
          mode="horizontal"
          :default-active="activeRouter"
          router>
          <el-menu-item index="/home">主页</el-menu-item>
          <el-menu-item index="/console">控制台</el-menu-item>
          <el-menu-item class="m-hoverable" index="/login">
            <span v-if="!isLogin">登录</span>
            <span v-if="isLogin" class="normal">已登录</span>
            <span v-if="isLogin" class="hover" @click.stop="signOut">注销</span>
          </el-menu-item>
          <el-menu-item index="/register">注册</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomeHeader',
  data() {
    return {
      keyword: '',
      activeRouter: '/home',
    };
  },
  computed: {
    ...mapState({
      isLogin: 'isLogin',
    }),
  },
  methods: {
    async signOut() {
      const response = await this.$http.post('/v1/sign_out');
      this.$store.dispatch('checkLogin');
      return response.data.result;
    },
  },
};
</script>

<style lang="scss" scoped>
.m-header {
  $grey-gradient: linear-gradient(to bottom, #404040, #464646, #404040);
  $light-blue-shadow: 0 0 15px #279293;
  background: $grey-gradient;
  .content {
    width: 1160px;
    margin: 0 auto;
  }
  .search_button {
    background: linear-gradient(to bottom, #156766, #1aa4ab);
  }
  .logo {
    color: #fff;
    font-size: 2rem;
  }
  .nav {
    background: inherit;
    font-weight: bold;
    .el-menu-item {
      background: $grey-gradient;
      color: #fff;
      font-size: 1.3rem;
    }
    .el-menu-item:hover {
      background: $grey-gradient;
      text-shadow: $light-blue-shadow, $light-blue-shadow, $light-blue-shadow,
        $light-blue-shadow, $light-blue-shadow;
    }
  }
}
.m-hoverable {
  cursor: default;
  color: #000;
  text-decoration: none;
  & .hover {
    display: none;
  }
  &:hover .normal {
    display: none;
  }
  &:hover .hover {
    display: inline; /* CHANGE IF FOR BLOCK ELEMENTS */
  }
}
</style>
