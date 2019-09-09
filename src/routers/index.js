/*
 * @Description: please edit
 * @Command: please edit
 * @Author: zongsh
 * @Date: 2019-09-04 17:18:27
 * @LastEditTime: 2019-09-09 14:49:49
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL, // 设置base目录
  routes: [
    movieRouter,
    mineRouter,
    cinemaRouter,
    {
      // 如果有404,跳转到 movie页面
      path: '/*',
      redirect: '/movie'
    }
  ]
})
