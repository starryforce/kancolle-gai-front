<template>
  <el-container id="app" direction="vertical">
    <HomeHeader />
    <router-view class="g-main"></router-view>
    <HomeFooter />
  </el-container>
</template>

<script>
import HomeHeader from './components/HomeHeader';
import HomeFooter from './components/HomeFooter';

export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeFooter,
  },
  beforeCreate() {
    this.$store.dispatch('checkLogin').then(() => {
      const { isLogin } = this.$store.state;
      if (this.$router.currentRoute.matched.some(record => record.meta.requiresAuth)) {
        if (!isLogin) {
          this.$router.push({
            path: '/login',
            query: {
              redirect: this.$router.fullPath,
            },
          });
        }
      }
    });
  },
};
</script>
<style lang="scss" src="./styles/reboot.scss"></style>
<style lang="scss" src="./styles/common.scss"></style>
<style lang="scss">
.g-main {
  width: 1160px;
  min-height: 827px;
  margin: 20px auto;
}
body {
  min-width: 1160px;
  background-image: url(./assets/brickwall.png);
}
</style>
