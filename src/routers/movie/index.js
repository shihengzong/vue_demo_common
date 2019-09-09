/*
 * @Description: please edit
 * @Command: please edit
 * @Author: zongsh
 * @Date: 2019-09-05 10:46:25
 * @LastEditTime: 2019-09-06 09:12:14
 * @LastEditors: zongsh
 */

export default {
  path: '/movie',
  component: () => import('@/views/movie'), // @符号表示src目录
  // 二级路由
  children: [
    {
      path: 'city',
      component: () => import('@/components/city')
    },
    {
      path: 'now_playing',
      component: () => import('@/components/now_playing')
    },
    {
      path: 'coming_soon',
      component: () => import('@/components/coming_soon')
    },
    {
      path: 'search',
      component: () => import('@/components/search')
    },
    {
      path: '/movie',
      redirect: '/movie/now_playing'
    }
  ],
};