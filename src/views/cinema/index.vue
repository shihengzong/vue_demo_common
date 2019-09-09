<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 11:38:47
 * @LastEditTime: 2019-09-09 16:20:17
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="main">
    <Header title="喵喵cinema" />
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="brand_swtich">
          品牌
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="feature_switch">
          特色
          <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>
      <CiList />
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from '@/components/header';
import TabBar from '@/components/footer';
import CiList from '@/components/ci_list';

export default {
  name: 'Cinema',
  components: {
    Header,
    TabBar,
    CiList
  }
}
</script>

<style scoped>
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
</style>
