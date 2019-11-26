import axios from 'axios'

// 全局的 axios 默认值
axios.defaults.baseURL = 'http://www.smallboy.club';
axios.defaults.timeout = 2500;
axios.interceptors.request.use((config) => {
  console.log('请求中...');
  return config;
});

/**
 * 用户登录
 * @param {*} callback
 */
export function login(callback) {
  axios({
    method: 'post',
    url: '/thinkphp32/index.php/Home/index/login'
  })
  .then(function (response) {
    localStorage.TOKEN = response.data.data.token;
    callback && callback(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

/**
 * 获取全部列表信息
 * @param {*} callback
 */
export function getAllList(callback) {
  axios({
    method: 'get',
    params: {
      token: localStorage.TOKEN
    },
    url: '/thinkphp32/index.php/Home/index/index'
  })
  .then(function (response) {
    callback && callback(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

/**
 * 根据id获取列表
 * @param {*} callback
 */
export function gektListById(id, callback) {
  axios({
    method: 'get',
    params: {
      token: localStorage.TOKEN,
      id: id,
    },
    url: '/thinkphp32/index.php/Home/index/index'
  })
  .then(function (response) {
    callback && callback(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
