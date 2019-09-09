<!--
 * @Description: please edit
 * @Command: please edit
 * @Author: zongsh
 * @Date: 2019-09-05 11:31:37
 * @LastEditTime: 2019-09-09 15:49:58
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="movie_body">
    <ul>
      <li v-for="(v,k) in movieList" :key="k">
        <div class="pic_show">
          <img :src="v.img | setWH('128.180')" />
        </div>
        <div class="info_list">
          <h2>{{v.nm}}</h2>
          <p>
            观众评
            <span class="grade">{{v.sc}}</span>
          </p>
          <p>主演: {{v.star}}</p>
          <p>{{v.showInfo}}</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "now_playing",
  data() {
    return {
      movieList: []
    }
  },
  mounted() {
    // 发送ajx请求获取数据
    this.axios.get('/api/movieOnInfoList?cityId=10').then((res) => {
      this.movieList = res.data.data.movieList
    }).catch((err) => {
      console.table(err);
    });
  },
};
</script>

<style scoped>
/* scoped 表示局部使用,避免冲突*/
#content .movie_body {
  flex: 1;
  overflow: auto;
}
.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>