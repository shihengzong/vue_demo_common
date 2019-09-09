<!--
 * @Description: please edit
 * @Command: please edit
 * @Author: zongsh
 * @Date: 2019-09-04 17:56:46
 * @LastEditTime: 2019-09-09 16:41:12
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="main">
    <Header title="喵喵mine" />
    <Login />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import Login from "@/components/login";
export default {
  name: "mine",
  components: {
    Header,
    Footer,
    Login
  }
};
</script>

<style  scoped>
/* 样式 */
</style>>
