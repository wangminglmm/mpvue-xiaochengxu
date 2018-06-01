<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userinfo.avatarUrl" :src="userinfo.avatarUrl" background-size="cover1" />
      <div class="userinfo-nickname">
        <card :text="userinfo.nickName"></card>
      </div>
    </div>
    <scroll-view scroll-y style="height:400px;" @scroll="scrollFn" @scrolltolower="toLow">
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
     <div>test scrollView</div>
    </scroll-view>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <div>当前时间{{currentTime}}</div>
    <div>距离当前{{prevTime}}</div>
    <a href="/pages/detail/main" class="counter">去往Vuex示例页面dd{{count}}</a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import card from '@/components/card'
export default {
  data() {
    return {
      motto: "Hello World",
      currentTime: this.formatTime(new Date()),
      prevTime: this.fromNow(new Date().setMonth(3))
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap() {},

    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    },
    async getList(page = 1) {
      wx.showLoading({
        title: "加载中"
      });
      let res = await this.$http.get("topics", {
        tab: "all",
        page,
        limit: 20
      });
      wx.hideLoading();
    },
    scrollFn(e){
      // console.log(e)
    },
    toLow(){
      console.log('滚动到底部了')
    }
  },

  mounted() {
    // 调用应用实例的方法获取全局数据
    this.getList();
  },
  computed: {
    ...mapGetters(["count", "userinfo"])
  }
};
</script>

<style scoped lang="less">
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
