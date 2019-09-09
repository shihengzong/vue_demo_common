<!--
 * @Description: please edit
 * @Command: please edit
 * @Author: zongsh
 * @Date: 2019-09-05 11:31:37
 * @LastEditTime: 2019-09-09 15:18:18
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="city_body">
    <div class="city_list">
      <Loading v-if="isLoading" />
      <Scroller v-else ref="city_List">
        <div>
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="clearfix">
              <li v-for="v in hotList" :key="v.Id">{{ v.Name }}</li>
            </ul>
          </div>
          <div class="city_sort" ref="city_sort">
            <div v-for="v in cityList" :key="v.Key">
              <h2>{{ v.Key }}</h2>
              <ul>
                <li v-for="v_v1 in v.List" :key="v_v1.Id">{{ v_v1.Name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </Scroller>
    </div>
    <div class="city_index">
      <ul>
        <li v-for="(v,k) in cityList" :key="v.Key" @touchstart="handleToIndex(k)">{{ v.Key }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Global from "../global/index";

export default {
  name: "city",
  data() {
    return {
      cityList: [],
      hotList: [],
      isLoading: true
    };
  },
  mounted() {
    // 从浏览器缓存中获取数据
    var cityList = window.localStorage.getItem("cityList");
    var hotList = window.localStorage.getItem("hotList");
    if (cityList && hotList) {
      // 格式化json
      this.cityList = JSON.parse(cityList);
      this.hotList = JSON.parse(hotList);
    } else {
      // 发送请求获取数据
      this.axios
        .get("/api/cityList")
        .then(res => {
          console.table("res:", res);
          var msg = res.data.msg;
          if (msg === "ok") {
            this.isLoading = false; // 请求数据时的等待时间
            var cities = res.data.data.cities;
            var { cityList, hotList } = this.formatCityList(cities);
            this.cityList = cityList;
            this.hotList = hotList;
            // 存入浏览器缓存
            window.localStorage.setItem("cityList", JSON.stringify(cityList));
            window.localStorage.setItem("cityList", JSON.stringify(hotList));
          }
        })
        .catch(err => {
          alert.table(err);
        });
    }
  },

  // 城市按首字母索引
  methods: {
    formatCityList(citys) {
      // hotList
      var hotList = [];
      for (let i = 0; i < citys.length; i++) {
        var currHotCity = citys[i];
        if (currHotCity.isHot === 1) {
          hotList.push({ Name: currHotCity.nm, Id: currHotCity.id });
        }
      }
      // 按首字母排序
      hotList.sort(function (n1, n2) {
        if (n1.Key > n2.Key) {
          return 1;
        } else if (n1.Key < n2.Key) {
          return -1;
        } else {
          return 0;
        }
      });
      console.table(hotList);

      // cityList
      var cityList = [];
      for (let i = 0; i < citys.length; i++) {
        var currCity = citys[i];
        var firstWord = currCity.py.substring(0, 1).toUpperCase();
        // console.log("firstWord: " + firstWord);
        if (ToCom(firstWord)) {
          // 已经存在有当前字母开头的城市,则插入key+city
          cityList.push({
            Key: firstWord,
            List: [{ Name: currCity.nm, Id: currCity.id }]
          });
        } else {
          // console.log(
          //   "currCity.nm: " + currCity.nm + "currCity.id:" + currCity.id
          // );
          for (let k = 0; k < cityList.length; k++) {
            if (cityList[k].Key === firstWord) {
              cityList[k].List.push({ Name: currCity.nm, Id: currCity.id });
            }
          }
        }
      }

      function ToCom(firstWord) {
        for (let k = 0; k < cityList.length; k++) {
          if (cityList[k].Key === firstWord) {
            return false;
          }
        }
        return true;
      }

      // 按首字母排序
      cityList.sort(function (n1, n2) {
        if (n1.Key > n2.Key) {
          return 1;
        } else if (n1.Key < n2.Key) {
          return -1;
        } else {
          return 0;
        }
      });
      console.table(cityList);

      return {
        cityList,
        hotList
      };
    },
    handleToIndex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName('h2');
      this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
      // this.$refs.city_List.toScrollTop(-h2[index].offsetTop);
    },
  }
};
</script>

<style scoped>
/* scoped 表示局部使用,避免冲突*/
#content .city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>