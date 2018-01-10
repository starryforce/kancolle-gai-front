import axios from 'axios';

export default {
  async getLoginState() {
    const response = await axios.get('/v1/checkLogin');
    const isLogin = response.data.isLogin;
    return isLogin;
  },
};
